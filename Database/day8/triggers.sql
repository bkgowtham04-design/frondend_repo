create database triggerss;

use triggerss;

CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    course VARCHAR(100)
);

CREATE TABLE student_log (
    log_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(200),
    message VARCHAR(300)
);

DELIMITER $$

CREATE TRIGGER after_insert_student
AFTER INSERT ON students
FOR EACH ROW
BEGIN
    INSERT INTO student_log (student_name, message)
    VALUES (NEW.name, 'New student inserted');
END $$

DELIMITER ;

INSERT INTO students (name, course)
VALUES ('Arun', 'Java');

SELECT * FROM student_log;