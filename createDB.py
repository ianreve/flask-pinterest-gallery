from connectDB import * 

def createTable():
    image_database = sqlite3.connect('images.db')
    data = image_database.cursor()

    data.execute('CREATE TABLE images (id INTEGER PRIMARY KEY, name VARCHAR(255) NOT NULL,image BLOB)')

    image_database.commit() 
    image_database.close()

createTable()


