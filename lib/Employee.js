//parent employee class that the other classes in this folder inherit
class Employee {
    //the constructor assigns values on instantiation
    constructor(employeeName, id, email, description, imageUrl) {
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    //get functions
    getName() {
        return this.employeeName;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getDescription() {
        return this.description;
    }

    getImageUrl() {
        return this.imageUrl;
    }

    getRole() {
        return "Employee";
    }

}

module.exports = Employee;