const Index = require('../index.js'); //this causes the following error 'Jest did not exit one second after the test run has completed.'
// const Engineer = require('../lib/Engineer.js');
// const Intern = require('../lib/Intern.js');
// const Manager = require('../lib/Manager.js');

// test the movieSearch class object
describe("Index", () => {
    describe('getManagerPrompts', () => {
        it("should return object array for inquirer prompts", () => {
            // Arrange / Act
            const managerPrompts = Index.getManagerPrompts();
            // Assert - https://stackoverflow.com/questions/58238433/check-if-one-object-array-contains-an-element-of-another-object-array-within-jes
            expect(managerPrompts).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        message: expect.any(String),
                        name: expect.any(String),
                        type: expect.any(String)
                    })
                ])
            );
        });

        // it("should return something after generating the html", () => {
        //     // Arrange
        //     const manager = new Manager("test", "test", "test", "test", "test", "test");
        //     const engineer = new Engineer("test", "test", "test", "test", "test", "test");
        //     const intern = new Intern("test", "test", "test", "test", "test", "test");
        //     const employees = [manager, engineer, intern];
        //     // Act
        //     const templateGenerator = new TemplateGenerator(employees);
        //     // Assert
        //     expect(templateGenerator.htmlString).toContain('<!DOCTYPE html>');;
        // });
    });
});