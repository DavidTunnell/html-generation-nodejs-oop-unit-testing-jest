# OOP HTML Generator via Node.js with Jest Unit Testing

This application takes a series of prompts about members of a software development team and then generates an webpage with summaries of each person. The input is taken via a node console application using the [Inquirer](https://www.npmjs.com/package/inquirer) package and has [Jest](https://www.npmjs.com/package/jest) based unit testing. 

The questions have the following structure. They will ask for at least one of each, a manager, an engineer, and an intern with the ability to repeat how many of each you want to enter. There is validation for images and if an invalid image is entered then a default one will be added. The HTML will then be generated dynamically as output.

It uses the following structure:

* docs/ - rendered output HTML and CSS style sheet - folder name would normally be dist/ but this allows GitHub pages to render it an example can be linked below
* lib/ - classes
* src/ - template helper code
* test/ - jest tests
* index.js - runs the application

When generating this project the commands `npm i inquirer` and `npm i jest --save-dev` were used. Use installation instructions below however.

The generated HTML and CSS files use [Bulma](https://bulma.io/) for a CSS styling library, [Bulma Modal Cards Template](https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/modal-cards.html), for additional styling, [FontAwesome](https://fontawesome.com/) for icons, and [Unsplash](https://source.unsplash.com/) for random related images. The images would be replaced with images of the employees.

An example of the output can be seen here: https://davidtunnell.github.io/html-generation-nodejs-oop-unit-testing-jest/

## Install

You will need to run `npm install` to get the required node modules that can be seen in package.json. You can then run the application via command line while in the root project directory with `node ./index.js`. 

## Testing

The project has unit tests created using Jest. To run the tests, navigate to the test directory (./test/) in the command line and run them with the command `npm run test` because the following is in package.json. 

`"scripts": {
    "test": "jest"
}`

## Screenshot


## Video Walkthrough
[![Everything Is AWESOME](http://i.imgur.com/Ot5DWAW.png)](https://youtu.be/StTqXEQ2l-Y?t=35s "Everything Is AWESOME")

-tests!!!!!!!!!!
-write demo data

deliverables:
* A sample HTML file generated using the application must be submitted. <<<<>>>>
* Your GitHub repository containing your application code.
link to readme
 Repository contains a high-quality readme with description and a link to a walkthrough video.

-walkthrough vid:
* The walkthrough video must show all four tests passing from the command line.
* The walkthrough video must demonstrate how a user would invoke the application from the command line.
* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.
* The walkthrough video must demonstrate a generated HTML file that matches the user input.

