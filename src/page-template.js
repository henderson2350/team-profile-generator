// Employee = require(Employee)
Manager = require(Manager)
// Engineer = require(Engineer)
// Intern = require(Intern)

// generate the HTML pages
function generateTeam() {
    return ("hello")
    // A method for a template to render manager info
    // if statement that runs the generate manager function if certain criteria are met
   // A method for a template to render engineer info

   // A method for a template to render intern info
}
const generateManager = manager => {
    return `${manager.getName()}`
    // we need to do manager.getName for the first item in the array
}

const generateIntern = intern => {
    // return `${intern.getName()}`
    return ("hello")
}

const generateEngineer = engineer => {
    return `${engineer.getName()}`
}
// const html = [] {}
//    html.push(team
//        .filter(employee => employee.getRole() === "Manager")
//        .map(manager => generateManager(manager))
//    );
//    return html.join("");
// }

module.exports = team => {
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
                ${generateIntern()}
            </div>
        </div>
    </div>
</body>
</html>
    `
}

