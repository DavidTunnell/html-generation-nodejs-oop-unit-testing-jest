const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(employeeName, id, email, description, imageUrl, officeNumber) {
        //super allows for the passing of parameters from the parent class (Employee)
        super(employeeName, id, email, description, imageUrl);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;