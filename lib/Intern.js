const Employee = require('./Employee.js');

//inherits and extends employee
class Intern extends Employee {
    constructor(employeeName, id, email, description, imageUrl, school) {
        //super allows for the passing of parameters from the parent class (Employee)
        super(employeeName, id, email, description, imageUrl);
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