from connectDB import * 

CREATE TABLE images ( id INTEGER PRIMARY KEY, caption TEXT NOT NULL, photo BLOB NOT NULL);
