const connection = require('./db/connection');

class RoleQueries {
  static async getAllRoles() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM role';
      connection.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  static async addRole(roleTitle, roleSalary, departmentId) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
      connection.query(query, [roleTitle, roleSalary, departmentId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = RoleQueries;
