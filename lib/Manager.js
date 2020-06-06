// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email); // Do I need these parameters? What are they doing if I'm not setting them to specific values like in the vehicle/boat example (# of wheels = 0)?
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }

    getOffice() {
        return this.officeNumber;
    }
}

const manager = new Manager();

module.exports = Manager;