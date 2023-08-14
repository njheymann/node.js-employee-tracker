# node.js-employee-tracker
A command line interface to keep track of employees, roles, salaries etc...

## User story  
AS A business owner  
I WANT to be able to view and manage departments, roles, salaries and employees in my company  
SO THAT I can keep track and organise who is hired and what they are doing  

## Acceptance Criteria 
GIVEN a command line interface that accepts my input  
WHEN I start the application  
THEN I am presented with options to view all departments, view all roles, view all employees, add a department, add a role, add an employee,  
update an employees role, check budgets or exit the app.  
WHEN I choose to view all departments  
THEN all my departments are shown in a table with a unique id  
WHEN I choose to view all roles  
THEN all my roles are shown in a table with a unique id, a title of the role, a salary for the role and the department id that it corresponds with  
WHEN I choose to view all employees  
THEN I am presented with a table showing all employees in the database, info including first name, lastname, their role in the business, aswell as the department they are in  
a salary, and a unique id for the employee.  
WHEN I add a department  
THEN I am asked what the name of the new department is and what ID it has, when I finish the input I am told the department was added  
WHEN I add a role  
THEN I am asked what the name of the role is, what the salary is and what department ID it belongs to. Once finished I am told the role has been added  
WHEN I add an employee 
THEN I am asked for first name, last name, and what role they are being assigned to.  
WHEN I choose to update an employees role  
THEN I am asked for the ID of the employee and what role ID they are being changed to aswell as a Manager ID IF they are being assigned a manager.  
WHEN I choose to look at Budgets for departments  
THEN I am presented with a table of utilised budgets as a sum for all employees in each budget  

## Installation  
``` node server.js ```

## Screenshots    


![Screenshot 2023-08-14 112710](https://github.com/njheymann/node.js-employee-tracker/assets/125000756/f65229aa-254a-411b-99f5-e5756eb02b5d)
![Screenshot 2023-08-14 112725](https://github.com/njheymann/node.js-employee-tracker/assets/125000756/51b8ef87-9c9c-4f59-9bee-ab380a683833)

## Links  
Repository URL: https://github.com/njheymann/node.js-employee-tracker  
Video tutorial: https://drive.google.com/file/d/1e26QzL1dSftuootGCJli8aGslvQyZlzI/view



