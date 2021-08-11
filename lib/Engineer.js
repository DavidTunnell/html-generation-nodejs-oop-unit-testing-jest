const Employee = require('./Employee.js');

//inherits and extends employee
class Engineer extends Employee {
    constructor(employeeName, id, email, description, imageUrl, gitHub) {
        //super allows for the passing of parameters from the parent class (Employee)
        super(employeeName, id, email, description, imageUrl);
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