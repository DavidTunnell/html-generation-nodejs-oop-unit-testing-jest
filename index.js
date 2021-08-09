const TemplateGenerator = require('./src/TemplateGenerator.js');

const obj = new TemplateGenerator("User Input Test");
console.log(obj.userInput);
console.log(obj.cssString);
console.log(obj.htmlString);