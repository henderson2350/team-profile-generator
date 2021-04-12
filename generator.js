// Dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// Inquirer prompt and write file promise

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
    const htmlPageContent = pageContent(response);
    console.log(response)
    
    fs.writeFile("index.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Succesfully created index.html")
    );
  });

// The function that generates the page content which we will write to a file
const pageContent = (response) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile Page</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
        <link rel = "stylesheet" href = ./assets/style.css>
      </head>
      <body>
        <header>
          <div class="jumbotron">
            <h1>Team Profile Page</h1>
          </div>
        </header>
        <main class = "container">

        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        </main>
      </body>
    </html>`;
};

module.exports = pageContent