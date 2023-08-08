INSERT INTO department (department_name)
VALUES ('Sales'), 
       ('Engineering'), 
       ('Finance'), 
       ('Legal');

INSERT INTO role (title, salary, department_id, name_department)
VALUES  ('Sales Lead', 100000, 01, 'Sales'),
        ('Salesperson', 80000, 01, 'Sales'),
        ('Lead Engineer', 150000, 02, 'Engineering'),
        ('Software Engineer', 120000, 02, 'Engineering'),
        ('Account Manager', 160000, 03, 'Finance'),
        ('Accountant', 125000, 03, 'Finance'),
        ('Legal Team Lead', 250000, 04, 'Legal'),
        ('Lawyer', 190000, 04, 'Legal');


INSERT INTO employee (first_name, last_name, role_id)
VALUES  ('John', 'Kerry', 01),
        ('Susan', 'Boyle', 02),
        ('Jar Jar', 'Binks', 03),
        ('Super', 'Man', 04),
        ('Jane', 'Doe', 05),
        ('Luke', 'Skywalker', 06),
        ('Frederick', 'Clay', 07),
        ('Johanna', 'Stark', 08);

 -- View all roles --
select * from role;

-- View all departments --
select * from department;

-- View all employees --

SELECT 
employee.first_name, 
employee.last_name, 
role.title,
department.department_name,
role.salary

FROM employee
JOIN role ON employee.role_id = role.id
JOIN department ON role.department_id = department.id;

-- Add employee --
INSERT INTO employee (first_name, last_name, role_id, department)
VALUES ();

-- Add department --
INSERT INTO department (id, department_name)
VALUES ();

-- Add role -- 

INSERT INTO role (title, salary, department_id, name_department)
VALUES ();

-- Update employee --
UPDATE employee
SET role_id = -- new role number --
WHERE id = -- employee id --;