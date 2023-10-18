const inquirer = require("inquirer");
const inquirerPrompts = require("./src/inquirerPrompts");

const startApp = async () => {
  try {
    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Exit",
        ],
      },
    ]);

    switch (action) {
      case "View all departments":
        await inquirerPrompts.viewAllDepartments();
        break;
      case "View all roles":
        await inquirerPrompts.viewAllRoles();
        break;
      case "View all employees":
        await inquirerPrompts.viewAllEmployees();
        break;
      case "Add a department":
        await inquirerPrompts.addDepartment();
        break;
      case "Add a role":
        await inquirerPrompts.addRole();
        break;
      case "Add an employee":
        await inquirerPrompts.addEmployee();
        break;
      case "Update an employee role":
        await inquirerPrompts.updateEmployeeRole();
        break;
      case "Exit":
        console.log("Exiting the application.");
        process.exit(0);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

startApp();
