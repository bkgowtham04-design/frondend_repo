create database electionss;

use electionss;


CREATE TABLE election_results (
    result_id INT PRIMARY KEY AUTO_INCREMENT,
    candidate_name VARCHAR(100),
    party_name VARCHAR(100),
    district VARCHAR(100),
    constituency VARCHAR(100),
    total_votes INT,
    election_year INT
);

INSERT INTO election_results 
(candidate_name, party_name, district, constituency, total_votes, election_year)
VALUES
('Arun', 'DMK', 'Chennai', 'T Nagar', 80000, 2021),
('Vijay', 'AIADMK', 'Madurai', 'Madurai North', 65000, 2021),
('Kumar', 'DMK', 'Chennai', 'Velachery', 72000, 2021),
('Rahul', 'BJP', 'Coimbatore', 'Coimbatore South', 50000, 2021),
('Ajay', 'DMK', 'Madurai', 'Madurai South', 90000, 2021),
('Suresh', 'AIADMK', 'Chennai', 'Anna Nagar', 60000, 2021);


SELECT * FROM election_results;


SELECT candidate_name, party_name 
FROM election_results;

SELECT * 
FROM election_results
WHERE total_votes > 70000;

SELECT * 
FROM election_results
WHERE district = 'Chennai';


SELECT * 
FROM election_results
WHERE party_name = 'DMK';


SELECT * 
FROM election_results
WHERE district = 'Madurai' 
AND total_votes > 60000;

SELECT * 
FROM election_results
ORDER BY total_votes ASC;

SELECT COUNT(*) AS total_candidates 
FROM election_results;

SELECT party_name, SUM(total_votes) AS total_votes
FROM election_results
GROUP BY party_name;


SELECT district, AVG(total_votes) AS avg_votes
FROM election_results
GROUP BY district;


SELECT party_name, SUM(total_votes) AS total_votes
FROM election_results
GROUP BY party_name
HAVING SUM(total_votes) > 100000;


SELECT district, MAX(total_votes) AS highest_votes
FROM election_results
GROUP BY district;


SELECT district, AVG(total_votes) AS avg_votes
FROM election_results
GROUP BY district
HAVING AVG(total_votes) > 60000;