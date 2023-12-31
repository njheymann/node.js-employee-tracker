-- Data seeds for the database --

INSERT INTO department (department_name)
VALUES ('Sales'), 
       ('Engineering'), 
       ('Finance'), 
       ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES  ('Sales Lead', 100000, 1),
        ('Salesperson', 80000, 1),
        ('Lead Engineer', 150000, 2),
        ('Software Engineer', 120000, 2),
        ('Account Manager', 160000, 3),
        ('Accountant', 125000, 3),
        ('Legal Team Lead', 250000, 4),
        ('Lawyer', 190000, 4);


INSERT INTO employee (first_name, last_name, role_id)
VALUES  ('John', 'Kerry', 1),
        ('Susan', 'Boyle', 2),
        ('Jar Jar', 'Binks', 3),
        ('Super', 'Man', 4),
        ('Jane', 'Doe', 5),
        ('Luke', 'Skywalker', 6),
        ('Frederick', 'Clay', 7),
        ('Johanna', 'Stark', 8);

