const connection = require('../db/connection');

class DepartmentQueries {
  static async getAllDepartments() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM department';
      connection.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  static async addDepartment(departmentName) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO department (name) VALUES (?)';
      connection.query(query, [departmentName], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = DepartmentQueries;
