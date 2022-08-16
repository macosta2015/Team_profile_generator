// Import classes
const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

// This will be used for the Manager's card
var generateManager = (memberObject) => {
    return `<div class="col-lg-4 col-md-6 col-12 pb-5">
    <div class="card">
      <div class="card-body manager">
        <h5 class="card-title">${memberObject.name}</h5>
        <p class="card-text">Manager</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${memberObject.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${memberObject.email}" target="_blank" class="card-link">${memberObject.email}</a></li>
        <li class="list-group-item">Office: ${memberObject.office}</li>
      </ul>
    </div>
  </div>
  
  `
}

// This will be used to generate Engineer card
var generateEngineer = (memberObject) => {
    return `<div class="col-lg-4 col-md-6 col-12 pb-5">
    <div class="card">
      <div class="card-body engineer">
        <h5 class="card-title">${memberObject.name}</h5>
        <p class="card-text">Engineer</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${memberObject.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${memberObject.email}" target="_blank" class="card-link">${memberObject.email}</a></li>
        <li class="list-group-item">Github: <a href="https://github.com/${memberObject.github}" target="_blank" class="card-link">${memberObject.github}</a></li>
      </ul>
    </div>
  </div>
  
  `
}

// This will be used for the literal for intern cards
var generateIntern = (memberObject) => {
    return `<div class="col-lg-4 col-md-6 col-12 pb-5">
    <div class="card">
      <div class="card-body intern">
        <h5 class="card-title">${memberObject.name}</h5>
        <p class="card-text">Intern</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${memberObject.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${memberObject.email}" target="_blank" class="card-link">${memberObject.email}</a></li>
        <li class="list-group-item">School: ${memberObject.school}</li>
      </ul>
    </div>
  </div>
  
  `
}

function generateHTML(data) {

    var fileString = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="./style.css">
      <title>Team Roster</title>
    </head>
    
    <body>
      <header class="d-flex justify-content-center py-3">
        <h1>Team Profile Generator</h1>
      </header>
    
      <div class="container mt-3">
        <div class="row align-items-center" id="members">
    
          `;

    data.forEach(member => {
        if (member instanceof Manager) {
            var manager = generateManager(member);
            fileString += manager;
        } else if (member instanceof Engineer) {
            var engineer = generateEngineer(member);
            fileString += engineer;
        } else {
            var intern = generateIntern(member);
            fileString += intern;
        }
    });

    fileString += `</div>
    </div>
  </body>
  
  </html>`;

    return fileString;
}

module.exports = generateHTML;