const inquirer = require("inquirer");
const InquirerPrompts = require("./src/inquirerPrompts");

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
        await InquirerPrompts.viewAllDepartments();
        break;
      case "View all roles":
        await InquirerPrompts.viewAllRoles();
        break;
      case "View all employees":
        await InquirerPrompts.viewAllEmployees();
        break;
      case "Add a department":
        await InquirerPrompts.addDepartment();
        break;
      case "Add a role":
        await InquirerPrompts.addRole();
        break;
      case "Add an employee":
        await InquirerPrompts.addEmployee();
        break;
      case "Update an employee role":
        await InquirerPrompts.updateEmployeeRole();
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
