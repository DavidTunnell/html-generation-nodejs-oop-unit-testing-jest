const fs = require('fs');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

class TemplateGenerator {
    // set default values
    constructor(employeesObjectArray) {
        // this.employeesObjectArray = employeesObjectArray;
        this.cssString = this.getCssString();
        this.htmlString = this.getHtmlTemplateString(employeesObjectArray);
    }

    //return css file contents as string without spaces
    //'./src/hero.css'
    getCssString() {
        const text = fs.readFileSync("./src/hero.css", 'utf8');
        return (text.replace(/\s+/g, ' '));
    };

    //every 3 need to be wrapped in html
    wrapInParentHtml(htmlObjectArray) {
        var newData = [];
        let innerHtml = "";
        if (htmlObjectArray.length > 3) {
            // https://stackoverflow.com/questions/63462236/merge-every-3-elements-in-array-javascript
            for (let i = 0; i < htmlObjectArray.length; i += 3) { // i+=3 can solve your problem
                let three = ""; //htmlObjectArray[i] + htmlObjectArray[i + 1] + htmlObjectArray[i + 2]
                // don't pass the ones that aren't null
                if (htmlObjectArray[i]) {
                    three += htmlObjectArray[i];
                }
                if (htmlObjectArray[i + 1]) {
                    three += htmlObjectArray[i + 1];
                }
                if (htmlObjectArray[i + 2]) {
                    three += htmlObjectArray[i + 2];
                }
                newData.push(three)
            }
            for (const setOfHtml of newData) {
                innerHtml += `<div class='columns features'>${setOfHtml}</div>`;
            }
            return innerHtml;
        } else {
            return `<div class='columns features'>${htmlObjectArray}</div>`;
        }
    };

    //return outer html template
    getHtmlTemplateString(employeesObjectArray) {
        let employeeDetails = "";
        let iconHtml = "";
        const returnedHtmlObjects = [];
        for (const employee of employeesObjectArray) {
            // https://stackoverflow.com/questions/10314338/get-name-of-object-or-class
            const currentObjectTypeName = employee.constructor.name;
            if (currentObjectTypeName == "Manager") {
                employeeDetails = this.getHtmlManagerDetails(employee.getId(), employee.getEmail(), employee.getOfficeNumber());
                iconHtml = "<i class='fas fa-tasks'></i>";
            } else if (currentObjectTypeName == "Engineer") {
                employeeDetails = this.getHtmlEngineerDetails(employee.getId(), employee.getEmail(), employee.getGitHub());
                iconHtml = "<i class='fas fa-laptop-code'></i>";
            } else if (currentObjectTypeName == "Intern") {
                employeeDetails = this.getHtmlInternDetails(employee.getId(), employee.getEmail(), employee.getSchool());
                iconHtml = "<i class='fas fa-glasses'></i>";
            }
            returnedHtmlObjects.push(this.getHtmlEmployeeString(employee.getName(), employee.getDescription(), iconHtml, currentObjectTypeName, employee.getImageUrl(), employeeDetails));
        }
        const innerHtml = this.wrapInParentHtml(returnedHtmlObjects);
        return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Our Software Team</title>
                <link rel="stylesheet" href="https://unpkg.com/bulma@0.9.0/css/bulma.min.css" />
                <link rel="stylesheet" type="text/css" href="./hero.css">
                <script src="https://kit.fontawesome.com/e6ff202c8b.js" crossorigin="anonymous"></script>
            </head>
            <body>
                <section class="hero is-info is-small">
                    <div class="hero-body">
                        <div class="container has-text-centered">
                            <p class="title">
                                Our Software Team
                            </p>
                        </div>
                    </div>
                </section>
                <section class="container">
                    ${innerHtml}
                </section>
            </body>
        </html>`.replace(/\s+/g, ' ');
    };

    //return manager html template
    getHtmlEmployeeString(name, description, iconHtml, title, imageUrl, employeeDetails) {
        const isValidUrl = this.isImageUrlValid(imageUrl);
        let urlGettingPassed;
        if (isValidUrl) {
            urlGettingPassed = imageUrl;
        } else {
            urlGettingPassed = "https://source.unsplash.com/800x600/?professional";
        }
        return `
        <div class="column">
            <div class="card is-shady">
                <div class="card-image">
                    <figure class="image">
                        <img src="${urlGettingPassed}" alt="${name}">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        <h4>${name}</h4>
                        <h2>${iconHtml} ${title}</h2>
                        <p>${description}</p>
                        ${employeeDetails}
                    </div>
                </div>
            </div>
        </div>`;
    };

    //return Engineer html template
    getHtmlManagerDetails(id, email, officeNumber) {
        //https://source.unsplash.com/800x600/?professional
        return `
            <ul>
                <li>Employee #: ${id}</li>
                <li>Email: <a href="mailto: ${email}">${email}</a></li>
                <li>Office #: ${officeNumber}</li>
            </ul>`;
    };

    //return Engineer html template
    getHtmlEngineerDetails(id, email, gitHub) {
        //https://source.unsplash.com/800x600/?person
        return `
            <ul>
                <li>Employee #: ${id}</li>
                <li>Email: <a href="mailto: ${email}">${email}</a></li>
                <li>GitHub: <a href="https://github.com/${gitHub}/ " target="_blank ">${gitHub}</a></li>
            </ul>`;
    };

    //return Intern html details
    getHtmlInternDetails(id, email, school) {
        //https://source.unsplash.com/800x600/?office
        return `
            <ul>
                <li>Employee #: ${id}</li>
                <li>Email: <a href="mailto: ${email}">${email}</a></li>
                <li>School: ${school}</li>
            </ul>`;
    };

    //https://stackoverflow.com/questions/18837735/check-if-image-exists-on-server-using-javascript/18837818
    isImageUrlValid(url) {
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        //302 is the code from unspash.com specifically for valid image URLs
        if (http.status != 0) {
            return true;
        }
        return false;
    }

}

module.exports = TemplateGenerator;