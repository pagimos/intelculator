from flask import Flask, jsonify, request
from flask_mysqldb import MySQL
import MySQLdb.cursors

app = Flask(__name__)

# Configure MySQL connection
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'your_username'
app.config['MYSQL_PASSWORD'] = 'your_password'
app.config['MYSQL_DB'] = 'your_database'

mysql = MySQL(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cursor.execute('SELECT * FROM your_table')
    data = cursor.fetchall()
    return jsonify(data)

@app.route('/api/data', methods=['POST'])
def post_data():
    # Handle post data from React
    data = request.get_json()
    cursor = mysql.connection.cursor()
    cursor.execute("INSERT INTO your_table (name) VALUES (%s)", [data['name']])
    mysql.connection.commit()
    return jsonify({'message': 'Data inserted successfully'})

if __name__ == '__main__':
    app.run(debug=True)
