// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email); // Do I need these parameters? What are they doing if I'm not setting them to specific values like in the vehicle/boat example (# of wheels = 0)?
        this.github = github;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }
}

const engineer = new Engineer();

module.exports = Engineer;