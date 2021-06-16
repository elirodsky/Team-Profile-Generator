function renderTeam(team) {
    const employeeCards = team.map(employee => {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${employee.getName()}</h2>
        <h3 class="card-title"><i class="fas ${getIcon(employee)} mr-2"></i>${employee.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
            <li class="list-group-item">${getDescription(employee)}</li>
        </ul>
    </div>
</div>
        `;
    });
    return employeeCards.join("")
}
function getIcon(employee) {
    switch (employee.getRole()) {
        case "Manager":
            return "fa-mug-hot"
            break;
        case "Engineer":
            return "fa-glasses"
            break;
        case "Intern":
            return "fa-user-graduate"
        default:
            break;
    }
}
function getDescription(employee) {
    switch (employee.getRole()) {
        case "Manager":
            return `Office Number: ${employee.getOfficeNumber()}`;
            break;
        case "Engineer":
            return `Github: ${employee.getGithub()}`;
            break;
        case "Intern":
            return `School: ${employee.getSchool()}`
        default:
            break;
    }
}
module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <!-- Bootstrap CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">"
    </head>
    <body>
        <div class="container-fluid">
            <div class="py-5">
                <h1 class="display-5 fw-bold bg-dark text-light text-center">The Team</h1>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="d-flex justify-content-center flex-wrap">
                    ${renderTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};