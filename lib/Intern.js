// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Create class that extends Employee with common properties id, name, email, and new property school. Create functions to return each.

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // Super sets and accesses properties from inheritance and its functions
        super(name, id, email);
        // New property particular to Intern class
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    // Function that returns type of employee
    getRole() {
        return "Intern";
    }    

}

module.exports = Intern;