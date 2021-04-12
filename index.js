// Dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const render = require("./src/page-template.js") //pageTemplate IS A FUNCTION NOW BEACUSE THAT'S WHAT WE EXPORTED
const path = require("path") 

let array = []
//The dist folder is where the output will land
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html");

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
  .then((response) => {
    // console.log(response);

    const name = response.name;
    const id = response.id;
    const email = response.email;
    array.push(response);
    console.log(array)

    buildTeam()
  });


  function buildTeam() {
    // Create the output directory if the output path doesn't exist
    
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(), "utf-8");
  }
}

runApp();