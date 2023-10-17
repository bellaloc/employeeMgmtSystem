const inquirer = require('inquirer');
const DepartmentQueries = require('./departmentQueries');
const RoleQueries = require('./roleQueries');
const EmployeeQueries = require('./employeeQueries');

class InquirerPrompts {
  static async viewAllDepartments() {
    try {
      const departments = await DepartmentQueries.getAllDepartments();
      console.log('All Departments:');
      console.table(departments);
    } catch (err) {
      console.error('An error occurred:', err);
    }
  }

  static async viewAllRoles() {
    try {
      const roles = await RoleQueries.getAllRoles();
      console.log('All Roles:');
      console.table(roles);
    } catch (err) {
      console.error('An error occurred:', err);
    }
  }

  static async viewAllEmployees() {
    try {
      const employees = await EmployeeQueries.getAllEmployees();
      console.log('All Employees:');
      console.table(employees);
    } catch (err) {
      console.error('An error occurred:', err);
    }
  }

  static async addRole() {
    const { roleTitle, roleSalary, departmentId } = await inquirer.prompt([
      {
        type: 'input',
        name: 'roleTitle',
        message: 'Enter the title of the role:',
      },
      {
        type: 'input',
        name: 'roleSalary',
        message: 'Enter the salary for the role:',
      },
      {
        type: 'input',
        name: 'departmentId',
        message: 'Enter the department ID for the role:',
      },
    ]);

    try {
      const result = await RoleQueries.addRole(roleTitle, roleSalary, departmentId);
      console.log('Role added successfully.');
    } catch (err) {
      console.error('An error occurred:', err);
    }
  }

  static async addEmployee() {
    const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
      {
        type: 'input',
        name: 'firstName',
        message: 'Enter the first name of the employee:',
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'Enter the last name of the employee:',
      },
      {
        type: 'input',
        name: 'roleId',
        message: 'Enter the role ID for the employee:',
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'Enter the manager ID for the employee (if any):',
      },
    ]);

    try {
      const result = await EmployeeQueries.addEmployee(firstName, lastName, roleId, managerId);
      console.log('Employee added successfully.');
    } catch (err) {
      console.error('An error occurred:', err);
    }
  }

  static async updateEmployeeRole() {
    const employees = await EmployeeQueries.getAllEmployees();
    const employeeChoices = employees.map((employee) => ({
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id,
    }));

    const roles = await RoleQueries.getAllRoles();
    const roleChoices = roles.map((role) => ({
      name: role.title,
      value: role.id,
    }));

    const { employeeId, roleId } = await inquirer.prompt([
      {
        type: 'list',
        name: 'employeeId',
        message: 'Select an employee to update:',
        choices: employeeChoices,
      },
      {
        type: 'list',
        name: 'roleId',
        message: 'Select the new role:',
        choices: roleChoices,
      },
    ]);

    try {
      const result = await EmployeeQueries.updateEmployeeRole(employeeId, roleId);
      console.log('Employee role updated successfully.');
    } catch (err) {
      console.error('An error occurred:', err);
    }
  }

  static async updateEmployeeManager() {
    const employees = await EmployeeQueries.getAllEmployees();
    const employeeChoices = employees.map((employee) => ({
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id,
    }));

    const { employeeId, managerId } = await inquirer.prompt([
      {
        type: 'list',
        name: 'employeeId',
        message: 'Select an employee to update:',
        choices: employeeChoices,
      },
      {
        type: 'list',
        name: 'managerId',
        message: 'Select the new manager:',
        choices: employeeChoices,
      },
    ]);

    try {
      const result = await EmployeeQueries.updateEmployeeManager(employeeId, managerId);
      console.log('Employee manager updated successfully.');
    } catch (err) {
      console.error('An error occurred:', err);
    }
  }

  static async viewEmployeesByManager() {
    const employees = await EmployeeQueries.getAllEmployees();
    const managerChoices = employees.map((employee) => ({
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id,
    }));

    const { managerId } = await inquirer.prompt([
      {
        type: 'list',
        name: 'managerId',
        message: 'Select a manager to view employees under that manager:',
        choices: managerChoices,
      },
    ]);

    try {
      const employeesUnderManager = await EmployeeQueries.getEmployeesByManager(managerId);
      console.log('Employees under the selected manager:');
      console.table(employeesUnderManager);
    } catch (err) {
      console.error('An error occurred:', err);
    }
  }
}

module.exports = InquirerPrompts;
