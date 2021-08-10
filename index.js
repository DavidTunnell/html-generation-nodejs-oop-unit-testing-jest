const TemplateGenerator = require('./src/TemplateGenerator.js');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

// const obj = new TemplateGenerator("User Input Test");
// console.log(obj.userInput);
// console.log(obj.cssString);
// console.log(obj.htmlString);

// const obj = new Engineer("David Tee", 420, "t@SpeechGrammarList.com", "DavidTunnell");
const obj = new Intern("David Tee", 420, "t@SpeechGrammarList.com", "DavidTunnell");
console.log(obj.getRole());