const Employee = require("/Users/clarehenderson/gt/homework/team-profile-generator/lib/Employee.js");
const Manager = require("/Users/clarehenderson/gt/homework/team-profile-generator/lib/Manager.js");
const Engineer = require("/Users/clarehenderson/gt/homework/team-profile-generator/lib/Engineer.js");
const Intern = require("/Users/clarehenderson/gt/homework/team-profile-generator/lib/Intern.js");

var html = "";
// var team = []
// generate the HTML pages
function generateTeam(team) {
  team.forEach((employee) => {
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
  return `<div class="card" style="width: 18rem;">
    <h1>${Manager.name}</h1>
    <h2>Manager</h2>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${Manager.id}</li>
      <li class="list-group-item">${Manager.email}</li>
      <li class="list-group-item">${Manager.officeNumber}</li>
    </ul>
  </div>`;
};

const generateIntern = (intern) => {
  // return template literal with the card
  return `<div class="card" style="width: 18rem;">
  <h1>${intern.name}</h1>
  <h2>Intern</h2>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${intern.id}</li>
    <li class="list-group-item">${intern.email}</li>
    <li class="list-group-item">${intern.school}</li>
  </ul>
</div>`;
};

const generateEngineer = (engineer) => {
  // return template literal with the card
  return `<div class="card" style="width: 18rem;">
  <h1>${engineer.name}</h1>
  <h2>Engineer</h2>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${engineer.id}</li>
    <li class="list-group-item">${engineer.email}</li>
    <li class="list-group-item">${engineer.github}</li>
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
            <div class="col-12 jumbotron mb-3 team-heading">
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
