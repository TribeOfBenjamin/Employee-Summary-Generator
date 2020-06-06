// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email); // Do I need these parameters? What are they doing if I'm not setting them to specific values like in the vehicle/boat example (# of wheels = 0)?
        this.school = school;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
}

const intern = new Intern();

module.exports = Intern;