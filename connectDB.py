import sqlite3 # import sqlite3 library

conn = sqlite3.connect("images.db") # create and connect the db
cursor = conn.cursor() # cursor method iterate our db
