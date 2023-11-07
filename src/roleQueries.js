const connection = require('../db/connection.js');

class RoleQueries {
  static async getAllRoles() {
    try {
      const query = 'SELECT * FROM role';
      const [results] = await connection.query(query);
      return results;
    } catch (err) {
      throw err;
    }
  }

  static async addRole(roleTitle, roleSalary, departmentId) {
    try {
      const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
      const [result] = await connection.query(query, [roleTitle, roleSalary, departmentId]);
      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = RoleQueries;
