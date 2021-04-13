// Dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const render = require("./src/page-template.js") //pageTemplate IS A FUNCTION NOW BEACUSE THAT'S WHAT WE EXPORTED
const path = require("path")
// const Employee = require("Employee")
// const Intern = require("Intern")
// const Manager = require("Manager")
// const Engineer = require("Engineer")
// const pageTemplate = require("pageTemplate")
var array = []

//The dist folder is where the output will land
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "teamz.html");

// Inquirer prompt and write file promise
function runApp() {
  inquirer
  .prompt([
    {
      type: "input",
      message: "What is their name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is their Github username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is their email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is their employee ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is their office number?",
      name: "office",
    },
  ])
  .then((team) => {
    array.push(team)
    const build = buildTeam(array)    
  })
  ;

function buildTeam(array) {
    // Create the output directory if the output path doesn't exist
    console.log(array)
    console.log(array[0])

    if (!fs.existsSync(OUTPUT_DIR)) { //if the output director doesn't exist, make one.
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(array), "utf-8"); //in the output path(which is the folder and the file) write 
  }
}

runApp();