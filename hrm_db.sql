CREATE TABLE training_session(session_id INTEGER,
                              training_name TEXT,
                              session_date DATE,
                              session_time TIME),
                              trainer_id INTEGER,
                              created_date TIMESTAMP,
                              created_by INTEGER,
                              updated_date TIMESTAMP,
                              updated_by INTEGER,
                              acceptance_status BOOLEAN,
                              PRIMARY KEY (session_id);

CREATE TABLE training(training_id INTEGER,
                      session_id INTEGER,
                      emp_id INTEGER,
                      PRIMARY KEY (training_id));

CREATE TABLE nomination(nom_id INTEGER,
                        emp_id INTEGER,
                        session_id INTEGER,
                        nominated_by INTEGER,
                        status BOOLEAN,
                        PRIMARY KEY (nom_id));

CREATE TABLE rejection(rej_id INTEGER,
                       emp_id INTEGER,
                       session_id INTEGER,
                       rejected_by VARCHAR(20),
                       reason TEXT,
                       PRIMARY KEY (rej_id));

CREATE TABLE employee(emp_id INTEGER,
                      emp_name VARCHAR(20),
                      emp_category VARCHAR(20),
                      rm_id INTEGER,
                      PRIMARY KEY (emp_id));

CREATE TABLE Feedback(feedback_id INTEGER,
                      session_id INTEGER,
                      emp_id INTEGER,
                      feedback_q1 INTEGER,
                      feedback_q2 INTEGER,
                      feedback_q3 INTEGER,
                      PRIMARY KEY (feedback_id));