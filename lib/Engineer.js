const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(employeeName, id, email, gitHub) {
        //super allows for the passing of parameters from the parent class (Employee)
        super(employeeName, id, email);
        this.gitHub = gitHub;
    }

    getGitHub() {
        return this.gitHub;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;