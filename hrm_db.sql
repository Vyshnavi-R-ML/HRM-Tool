CREATE TABLE Training_Session(training_session_id INTEGER,
                            training_name VARCHAR(30),
                            emp_id INTEGER,
                            trainer_id INTEGER,
                            session_date DATE,
                            session_time TIME,
                            PRIMARY KEY (training_session_id));

INSERT INTO Training_Session(training_session_id, training_name, emp_id, trainer_id, session_date, session_time) VALUES (7001, 'Python', 10391, 10131, '2023-03-14', '15:00');



CREATE TABLE Employee(emp_id INTEGER,
                     emp_name VARCHAR(20),
                     emp_role VARCHAR(20),
                     rm_id INTEGER,
                     PRIMARY KEY (emp_id));

INSERT INTO Employee(emp_id, emp_name, emp_role, rm_id) VALUES (10391, 'Shiva Pranav', 'Intern', 10105);



CREATE TABLE emp_nomination(emp_id INTEGER,
                            training_session_id INTEGER,
                            rm_id INTEGER,
                            rm_acceptance_status TEXT);

INSERT INTO emp_nomination(emp_id, training_session_id, rm_id, rm_acceptance_status) VALUES(10391, 7001, 10105, 'Pending');

CREATE TABLE rm_nomination(emp_id INTEGER,
                            training_session_id INTEGER,
                            emp_acceptance_status TEXT,
                            rejected_reason TEXT);  
INSERT INTO rm_nomination(emp_id, training_session_id, emp_acceptance_status, rejected_reason) VALUES (10393, 7003, 'Rejected', 'Already Occupied');

CREATE TABLE rm_requested(training_name VARCHAR(30),
                            urgency INTEGER,
                            emp_id INTEGER,
                            tm_acceptance_status TEXT,
                            rejected_reason TEXT,
                            session_date DATE,
                            session_time TIME);

INSERT INTO rm_requested(training_name, urgency, emp_id, tm_acceptance_status, rejected_reason, session_date, session_time) VALUES('Golang', 5, 10390, 'Accepted', NULL, '2023-03-13', '12:00');

CREATE TABLE Feedback(training_session_id INTEGER,
                    emp_id INTEGER,
                    feedback_Q1 INTEGER,
                    feedback_Q2 INTEGER,
                    feedback_Q3 INTEGER);

INSERT INTO Feedback(training_session_id, emp_id, feedback_Q1, feedback_Q2, feedback_Q3) VALUES (7001,10391, 4, 5, 4);

CREATE TABLE Enrollment(training_session_id INTEGER,
                        emp_id INTEGER,
                        training_status TEXT);


INSERT INTO Enrollment(training_session_id, emp_id, training_status) VALUES (7001, 10391, 'Completed');