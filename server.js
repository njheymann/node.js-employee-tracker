const inquirer = require("inquirer");

const mysql = require("mysql2");

const sqlFunctions = require("./sql-functions");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Password123",
    database: "employees_db",
  },
  console.log("Connected to employees database!")
);

function viewAllDepartments() {
  db.query("SELECT * FROM department", (err, results) => {
    if (err) throw err;
    console.table(results);
    startPrompt();
  });
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
          viewAllDepartments();
          break;
        case "View all roles":
          // Function
          break;
        case "View all employees":
          // Function
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
