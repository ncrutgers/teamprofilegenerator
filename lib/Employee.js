// TODO: Write code to define and export the Employee class
// create class with common properties id, name, email, and functions to return each.

class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;      
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;          
    }

    getEmail() {
        return this.email;    
    }
    // Function that returns type of employee
    getRole() {
        return "Employee";
    }

}

module.exports = Employee;