CREATE DATABASE college_db;
USE college_db;

CREATE TABLE students (
    id INT,
    name VARCHAR(100),
    age INT,
    course VARCHAR(50)
);

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    salary DECIMAL(10,2)
);


CREATE TABLE staff (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    salary DECIMAL(10,2) DEFAULT 25000
);

CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    price DECIMAL(10,2),
    CHECK (price > 100)
);

RENAME TABLE students TO college_students;


ALTER TABLE college_students
RENAME COLUMN name TO student_name;

ALTER TABLE college_students
ADD email VARCHAR(100);


