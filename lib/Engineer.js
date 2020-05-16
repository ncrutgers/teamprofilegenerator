// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Create class that extends Employee with common properties id, name, email, and new property GitHub. Create functions to return each.

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Super sets and accesses properties from inheritance and its functions
        super(name, id, email);
        // New property particular to Engineer class
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    // Function that returns type of employee
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;