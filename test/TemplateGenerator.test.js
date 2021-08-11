const TemplateGenerator = require('../src/TemplateGenerator.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');
const Manager = require('../lib/Manager.js');

// test the movieSearch class object
describe("TemplateGenerator", () => {
    describe('Initialization', () => {
        it("should return something after loading the css file", () => {
            // Arrange
            const manager = new Manager("test", "test", "test", "test", "test", "test");
            const engineer = new Engineer("test", "test", "test", "test", "test", "test");
            const intern = new Intern("test", "test", "test", "test", "test", "test");
            const employees = [manager, engineer, intern];
            // Act
            const templateGenerator = new TemplateGenerator(employees);
            // Assert
            expect(templateGenerator.cssString).toEqual(expect.anything());
        });

        it("should return something after generating the html", () => {
            // Arrange
            const manager = new Manager("test", "test", "test", "test", "test", "test");
            const engineer = new Engineer("test", "test", "test", "test", "test", "test");
            const intern = new Intern("test", "test", "test", "test", "test", "test");
            const employees = [manager, engineer, intern];
            // Act
            const templateGenerator = new TemplateGenerator(employees);
            // Assert
            expect(templateGenerator.htmlString).toContain('<!DOCTYPE html>');;
        });
    });
});