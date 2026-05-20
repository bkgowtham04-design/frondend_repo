create database tasks;

use tasks;

CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    age INT,
    department VARCHAR(100),
    salary INT
);

INSERT INTO employees (name, age, department, salary) VALUES
('Arun', 22, 'Developer', 30000),
('Vijay', 28, 'Tester', 25000),
('Kumar', 35, 'Developer', 40000),
('Rahul', 30, 'HR', 20000),
('Ajay', 27, 'Developer', 35000);

SELECT COUNT(*) FROM employees;


SELECT SUM(salary) AS total_salary 
FROM employees;


SELECT AVG(salary) AS average_salary 
FROM employees;

SELECT MAX(salary) AS highest_salary 
FROM employees;

SELECT MIN(salary) AS minimum_salary 
FROM employees;


SELECT COUNT(*) AS employees_above_25 
FROM employees
WHERE age > 25;


SELECT SUM(salary) AS total_dev_salary 
FROM employees
WHERE department = 'Developer';


SELECT AVG(age) AS average_age 
FROM employees;


SELECT MAX(age) AS max_age 
FROM employees;


SELECT MIN(age) AS min_age 
FROM employees;