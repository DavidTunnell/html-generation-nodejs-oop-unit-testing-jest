const inquirer = require('inquirer');
const fs = require('fs');
const TemplateGenerator = require('./src/TemplateGenerator.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

//To get unlimited number of entries - http://www.penandpaperprogrammer.com/blog/2018/12/16/repeating-questions-with-inquirerjs
const collectInputs = async(inputs = [], prompts) => {
    const { again, ...answers } = await inquirer.prompt(prompts);
    const newInputs = [...inputs, answers];
    //it should return 
    return again ? collectInputs(newInputs, prompts) : newInputs;
};

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

const getInternPrompts = () => {
    const prompts = [{
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "internDescription",
            message: "What is the manager's description?"
        },
        {
            type: "input",
            name: "internImageUrl",
            message: "What is the manager's image URL?"
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



const main = async() => {
    const employees = [];
    //get inputs for variable amount of managers, engineers and interns
    console.log("Welcome to the software team website generator utility. Please answer the following questions about the teams manager.");
    const managerInputs = await collectInputs([], getManagerPrompts());
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
    console.log("Generating HTML and CSS file in ./docs/. Please open index.html to see the results.");
    const templateGenerator = new TemplateGenerator(employees);
    console.log(templateGenerator.htmlString);


};

main();













// const fs = require('fs');
// const inquirer = require('inquirer');


// // const obj = new TemplateGenerator("User Input Test");
// // console.log(obj.userInput);
// // console.log(obj.cssString);
// // console.log(obj.htmlString);

// // const obj = new Engineer("David Tee", 420, "t@SpeechGrammarList.com", "DavidTunnell");
// // const obj = new Intern("David Tee", 420, "t@SpeechGrammarList.com", "DavidTunnell");
// // console.log(obj.getRole());

// main = () => {
//     runInquirer();
// }

// const runInquirer = async() => {
//     var i = 0;
//     let question = "1";
//     while (i < 10) {
//         console.log("The number is " + i);
//         i++;
//         inquirer
//             .prompt([{
//                 type: 'input',
//                 message: 'Provide a title for the project.',
//                 name: 'title'
//             }])
//             .then((response) => {
//                 // format and write file
//                 // writeReadme(fileName, response);
//             })
//             .catch((error) => {
//                 if (error.isTtyError) {
//                     console.error("Prompt couldn't be rendered in the current environment.");
//                 } else {
//                     console.error("Another error occurred. " + error);
//                 }
//             });
//     }


//     // inquirer
//     // .prompt([{
//     //         type: 'input',
//     //         message: 'Provide a title for the project.',
//     //         name: 'title'
//     //     }
//     // ])
//     // .then((response) => {
//     //     // format and write file
//     //     // writeReadme(fileName, response);
//     // })
//     // .catch((error) => {
//     //     if (error.isTtyError) {
//     //         console.error("Prompt couldn't be rendered in the current environment.");
//     //     } else {
//     //         console.error("Another error occurred. " + error);
//     //     }
//     // });
//     // let question = "1";
//     // While(true) {
//     //     if (question == "1") {
//     //         Let answer = await inquirer(q1);
//     //         question = (answer == 'yay') ? "2" : "1";
//     //     } else if (question == "2") {
//     //         Let answer = await inquirer(q2);
//     //         If(answer == 'farts') {
//     //             question = "done";
//     //         } else if (answer == 'dog') {
//     //             question = "1";
//     //         } else {
//     //             question = "2";
//     //         }
//     //     }

// }


// main();