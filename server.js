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
    "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name, role.salary " +
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

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department_name",
        message: "What is the name of the department?",
      },
    ])
    .then((answer) => {
      const departmentName = answer.department_name;

      db.query(
        "INSERT INTO department SET ?",
        {
          department_name: departmentName,
        },
        (err, results) => {
          if (err) throw err;
          console.log("Department added!");
          startPrompt();
        }
      );
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "role_name",
        message: "What is the name of the role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary of the role?",
      },
      {
        type: "input",
        name: "department_id",
        message: "What is the department ID of the role?",
      },
    ])
    .then((answer) => {
      const roleName = answer.role_name;
      const salary = answer.salary;
      const departmentId = answer.department_id;

      db.query(
        "INSERT INTO role SET ?",
        {
          title: roleName,
          salary: salary,
          department_id: departmentId,
        },
        (err, results) => {
          if (err) throw err;
          console.log("Role added!");
          startPrompt();
        }
      );
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the employee's last name?",
      },
      {
        type: "input",
        name: "role_id",
        message: "What is the employee's role ID?",
      },
      {
        type: "input",
        name: "manager_id",
        message: "What is the employee's manager ID?",
      },
    ])
    .then((answer) => {
      const firstName = answer.first_name;
      const lastName = answer.last_name;
      const roleId = answer.role_id;
      const managerId = answer.manager_id || null;

      db.query(
        "INSERT INTO employee SET ?",
        {
          first_name: firstName,
          last_name: lastName,
          role_id: roleId,
          manager_id: managerId,
        },
        (err, results) => {
          if (err) throw err;
          console.log("Employee added!");
          startPrompt();
        }
      );
    });
}

function updateEmployeeRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "employee_id",
        message: "What is the ID of the employee you would like to update?",
      },
      {
        type: "input",
        name: "role_id",
        message: "What is the new role ID of the employee?",
      },
    ])
    .then((answer) => {
      const employeeId = answer.employee_id;
      const roleId = answer.role_id;

      db.query(
        `UPDATE employee 
        JOIN role ON employee.role_id = role.id
        SET employee.role_id = ?
        WHERE employee.id = ?`,
        [roleId, employeeId],
        (err, results) => {
          if (err) throw err;
          console.log("Employee role updated!");
          startPrompt();
        }
      );
    });
}

function combinedSalaryDep() {
  db.query(
    `SELECT department_name, SUM(salary) AS combined_salary
    FROM department
    JOIN role ON department.id = role.department_id
    GROUP BY department_name`,
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
          "View Department Budgets",
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
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee role":
          updateEmployeeRole();
          break;
        case "View Department Budgets":
          combinedSalaryDep();
          break;
        case "Exit":
          console.log("Closing program");
          process.exit(0);
      }
    });
}

startPrompt();
