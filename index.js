const inquirer = require('inquirer');

//To get unlimited number of entries - http://www.penandpaperprogrammer.com/blog/2018/12/16/repeating-questions-with-inquirerjs
const collectInputs = async(inputs = [], prompts) => {
    const { again, ...answers } = await inquirer.prompt(prompts);
    const newInputs = [...inputs, answers];
    return again ? collectInputs(newInputs, prompts) : newInputs;
};

const getManagerPrompts = () => {
    const prompts = [{
            type: 'input',
            name: 'm1',
            message: 'Manager q1: '
        },
        {
            type: 'input',
            name: 'm2',
            message: 'manager q2: '
        },
        {
            type: 'confirm',
            name: 'again',
            message: 'another manager? ',
            default: true
        }
    ];
    return prompts;
};

const getEngineerPrompts = () => {
    const prompts = [{
            type: 'input',
            name: 'e1',
            message: 'e q1: '
        },
        {
            type: 'input',
            name: 'e2',
            message: 'e q2: '
        },
        {
            type: 'confirm',
            name: 'again',
            message: 'another e? ',
            default: true
        }
    ];
    return prompts;
};

const getInternPrompts = () => {
    const prompts = [{
            type: 'input',
            name: 'i1',
            message: 'i q1: '
        },
        {
            type: 'input',
            name: 'i2',
            message: 'i q2: '
        },
        {
            type: 'confirm',
            name: 'again',
            message: 'another i? ',
            default: true
        }
    ];
    return prompts;
};

const main = async() => {
    //get inputs for variable amount of managers, engineers and interns
    const managerInputs = await collectInputs([], getManagerPrompts());
    const engineerInputs = await collectInputs([], getEngineerPrompts());
    const internInputs = await collectInputs([], getInternPrompts());
    console.log(managerInputs);
    console.log(engineerInputs);
    console.log(internInputs);
};

main();













// const fs = require('fs');
// const inquirer = require('inquirer');
// const TemplateGenerator = require('./src/TemplateGenerator.js');
// const Engineer = require('./lib/Engineer.js');
// const Intern = require('./lib/Intern.js');
// const Manager = require('./lib/Manager.js');

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