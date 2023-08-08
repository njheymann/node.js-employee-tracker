const inquirer = require("inquirer");

const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Password123",
    database: "employees_db",
  },
  console.log("Connected to employees database!")
);

// SQL FUNCTIONS
function viewDepartments() {
  db.query("SELECT * FROM department", (err, results) => {
    if (err) throw err;
    console.table(results);
    startPrompt();
  });
}

function viewRoles() {
  db.query("SELECT * from role", (err, results) => {
    if (err) throw err;
    console.table(results);
    startPrompt();
  });
}

function viewEmployees() {
  db.query(
    "SELECT employee.first_name, employee.last_name, role.title, department.department_name, role.salary " +
      "FROM employee " +
      "JOIN role ON employee.role_id = role.id " +
      "JOIN department ON role.department_id = department.id",
    (err, results) => {
      if (err) throw err;
      console.table(results);
      startPrompt();
    }
  );
}

function startPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "questions",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.questions) {
        case "View all departments":
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add a department":
          // Function
          break;
        case "Add a role":
          // Function
          break;
        case "Add an employee":
          // Function
          break;
        case "Update an employee role":
          // Function
          break;
        case "Exit":
          console.log("Closing program");
          process.exit(0);
      }
    });
}

startPrompt();
