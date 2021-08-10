const fs = require('fs');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');
const Manager = require('../lib/Manager.js');

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
        return (text.replace(/\s/g, ''));
    };

    //TODO
    wrapInDivForNextRow() {
        return `<div class="columns features "></a>`;
    };

    //return outer html template
    getHtmlTemplateString(employeesObjectArray) {
        let innerHtml = "";
        let employeeDetails = "";
        for (const employee of employeesObjectArray) {
            // https://stackoverflow.com/questions/10314338/get-name-of-object-or-class
            const currentObjectType = employee.constructor.name;
            if (currentObjectType == "Manager") {
                employeeDetails = this.getHtmlManagerDetails(employee.getId(), employee.getEmail(), employee.getOfficeNumber());
            } else if (currentObjectType == "Engineer") {
                employeeDetails = this.getHtmlEngineerDetails(employee.getId(), employee.getEmail(), employee.getGitHub());
            } else if (currentObjectType == "Intern") {
                employeeDetails = this.getHtmlInternDetails(employee.getId(), employee.getEmail(), employee.getSchool());
            }
            innerHtml += this.getHtmlEmployeeString(employee.getName(), employee.description, currentObjectType, employee.imageUrl, employeeDetails);
        }
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
                    <div class="columns features">
                    ${innerHtml}
                    </div>
                </section>
            </body>
        </html>`.replace(/\s+/g, ' ');
    };

    //return manager html template
    getHtmlEmployeeString(name, description, title, imageUrl, employeeDetails) {

        console.log(this.imageExists(imageUrl));

        //https://source.unsplash.com/800x600/?professional
        return `
        <div class="column">
            <div class="card is-shady">
                <div class="card-image">
                    <figure class="image">
                        <img src="${imageUrl}" alt="${name}">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        <h4>${name}</h4>
                        <h2><i class="fas fa-tasks"></i> ${title}</h2>
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

    imageExists(image_url) {

        var http = new XMLHttpRequest();

        http.open('HEAD', image_url, false);
        http.send();

        return http.status != 404;

    }

}

module.exports = TemplateGenerator;