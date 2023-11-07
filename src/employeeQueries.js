const connection = require('../db/connection');

class EmployeeQueries {
  static async getAllEmployees() {
    try {
      const query = 'SELECT employee.id, employee.first_name, employee.last_name, role.title AS job_title, department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager ' +
                    'FROM employee ' +
                    'LEFT JOIN role ON employee.role_id = role.id ' +
                    'LEFT JOIN department ON role.department_id = department.id ' +
                    'LEFT JOIN employee AS manager ON employee.manager_id = manager.id';
      const [rows, fields] = await connection.execute(query);
      return rows;
    } catch (err) {
      throw err;
    }
  }

  static async addEmployee(firstName, lastName, roleId, managerId) {
    try {
      const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
      const [result] = await connection.execute(query, [firstName, lastName, roleId, managerId]);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async updateEmployeeRole(employeeId, roleId) {
    try {
      const query = 'UPDATE employee SET role_id = ? WHERE id = ?';
      const [result] = await connection.execute(query, [roleId, employeeId]);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async updateEmployeeManager(employeeId, managerId) {
    try {
      const query = 'UPDATE employee SET manager_id = ? WHERE id = ?';
      const [result] = await connection.execute(query, [managerId, employeeId]);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async getEmployeesByManager(managerId) {
    try {
      const query = 'SELECT employee.id, employee.first_name, employee.last_name, role.title AS job_title, department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager ' +
                    'FROM employee ' +
                    'LEFT JOIN role ON employee.role_id = role.id ' +
                    'LEFT JOIN department ON role.department_id = department.id ' +
                    'LEFT JOIN employee AS manager ON employee.manager_id = manager.id ' +
                    'WHERE employee.manager_id = ?';
      const [rows, fields] = await connection.execute(query, [managerId]);
      return rows;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = EmployeeQueries;
