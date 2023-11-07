const express = require('express');
const router = express.Router();
const Department = require('../models/department');
const Role = require('../models/role');
const Employee = require('../models/employee');



// Get all departments
router.get('/departments', async (req, res) => {
  try {
    const departments = await Department.getAllDepartments();
    res.json(departments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all roles
router.get('/roles', async (req, res) => {
  try {
    const roles = await Role.getAllRoles();
    res.json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all employees
router.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.getAllEmployees();
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add a new department
router.post('/departments', async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Department name is required' });
  }

  try {
    const result = await Department.addDepartment(name);
    res.json({ message: 'Department added successfully', result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add a new role
router.post('/roles', async (req, res) => {
  const { title, salary, departmentId } = req.body;

  if (!title || !salary || !departmentId) {
    return res.status(400).json({ error: 'Title, salary, and department ID are required' });
  }

  try {
    const result = await Role.addRole(title, salary, departmentId);
    res.json({ message: 'Role added successfully', result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add a new employee
router.post('/employees', async (req, res) => {
  const { first_name, last_name, role_id, manager_id } = req.body;

  if (!first_name || !last_name || !role_id) {
    return res.status(400).json({ error: 'First name, last name, and role ID are required' });
  }

  try {
    const result = await Employee.addEmployee(first_name, last_name, role_id, manager_id);
    res.json({ message: 'Employee added successfully', result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



module.exports = router;
