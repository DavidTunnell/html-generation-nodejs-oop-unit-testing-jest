const Employee = require('../lib/Employee.js');

// test the movieSearch class object
describe("Employee", () => {
    describe('Initialization', () => {
        // Positive test
        it("should create an employee object with initial properties and those properties should be stored in the object", () => {
            // Arrange
            const employeeName = 'David Tunnell';
            const id = 1;
            const email = 'test@company.io';
            const description = 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.';
            const imageUrl = 'https://source.unsplash.com/800x600/?programmer';
            // Act
            const employee = new Employee(employeeName, id, email, description, imageUrl);
            // Assert
            expect(employee.employeeName).toEqual(employeeName);
            expect(employee.id).toEqual(id);
            expect(employee.email).toEqual(email);
            expect(employee.description).toEqual(description);
            expect(employee.imageUrl).toEqual(imageUrl);
            expect(employee.imageUrl).toEqual(imageUrl);

        });
    });

    // test get function
    describe("getRole", () => {
        it("should return the employee roll with the getRole function", () => {
            // Arrange
            const expectedRole = 'Employee';
            // Act
            const employee = new Employee("test", "test", "test", "test", "test");
            const roleFromObject = employee.getRole();
            // Assert
            expect(roleFromObject).toEqual(expectedRole);
        });
    });
});