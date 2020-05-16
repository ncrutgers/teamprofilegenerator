// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Create class that extends Employee with common properties id, name, email, and new property office number. Create functions to return each.

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Super sets and access properties from inheritance and its functions
        super(name, id, email);
        // New property particular to Manager class
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    // Function that returns type of employee
    getRole() {
        return "Manager";
    }

}

module.exports = Manager;