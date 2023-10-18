const connection = require('../db/connection');

class EmployeeQueries {
  static async getAllEmployees() {
    try {
      const query = 'SELECT * FROM employee';
      const results = await connection.query(query);
      return results;
    } catch (err) {
      throw err;
    }
  }

  static async addEmployee(firstName, lastName, roleId, managerId) {
    try {
      const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
      const result = await connection.query(query, [firstName, lastName, roleId, managerId]);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async updateEmployeeRole(employeeId, roleId) {
    try {
      const query = 'UPDATE employee SET role_id = ? WHERE id = ?';
      const result = await connection.query(query, [roleId, employeeId]);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async updateEmployeeManager(employeeId, managerId) {
    try {
      const query = 'UPDATE employee SET manager_id = ? WHERE id = ?';
      const result = await connection.query(query, [managerId, employeeId]);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async getEmployeesByManager(managerId) {
    try {
      const query = 'SELECT * FROM employee WHERE manager_id = ?';
      const results = await connection.query(query, [managerId]);
      return results;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = EmployeeQueries;
