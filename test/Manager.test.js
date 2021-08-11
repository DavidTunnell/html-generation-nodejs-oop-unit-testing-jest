const Manager = require('../lib/Manager.js');

// test the movieSearch class object
describe("Manager", () => {
    describe('Initialization', () => {
        // Positive test
        it("should create an Manager object with initial properties and those properties should be stored in the object", () => {
            // Arrange
            const employeeName = 'David Tunnell';
            const id = 1;
            const email = 'test@company.io';
            const description = 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.';
            const imageUrl = 'https://source.unsplash.com/800x600/?professional';
            const officeNumber = "A203";
            // Act
            const manager = new Manager(employeeName, id, email, description, imageUrl, officeNumber);
            // Assert
            expect(manager.employeeName).toEqual(employeeName);
            expect(manager.id).toEqual(id);
            expect(manager.email).toEqual(email);
            expect(manager.description).toEqual(description);
            expect(manager.imageUrl).toEqual(imageUrl);
            expect(manager.officeNumber).toEqual(officeNumber);
        });
    });

    // test get function
    describe("getRole", () => {
        it("should return the intern roll with the getRole function", () => {
            // Arrange
            const expectedRole = 'Manager';
            // Act
            const manager = new Manager("test", "test", "test", "test", "test", "test");
            const roleFromObject = manager.getRole();
            // Assert
            expect(roleFromObject).toEqual(expectedRole);
        });
    });
});