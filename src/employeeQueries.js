const connection = require('../db/connection');

class EmployeeQueries {
  static async getAllEmployees() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT employee.id, employee.first_name, employee.last_name, role.title AS job_title, department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager ' +
                    'FROM employee ' +
                    'LEFT JOIN role ON employee.role_id = role.id ' +
                    'LEFT JOIN department ON role.department_id = department.id ' +
                    'LEFT JOIN employee AS manager ON employee.manager_id = manager.id';
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
      const query = 'SELECT employee.id, employee.first_name, employee.last_name, role.title AS job_title, department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager ' +
                    'FROM employee ' +
                    'LEFT JOIN role ON employee.role_id = role.id ' +
                    'LEFT JOIN department ON role.department_id = department.id ' +
                    'LEFT JOIN employee AS manager ON employee.manager_id = manager.id ' +
                    'WHERE employee.manager_id = ?';
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
