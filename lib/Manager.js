const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(employeeName, id, email, officeNumber) {
        //super allows for the passing of parameters from the parent class (Employee)
        super(employeeName, id, email);
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