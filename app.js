const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

console.log("Please build your team...")

function promptManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "nameMang",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "idMang",
            message: "What is your manager's ID?"
        },
        {
            type: "input",
            name: "emailMang",
            message: "What is your manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your manager's office number?"
        },
        {
            type: "list",
            name: "addMember",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I'm finished adding members"]
        }
    ])
        .then(answer => {

            const manager = new Manager(answer.nameMang, answer.idMang, answer.emailMang, answer.officeNumber);

            employees.push(manager);

            switch (answer.addMember) {
                case "Engineer":
                    promptEngineer();
                    break;
                case "Intern":
                    promptIntern();
                    break;
                case "I'm finished adding members":
                    const renderVar = render(employees);
                    fs.writeFile(outputPath, renderVar, (err) => {
                        if (err) throw err;
                        console.log("Your team's page has been created!");
                      })
                    break;
                default:
                    break;
            }
        })
        .catch(function(err) {
            console.log(err);
        });
}

function promptEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "nameEng",
            message: "What is your engineer's name?"
        },
        {
            type: "input",
            name: "idEng",
            message: "What is your engineer's ID?"
        },
        {
            type: "input",
            name: "emailEng",
            message: "What is your engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineer's GitHub username?"
        },
        {
            type: "list",
            name: "addMember",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I'm finished adding members"]
        }
    ])
        .then(answer => {

            const engineer = new Engineer(answer.nameEng, answer.idEng, answer.emailEng, answer.github);

            employees.push(engineer);

            switch (answer.addMember) {
                case "Engineer":
                    promptEngineer();
                    break;
                case "Intern":
                    promptIntern();
                    break;
                case "I'm finished adding members":
                    render(employees);
                    const renderVar = render(employees);
                    fs.writeFile(outputPath, renderVar, (err) => {
                        if (err) throw err;
                        console.log("Your team's page has been created!");
                      })
                    break;
                default:
                    break;
            }
        })
        .catch(function(err) {
            console.log(err);
        });
}

function promptIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "nameInt",
                message: "What is your intern's name?"
            },
            {
                type: "input",
                name: "idInt",
                message: "What is your intern's ID?"
            },
            {
                type: "input",
                name: "emailInt",
                message: "What is your intern's email?"
            },
            {
                type: "input",
                name: "school",
                message: "What is your intern's school?"
            },
            {
                type: "list",
                name: "addMember",
                message: "Which type of team member would you like to add?",
                choices: ["Engineer", "Intern", "I'm finished adding members"]
            }
        ])
        .then(answer => {

            const intern = new Intern(answer.nameInt, answer.idInt, answer.emailInt, answer.school);

            employees.push(intern);

            switch (answer.addMember) {
                case "Engineer":
                    promptEngineer();
                    break;
                case "Intern":
                    promptIntern();
                    break;
                case "I'm finished adding members":
                    render(employees);
                    const renderVar = render(employees);
                    fs.writeFile(outputPath, renderVar, (err) => {
                        if (err) throw err;
                        console.log("Your team's page has been created!");
                      })
                    break;
                default:
                    break;
            }
        })
        .catch(function(err) {
            console.log(err);
        });
}

promptManager();