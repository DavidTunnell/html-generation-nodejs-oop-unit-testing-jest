const Index = require('../index.js');

// test functions from Index.js
describe("Index", () => {
    describe('getManagerPrompts', () => {
        it("should return object array for inquirer prompts related to manager", () => {
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
    });
});