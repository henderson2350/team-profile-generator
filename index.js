// Dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const render = require("./src/page-template.js") //pageTemplate IS A FUNCTION NOW BEACUSE THAT'S WHAT WE EXPORTED
const path = require("path");
const Intern = require("./lib/Intern.js");
const Employee = require("./lib/Employee.js")
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer")
const generateTeam = require("./src/page-template")

// Empty array that we will add all of our employees in the .then statement
var team = []

//The dist folder is where the output will land
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Inquirer prompt and write file promise
function makeManager() {
  inquirer
    .prompt(
      [{
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
      { 
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
      },
      ]
    )
    .then((answers) => {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
      team.push(manager)
      runApp()
    })
}

function runApp() {
  inquirer
  .prompt([
    {
      type: "input",
      message: "What is your employee's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is their employee ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is their email?",
      name: "email",
    },
    {
      type: "list",
      name: "role",
      message: "Are they an intern or engineer?",
      choices: ["Intern", "Engineer"]
    },
    {
      type: "input",
      message: "What is their Github username?",
      name: "github",
      when: (answers) => (answers.role === "Engineer")
    },
    {
      type: "input",
      message: "Where do they attend school?",
      name: "school",
      when: (answers) => (answers.role === "Intern")
    }
  ])
  .then((answers) => {
    if (answers.role === "Intern") {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
      team.push(intern)
    }

    if (answers.role === "Engineer") {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
      team.push(engineer)
    }

    whatNext()
  })

function whatNext() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Do you want to continue or are you done?",
        name: "next",
        choices: ["Continue", "Done"]
      }
    ])
    .then((answers) => {
      if (answers.next === "Continue") {
        runApp()
      } else {
        console.log(team)
        buildTeam()
      }
    })
}

function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) { //if the output director doesn't exist, make one.
      fs.mkdirSync(OUTPUT_DIR)
    }
    // console.log(generateTeam(team)
    console.log(outputPath)
    // console.log(generateTeam(team))

    fs.writeFileSync(outputPath, generateTeam(team), "utf-8"); //in the output path(which is the folder and the file) write 
    
  }
}

makeManager();

// module.exports = team
