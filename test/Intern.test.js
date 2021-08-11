const Intern = require('../lib/Intern.js');

// test the movieSearch class object
describe("Intern", () => {
    describe('Initialization', () => {
        // Positive test
        it("should create an Intern object with initial properties and those properties should be stored in the object", () => {
            // Arrange
            const employeeName = 'David Tunnell';
            const id = 1;
            const email = 'test@company.io';
            const description = 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.';
            const imageUrl = 'https://source.unsplash.com/800x600/?office';
            const school = "University of North Carolina at Chapel Hill";
            // Act
            const intern = new Intern(employeeName, id, email, description, imageUrl, school);
            // Assert
            expect(intern.employeeName).toEqual(employeeName);
            expect(intern.id).toEqual(id);
            expect(intern.email).toEqual(email);
            expect(intern.description).toEqual(description);
            expect(intern.imageUrl).toEqual(imageUrl);
            expect(intern.school).toEqual(school);
        });
    });

    // test get function
    describe("getRole", () => {
        it("should return the intern roll with the getRole function", () => {
            // Arrange
            const expectedRole = 'Intern';
            // Act
            const intern = new Intern("test", "test", "test", "test", "test", "test");
            const roleFromObject = intern.getRole();
            // Assert
            expect(roleFromObject).toEqual(expectedRole);
        });
    });
});