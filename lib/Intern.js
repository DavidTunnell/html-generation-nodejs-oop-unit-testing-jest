const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(employeeName, id, email, school) {
        //super allows for the passing of parameters from the parent class (Employee)
        super(employeeName, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;