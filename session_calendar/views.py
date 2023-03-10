from django.shortcuts import render

# Create your views here.
import psycopg2

con = psycopg2.connect(
    host = "localhost",
    database = "hrm_db",
    user = "postgres",
    password = "",
)

cur = con.cursor()

cur.execute("insert into calendar(training_name, trainer_name, employee_list, session_data) values('django', 'Raj', ARRAY [5, 7], '2023-03-10')")

cur.fetchall()

for r in rows:
    print(r)

cur.close()

con.close()