CREATE TABLE training_session(session_id INTEGER,
                              session_date DATE,
                              session_time TIME),
                              PRIMARY KEY (session_id);

CREATE TABLE training(training_id INTEGER,
                      session_id INTEGER,
                      training_name VARCHAR(30),
                      emp_id INTEGER,
                      trainer_id INTEGER,
                      PRIMARY KEY (training_id));

CREATE TABLE nomination(
                        emp_id INTEGER,
                        session_id INTEGER,
                        PRIMARY KEY (nom_id));

INSERT INTO nomination(emp_id, training_session_id) VALUES(10391, 7001);


CREATE TABLE confirmation(con_id INTEGER,
                          emp_id INTEGER,
                          session_id INTEGER,
                          confirmed_by VARCHAR(20),
                          is_confirmed BOOLEAN,
                          PRIMARY KEY(con_id));

CREATE TABLE rejection(rej_id INTEGER,
                       emp_id INTEGER,
                       session_id INTEGER,
                       rejected_by VARCHAR(20),
                       reason TEXT,
                       PRIMARY KEY (rej_id));

CREATE TABLE rm_requested_table(rm_req_id INTEGER,
                                training_name VARCHAR(20),
                                urgency INTEGER,
                                emp_id INTEGER,
                                tm_acceptance TEXT,
                                rejection_reason TEXT,
                                session_date DATE,
                                session_time TIME,
                                PRIMARY KEY (rm_req_id));

CREATE TABLE employee(emp_id INTEGER,
                      emp_name VARCHAR(20),
                      emp_category VARCHAR(20),
                      rm_id INTEGER,
                      PRIMARY KEY (emp_id));

CREATE TABLE Feedback(feedback_id INTEGER,
                      session_id INTEGER,
                      emp_id INTEGER,
                      feedback_Q1 INTEGER,
                      feedback_Q2 INTEGER,
                      feedback_Q3 INTEGER,
                      PRIMARY KEY (feedback_id));

CREATE TABLE Enrollment(enroll_id INTEGER,
                        session_id INTEGER,
                        emp_id INTEGER,
                        training_status TEXT,
                        PRIMARY KEY (enroll_id));

