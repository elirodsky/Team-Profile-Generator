//File setup of the requires
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//required libraries:
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
//helpers:
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const templateEngineRender = require("./src/template")

let team = [];
function createManager() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is the manager's name?"
        },
        {
            name: "id",
            message: "What is the manager's ID?"
        },
        {
            name: "email",
            message: "What is the manager's email?"
        },
        {
            name: "officeNumber",
            message: "What is the manager's officeNumber?"
        }
    ]).then(results => {
        const manager = new Manager(results.name, results.id, results.email, results.officeNumber)
        team.push(manager)
        createTeam()
    }).catch(error => console.log(error))  
}
function createEngineer() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is the Engineer's name?"
        },
        {
            name: "id",
            message: "What is the Engineer's ID?"
        },
        {
            name: "email",
            message: "What is the Engineer's email?"
        },
        {
            name: "github",
            message: "What is the Engineer's github username?"
        }
    ]).then(results => {
        const engineer = new Engineer(results.name, results.id, results.email, results.github)
        team.push(engineer)
        createTeam()
    }).catch(error => console.log(error))  
}
function createIntern() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is the Intern's name?"
        },
        {
            name: "id",
            message: "What is the Intern's ID?"
        },
        {
            name: "email",
            message: "What is the Intern's email?"
        },
        {
            name: "school",
            message: "What is the Intern's school name?"
        }
    ]).then(results => {
        const intern = new Intern(results.name, results.id, results.email, results.school)
        team.push(intern)
        createTeam()
    }).catch(error => console.log(error))  
}
function createTeam(params) {
    
    inquirer.prompt([
        {
            type: "list",
            message: "What employeee type do you want to add to the team?",
            name: "teammate",
            choices: ["Engineer", "Intern", "I'm done making the team!"]
        }
    ]).then(results => {
        if (results.teammate === "Engineer") {
            createEngineer()
        } else if (results.teammate === "Intern") {
            createIntern()
        } else {
           makeTeamFile() 
        }
    })
}
function makeTeamFile() {
    //check if the folder already exists
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, templateEngineRender(team))
}
createManager()

