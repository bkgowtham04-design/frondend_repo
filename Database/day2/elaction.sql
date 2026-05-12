CREATE DATABASE ELECTION;


use ELECTION;

CREATE TABLE constitution (

constitution_id int primary key auto_increment,
district_name varchar(200) not null,
constitution_name varchar(200) not null,
constitution_dis_id varchar(200) not null

);

CREATE TABLE parties (

party_id int primary key auto_increment,
party_symbol varchar(200) not null,
party_name varchar(200) not null,
party_dis_number varchar(200) not null

);


CREATE TABLE candidates (

candidate_id int primary key auto_increment,
candidate_name varchar(200) not null,
candidate_age varchar(200) not null,
candidate_mobile_number varchar(200) not null,
candidate_party_name varchar(200) not null,
candidate_constitution varchar(200) not null


);





-- Insert Data
INSERT INTO constitution (district_name,constitution_name,constitution_dis_id) VALUES ("CHENNAI","VELACHERY","26"),("CHENNAI","VELACHERY","26");

UPDATE constitution SET constitution_name = "Solinganallur",constitution_dis_id="27" where constitution_id = 2;


DELETE FROM constitutionconstitution WHERE constitution_id = 3;

INSERT INTO parties (party_symbol, party_name, party_dis_number) VALUES
('Rising Sun', 'DMK', 'TN001'),
('Two Leaves', 'AIADMK', 'TN002'),
('Hand', 'INC (Congress)', 'TN003'),
('Lotus', 'BJP', 'TN004'),
('Mango', 'PMK', 'TN005'),
('Drum', 'DMDK', 'TN006'),
('Candle', 'MDMK', 'TN007'),
('Star', 'NTK (Naam Tamilar Katchi)', 'TN008'),
('Auto Rickshaw', 'AMMK', 'TN009'),
('Battery Torch', 'TVK', 'TN010');

UPDATE parties SET party_dis_number = "20" where party_id = 2;