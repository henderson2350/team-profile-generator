const Employee = require("/Users/clarehenderson/gt/homework/team-profile-generator/lib/Employee.js");
const Manager = require("/Users/clarehenderson/gt/homework/team-profile-generator/lib/Manager.js");
const Engineer = require("/Users/clarehenderson/gt/homework/team-profile-generator/lib/Engineer.js");
const Intern = require("/Users/clarehenderson/gt/homework/team-profile-generator/lib/Intern.js");

var html = "";
// var team = []
// generate the HTML pages
function generateTeam(i) {
  i.forEach((employee) => {
    if (employee.getRole() === "Manager") {
      html += generateManager(employee);
    }
    if (employee.getRole() === "Intern") {
      html += generateIntern(employee);
    }
    if (employee.getRole() === "Engineer") {
      html += generateEngineer(employee);
    }
  });
  return generateFinalHTML(html)
}

// Generate the manager card
const generateManager = (Manager) => {
  // return template literal with the card
  return `<div class="card" style="width: 18rem;  margin: 10px">
    <div style="background-color: red; color: white; padding: 20px">
    <h2>${Manager.name}</h2>
    <h3>Manager</h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${Manager.id}</li>
      <li class="list-group-item">Email: ${Manager.email}</li>
      <li class="list-group-item">Office Number: ${Manager.officeNumber}</li>
    </ul>
  </div>`;
};

const generateIntern = (intern) => {
  // return template literal with the card
  return `<div class="card" style="width: 18rem; margin: 10px">
  <div style="background-color: red; color: white; padding: 20px">
  <h2>${intern.name}</h2>
  <h3>Intern</h3>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.id}</li>
    <li class="list-group-item">Email: ${intern.email}</li>
    <li class="list-group-item">School: ${intern.school}</li>
  </ul>
</div>`;
};

const generateEngineer = (engineer) => {
  // return template literal with the card
  return `<div class="card" style="width: 18rem; margin: 10px">
  <div style="background-color: red; color: white; padding: 20px">
  <h2>${engineer.name}</h2>
  <h3>Engineer</h3>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.id}</li>
    <li class="list-group-item">Email: ${engineer.email}</li>
    <li class="list-group-item">Github: ${engineer.github}</li>
  </ul>
</div>`;
};

const generateFinalHTML = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://kit.fontawesome.com/c502137733.js"></script>
    <title>Document</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading" style="background-color: lightblue">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${html}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};

// console.log(generateTeam(team))
module.exports = generateTeam;
