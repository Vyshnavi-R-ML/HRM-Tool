import psycopg2

con = psycopg2.connect(
    host = "localhost",
    database = "hrm_db",
    user = "postgres",
    password = "shiva")

cur = con.cursor()


cur.execute("select * from calendar")

rows = cur.fetchall()

for r in rows:
    print(f"{r}")

cur.close()

con.close()