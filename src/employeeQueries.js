const connection = require('./db/connection');

class EmployeeQueries {
  static async getAllEmployees() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM employee';
      connection.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  static async addEmployee(firstName, lastName, roleId, managerId) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
      connection.query(query, [firstName, lastName, roleId, managerId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  static async updateEmployeeRole(employeeId, roleId) {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE employee SET role_id = ? WHERE id = ?';
      connection.query(query, [roleId, employeeId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  static async updateEmployeeManager(employeeId, managerId) {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE employee SET manager_id = ? WHERE id = ?';
      connection.query(query, [managerId, employeeId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  static async getEmployeesByManager(managerId) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM employee WHERE manager_id = ?';
      connection.query(query, [managerId], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
}

module.exports = EmployeeQueries;
