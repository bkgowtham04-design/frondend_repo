create database joins;

use joins;

CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100)
);

CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(100),
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

INSERT INTO courses (course_name) VALUES
('Java'), ('Python'), ('SQL');

INSERT INTO students (student_name, course_id) VALUES
('Arun', 1),
('Vijay', 2),
('Kumar', NULL),   
('Rahul', 3),
('Ajay', NULL);    


SELECT s.student_name, c.course_name
FROM students s
INNER JOIN courses c
ON s.course_id = c.course_id;


SELECT s.student_name, c.course_name FROM students s LEFT JOIN courses c ON s.course_id = c.course_id;


SELECT s.student_name, c.course_name FROM students s RIGHT JOIN courses c ON s.course_id = c.course_id;


CREATE TABLE departments (
    dept_id INT PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(100)
);

CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(100),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);


INSERT INTO departments (dept_name) VALUES
('HR'), ('IT'), ('Finance');

INSERT INTO employees (emp_name, dept_id) VALUES
('Arun', 1),
('Vijay', 2),
('Kumar', NULL),  
('Rahul', 3);


SELECT e.emp_name, d.dept_name FROM employees e INNER JOIN departments d ON e.dept_id = d.dept_id;


SELECT e.emp_name, COALESCE(d.dept_name, 'No Department') AS dept_name FROM employees e LEFT JOIN departments d ON e.dept_id = d.dept_id;