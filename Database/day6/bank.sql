create database banking;

use banking;

CREATE TABLE customer (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100),
    age INT,
    city VARCHAR(100),
    phone VARCHAR(15)
);

CREATE TABLE loan_plan (
    plan_id INT PRIMARY KEY AUTO_INCREMENT,
    plan_name VARCHAR(100),
    interest_rate DECIMAL(5,2),
    max_amount INT,
    duration_years INT
);

CREATE TABLE insurance (
    insurance_id INT PRIMARY KEY AUTO_INCREMENT,
    insurance_name VARCHAR(100),
    premium_amount INT,
    coverage_amount INT
);


CREATE TABLE loan (
    loan_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    plan_id INT,
    insurance_id INT,
    loan_amount INT,
    loan_date DATE,

    FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
    FOREIGN KEY (plan_id) REFERENCES loan_plan(plan_id),
    FOREIGN KEY (insurance_id) REFERENCES insurance(insurance_id)
);

INSERT INTO customer (customer_name, age, city, phone) VALUES
('Arun', 25, 'Chennai', '9876543210'),
('Vijay', 30, 'Madurai', '9876543211'),
('Kumar', 35, 'Coimbatore', '9876543212');


INSERT INTO loan_plan (plan_name, interest_rate, max_amount, duration_years) VALUES
('Home Loan', 7.5, 5000000, 20),
('Car Loan', 9.0, 1000000, 5),
('Personal Loan', 12.0, 500000, 3);

INSERT INTO insurance (insurance_name, premium_amount, coverage_amount) VALUES
('Life Insurance', 20000, 1000000),
('Health Insurance', 15000, 500000),
('Loan Protection', 10000, 300000);


INSERT INTO loan (customer_id, plan_id, insurance_id, loan_amount, loan_date) VALUES
(1, 1, 1, 3000000, '2024-01-10'),
(2, 2, 3, 800000, '2024-02-15'),
(3, 3, 2, 400000, '2024-03-20');