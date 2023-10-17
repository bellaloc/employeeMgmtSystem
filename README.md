

## Employee Management System

The Employee Management System is a Node.js application that allows you to manage a company's employee database. With this application, you can view, add, and update departments, roles, and employees. Additionally, you can perform various actions such as updating an employee's role and manager, viewing employees by manager, deleting departments, roles, and employees, and viewing the total utilized budget of a department.

## Table of Contents

Getting Started
Prerequisites
Installation
Usage
Starting the Application
Available Actions
Functionality
View All Departments
View All Roles
View All Employees
Add Role
Add Employee
Update Employee Role
Update Employee Manager
View Employees by Manager
Delete Department, Role, or Employee
View Total Utilized Budget
Contributing
License


## Getting Started

# Prerequisites
Before using the Employee Management System, ensure you have the following prerequisites:

Node.js installed
MySQL database set up and running
The required Node.js packages installed (you can use npm install)

## Installation

1. Clone the repository to your local machine:

open your terminal in gitbash

git clone https://github.com/bellaloc/employeeMgmtSystem.git

2. Navigate to the project directory:

cd employee-management-system
Install the required Node.js packages:

npm install

Set up your MySQL database by executing the SQL scripts in db/schema.sql and db/seeds.sql. This will create the necessary tables and populate them with initial data.


## Usage

Starting the Application
To start the Employee Management System, run the following command in your terminal:

npm start

## Available Actions
Once the application is running, you'll be presented with a list of actions you can perform. Choose an action by using the arrow keys and press Enter to select. Here are the available actions:

View all departments
View all roles
View all employees
Add a department
Add a role
Add an employee
Update an employee's role
Update an employee's manager
View employees by manager
Delete department
Delete role
Delete employee
View total utilized budget

## Functionality
View All Departments
This option displays a list of all departments in the company, including their names.

View All Roles
This option displays a list of all roles in the company, including their titles, salaries, and the department to which they belong.

View All Employees
This option displays a list of all employees in the company, including their first names, last names, roles, and managers.

Add Role
This option allows you to add a new role to the company. You need to provide the title, salary, and the department ID for the new role.

Add Employee
This option allows you to add a new employee to the company. You need to provide the employee's first name, last name, role ID, and manager ID (if applicable).

Update Employee Role
This option lets you update an employee's role. You'll be prompted to select an employee and choose their new role from a list.

Update Employee Manager
This option allows you to update an employee's manager. You'll be prompted to select an employee and choose their new manager from a list.

View Employees by Manager
This option displays a list of employees who report to a specific manager. You'll be prompted to select a manager from a list.

Delete Department, Role, or Employee
This feature lets you delete a department, role, or employee from the company database. You'll need to confirm your choice before the deletion occurs.

View Total Utilized Budget
This option calculates and displays the total utilized budget for a specific department. You'll need to select the department for which you want to view the budget.

## Contributing
Contributions to the Employee Management System are welcome. You can contribute by opening issues, submitting pull requests, and helping to improve the application.

## License
This project is licensed under the MIT License.