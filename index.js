//required dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const TemplateGenerator = require('./src/TemplateGenerator.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

//options
const outputLocation = "./docs/";

//run on command: 'node index.js' 
const main = async() => {
    //main function runs when called directly but not for tests - https://codewithhugo.com/node-module-entry-required/
    if (require.main === module) {
        const employees = [];
        console.log("Welcome to the software team website generator utility. Please answer the following questions about the teams manager.");
        //get inputs for variable amount of managers, engineers and interns
        const managerInputs = await collectInputs([], getManagerPrompts());
        //iterate over the entries and assign them to manager objects, then add to employees array
        for (const element of managerInputs) {
            const manager = new Manager();
            manager.employeeName = element.managerName;
            manager.description = element.managerDescription;
            manager.imageUrl = element.managerImageUrl;
            manager.id = element.managerId;
            manager.email = element.managerEmail;
            manager.officeNumber = element.managerOffice;
            employees.push(manager);
        }
        console.log("Please answer the following questions about the teams engineer(s).");
        const engineerInputs = await collectInputs([], getEngineerPrompts());
        for (const element of engineerInputs) {
            const engineer = new Engineer();
            engineer.employeeName = element.engineerName;
            engineer.description = element.engineerDescription;
            engineer.imageUrl = element.engineerImageUrl;
            engineer.id = element.engineerId;
            engineer.email = element.engineerEmail;
            engineer.gitHub = element.engineerGitHub;
            employees.push(engineer);
        }
        console.log("Please answer the following questions about the teams intern(s).");
        const internInputs = await collectInputs([], getInternPrompts());
        for (const element of internInputs) {
            const intern = new Intern();
            intern.employeeName = element.internName;
            intern.description = element.internDescription;
            intern.imageUrl = element.internImageUrl;
            intern.id = element.internId;
            intern.email = element.internEmail;
            intern.school = element.internSchool;
            employees.push(intern);
        }
        console.log("Generating HTML and CSS file in ./docs/. Please open ./doc/index.html to see the results.");
        //get an instance of template generator and use the HTML and CSS it generates to create files
        const templateGenerator = new TemplateGenerator(employees);
        writeFile(outputLocation + "hero.css", templateGenerator.cssString);
        writeFile(outputLocation + "index.html", templateGenerator.htmlString);
        console.log("Process complete. Exiting.");
        // process.exit();
    }
};

//Write file https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/
const writeFile = (writeTo, outputString) => {
    fs.writeFile(writeTo, outputString, function(err) {
        if (err) return console.log(err);
    });
};

//To get unlimited number of entries - http://www.penandpaperprogrammer.com/blog/2018/12/16/repeating-questions-with-inquirerjs
const collectInputs = async(inputs = [], prompts) => {
    const { again, ...answers } = await inquirer.prompt(prompts);
    const newInputs = [...inputs, answers];
    //it should return 
    return again ? collectInputs(newInputs, prompts) : newInputs;
};

//prompts object for manager questions
const getManagerPrompts = () => {
    const prompts = [{
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerDescription",
            message: "What is the manager's description?"
        },
        {
            type: "input",
            name: "managerImageUrl",
            message: "What is the manager's image URL?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's employee ID?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?",
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is the manager's office number?",
        },
        {
            type: "confirm",
            name: "again",
            message: "Do you want to add another manager?",
            default: true
        }
    ];
    return prompts;
};

//prompts object for engineer questions
const getEngineerPrompts = () => {
    const prompts = [{
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineerDescription",
            message: "What is the engineer's description?"
        },
        {
            type: "input",
            name: "engineerImageUrl",
            message: "What is the engineer's image URL?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's employee ID?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?",
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "What is the engineer's GitHub username?",
        },
        {
            type: "confirm",
            name: "again",
            message: "Do you want to add another engineer?",
            default: true
        }
    ];
    return prompts;
};

//prompts object for intern questions
const getInternPrompts = () => {
    const prompts = [{
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "internDescription",
            message: "What is the intern's description?"
        },
        {
            type: "input",
            name: "internImageUrl",
            message: "What is the intern's image URL?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's employee ID?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?",
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the intern's university/college?",
        },
        {
            type: "confirm",
            name: "again",
            message: "Do you want to add another intern?",
            default: true
        }
    ];
    return prompts;
};

//run main on startup
main();

//this is only being exported so it can be used for unit tests (./test/Index.test.js). It should not effect functionality when ran normally.
module.exports = { getManagerPrompts, collectInputs, writeFile };