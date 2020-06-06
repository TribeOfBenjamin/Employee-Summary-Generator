const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
console.log("Please build your team...")


function promptManager() {
    return inquirer.prompt([
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
        }
    ]);
    
}
/*
function promptNextMemberType() {
    return inquirer.prompt([
        {
            type: "list",
            name: "addMember",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I'm finished adding members"]
        }
    ]);
}
*/
    // THIS ONLY CYCLES THROUGH ONCE GIVEN THE NATURE OF .THEN AND IF/THEN STATEMENTS (I THINK)
promptManager()
    .then(function promptNextMemberType() {
        return inquirer.prompt([
            {
                type: "list",
                name: "addMember",
                message: "Which type of team member would you like to add?",
                choices: ["Engineer", "Intern", "I'm finished adding members"]
            }
        ]);
    })
    .then(function(answers) {
        if ( answers.addMember === "Engineer" ) {
            console.log("You chose engineer.");
            inquirer
                .prompt([
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
        } else if ( answers.addMember === "Intern" ) {
            console.log("You chose intern.");
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
        } else {
            console.log("Your team has been created!");
            return;
        }
    })
    //.then(promptNextMemberType())
    .catch(function(err) {
        console.log(err);
    }) 

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
