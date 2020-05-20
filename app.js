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
// Starts application by adding manager
function start(){
    inquirer
        .prompt([{
            type: "input",           
            message: "What is the manager's name?",            
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
        .then(function(response) {
            console.log(response);
            const manager = new Manager(response.name, response.id, response.email, response.office);
            team.push(manager);
            
            addMember();
        })   
        .catch(function(err) {
            console.log(err);
        });
}
 
function addMember() {
    // Prompts user to add a team member
    promptUser()
    .then(function(answer) {
        console.log(answer);
        if (answer.add == "Yes") {
            console.log("Yes selected!");
            // Prompt user of member type
            promptType()
            .then(function(answers) {
                console.log(answers);
                if (answers.memberType === "Engineer") {
                    console.log("Engineer selected");
                    addEngineer();                            
                } 
                else if (answers.memberType === "Intern") {
                    console.log("Intern selected");
                    addIntern();                            
                }
            })
            .catch(function(err) {
                console.log(err);
            });

        }
        else {
            console.log("No selected");
            // Writes rendered html to output path
            fs.writeFile(outputPath, render(team), function(err){
                if(err){
                    throw err;
                }
                console.log("Success rendering of html!");
            });                    
        }
    })
    .catch(function(err) {
        console.log(err);
    });
}

// Prompt user if adding another team member
function promptUser() {
    return inquirer.prompt({
            type: "list",
            message: "Would you like to add a member to your team?",
            name: "add",
            choices: ["Yes", "No"]
        });
}

// Prompt user of member type: Engineer or Intern
function promptType() {
    return inquirer.prompt({ 
        type: "list",
        message: "Add a member",
        name: "memberType",
        choices: ["Engineer", "Intern"]
    });
}

// Adds engineer member to team array
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

            console.log(engineer.name);
            team.push(engineer);
            console.log(team);
            addMember();
        })
        .catch(function(err) {
            console.log(err);
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

            console.log(intern.name);
            team.push(intern);
            console.log(team);
            addMember();
        })
        .catch(function(err) {
            console.log(err);
        });
}            

start();