const Engineer = require('../lib/Engineer.js');

// test the movieSearch class object
describe("Engineer", () => {
    describe('Initialization', () => {
        // Positive test
        it("should create an Engineer object with initial properties and those properties should be stored in the object", () => {
            // Arrange
            const employeeName = 'David Tunnell';
            const id = 1;
            const email = 'test@company.io';
            const description = 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.';
            const imageUrl = 'https://source.unsplash.com/800x600/?programmer';
            const gitHub = "DavidTunnell";
            // Act
            const engineer = new Engineer(employeeName, id, email, description, imageUrl, gitHub);
            // Assert
            expect(engineer.employeeName).toEqual(employeeName);
            expect(engineer.id).toEqual(id);
            expect(engineer.email).toEqual(email);
            expect(engineer.description).toEqual(description);
            expect(engineer.imageUrl).toEqual(imageUrl);
            expect(engineer.gitHub).toEqual(gitHub);
        });
    });

    // test get function
    describe("getRole", () => {
        it("should return the engineer roll with the getRole function", () => {
            // Arrange
            const expectedRole = 'Engineer';
            // Act
            const engineer = new Engineer("test", "test", "test", "test", "test", "test");
            const roleFromObject = engineer.getRole();
            // Assert
            expect(roleFromObject).toEqual(expectedRole);
        });
    });
});