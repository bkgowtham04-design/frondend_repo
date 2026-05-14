create database task;

use task;

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    department VARCHAR(50),
    salary DECIMAL(10,2) DEFAULT 25000
);

INSERT INTO employees (name, email, department, salary)
VALUES ('Arun', 'arun@gmail.com', 'Developer', 40000);

INSERT INTO employees (name, email, department, salary) VALUES
('Bala', 'bala@gmail.com', 'Testing', 30000),
('Charan', 'charan@gmail.com', 'Developer', 45000),
('Divya', 'divya@gmail.com', 'HR', 35000),
('Esha', 'esha@gmail.com', 'Testing', 28000),
('Farhan', 'farhan@gmail.com', 'Developer', 50000);

UPDATE employees
SET salary = 48000
WHERE id = 3;

DELETE FROM employees
WHERE id = 5;

UPDATE employees
SET department = 'Manager',
    salary = 60000
WHERE id = 2;




