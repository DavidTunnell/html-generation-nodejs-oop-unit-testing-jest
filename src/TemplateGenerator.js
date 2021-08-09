const fs = require('fs');

class TemplateGenerator {
    // set default values
    constructor(userInput) {
      this.userInput = userInput;
      this.cssString = this.getCssString();
      this.htmlString = this.getHtmlTemplateString();
    }

    //return css file contents as string without spaces
    //'./src/hero.css'
    getCssString() {
        const text = fs.readFileSync("./src/hero.css",'utf8');
        return (text.replace(/\s/g, ''));
    };

    //TODO
    wrapInDivForNextRow () {
        return `<div class="columns features "></a>`;
    };

    //return outer html template
    getHtmlTemplateString() {
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
                    </div>
                </section>
            </body>
        </html>`;
    };

    //return manager html template
    getHtmlManagerString () {
        return `
        <div class="column">
            <div class="card is-shady">
                <div class="card-image">
                    <figure class="image">
                        <img src="https://source.unsplash.com/800x600/?professional" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        <h4>David Tunnell</h4>
                        <h2><i class="fas fa-tasks"></i> Manager</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet nulla labore veniam explicabo nobis neque magni impedit, modi harum veritatis repellat eaque tempore ad maiores illo cumque consectetur saepe!</p>
                        <ul>
                            <li>Employee #: 1</li>
                            <li>Email: <a href="mailto: manager@company.io">manager@company.io</a></li>
                            <li>Office #: A102</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;
    };

    //return Engineer html template
    getHtmlEngineerString (){
        return `
        <div class="column">
            <div class="card is-shady">
                <div class="card-image">
                    <figure class="image">
                        <img src="https://source.unsplash.com/800x600/?person" " alt="Placeholder image ">
                    </figure>
                </div>
                <div class="card-content ">
                    <div class="content ">
                        <h4>Clark Kent</h4>
                        <h2><i class="fas fa-laptop-code "></i> Engineer</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet nulla labore veniam explicabo nobis neque magni impedit, modi harum veritatis repellat eaque tempore ad maiores illo cumque consectetur saepe!</p>
                        <ul>
                            <li>Employee #: 2</li>
                            <li>Email: <a href="mailto: dev@company.io ">dev@company.io</a></li>
                            <li>GitHub: <a href="https://github.com/superman/ " target="_blank ">Superman</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;
    };

    //return Intern html template
    getHtmlInternString (){
        return `
        <div class="column ">
            <div class="card is-shady ">
                <div class="card-image ">
                    <figure class="image ">
                        <img src="https://source.unsplash.com/800x600/?office " alt="Placeholder image ">
                    </figure>
                </div>
                <div class="card-content ">
                    <div class="content ">
                        <h4>Clive Barker</h4>
                        <h2><i class="fas fa-glasses "></i> Intern</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet nulla labore veniam explicabo nobis neque magni impedit, modi harum veritatis repellat eaque tempore ad maiores illo cumque consectetur saepe!</p>
                        <ul>
                            <li>Employee #: 3</li>
                            <li><a href="mailto: intern@company.io ">intern@company.io</a></li>
                            <li>University of Maryland</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;
    };
}

module.exports = TemplateGenerator;