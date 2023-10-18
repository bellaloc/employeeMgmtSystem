INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Marketing');
INSERT INTO department (name) VALUES ('Engineering');

INSERT INTO role (title, salary, department_id) VALUES ('Sales Manager', 60000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Sales Associate', 40000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Marketing Manager', 65000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Marketing Coordinator', 45000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 80000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('Product Manager', 90000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jane', 'Smith', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Bob', 'Johnson', 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Alice', 'Brown', 4, 2);
