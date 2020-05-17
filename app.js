const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// Array will store number of team member objects
const team = [];

runInquirer();

// Write code to use inquirer to gather information about the development team members
function runInquirer() {
    inquirer
        .prompt({   

            type: "list",
            message: "Add a member",
            name: "memberType",
            choices: ["Manager", "Engineer", "Intern"]
            
        })
        .then(function(answer) {
            console.log(answer);
            if (answer.memberType === "Manager") {
                addManager();
            }
            else if (answer.memberType === "Engineer") {
                addEngineer();
            } 
            else if (answer.memberType === "Intern") {
                addIntern();
            }
        });
}

// and to create objects for each team member (using the correct classes as blueprints!)
// adds manager member to team array
function addManager() {
    inquirer
        .prompt([{
            type: "input",
            message: "What is the member's name?",
            name: "name"
        }, {
            type: "input",
            message: "What is the member's id?",
            name: "id"
        }, {
            type: "input",
            message: "What is the member's email?",
            name: "email"
        }, {
            type: "input",
            message: "What is the member's office number?",
            name: "office"
        }
        ])
        .then(function(response){
            console.log(response);
            const manager = new Manager(response.name, response.id, response.email, response.office);
            team.push(manager);
            console.log(team);
            if (team.length < 3) {
                runInquirer();
            }
        });   
}

// adds engineer member to team array
function addEngineer() {
    inquirer
        .prompt([{
            type: "input",
            message: "What is the member's name?",
            name: "name"
        }, {
            type: "input",
            message: "What is the member's id?",
            name: "id"
        }, {
            type: "input",
            message: "What is the member's email?",
            name: "email"
        }, {
            type: "input",
            message: "What is the member's GitHub?",
            name: "github"
        }
        ])
        .then(function(response){
            console.log(response);
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            renderManager(engineer);
            team.push(engineer);
            console.log(team);
            if (team.length < 3) {
                runInquirer();
            }
        });
}

// adds intern member to team array
function addIntern() {
    inquirer
        .prompt([{
            type: "input",
            message: "What is the member's name?",
            name: "name"
        }, {
            type: "input",
            message: "What is the member's id?",
            name: "id"
        }, {
            type: "input",
            message: "What is the member's email?",
            name: "email"
        }, {
            type: "input",
            message: "What is the member's school?",
            name: "school"
        }
        ])
        .then(function(response){
            console.log(response);
            const intern = new Intern(response.name, response.id, response.email, response.school);
            renderManager(intern);
            team.push(intern);
            console.log(team);
            if (team.length < 3) {
                runInquirer();
            }
        });
}

// After the user has input all employees desired, call the "render" function (required above) and pass in an array containing all employee objects; the 'render' function will generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML returned from the "render" function. Now write it to a file named "team.html" in the "output" folder. You can use the variable "outputPath" above target this location.

// Hint: you may need to check if the "output" folder exists and create it if it does not.

// Hint: each employee type (manager, engineer or intern) has slightly different information; write your code to ask different questions via inquirer depending on employee type.

// Hint: make sure to build out your classes first! Remember that your Manager, Engineer, and Intern classes should all extend from a class named Employee; see the directions for further information. Be sure to test out each class and verify it generates an object with the correct structure and methods. This structure will be crucial in order for the provided "render" function to work!