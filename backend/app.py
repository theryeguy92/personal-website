from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector
from dotenv import load_dotenv
import os

# Load the backend file
load_dotenv()

# Read the path to the credential files
cred_file_path = os.path.join(os.getcwd(), os.getenv('CRED_TXT_PATH', './cred.txt'))
if cred_file_path and os.path.exists(cred_file_path):
    with open(cred_file_path, 'r') as file:
        real_env_path = file.read().strip()
        load_dotenv(dotenv_path=real_env_path)
else:
    raise FileNotFoundError(f"{cred_file_path} Not found or Invalid.")

app = Flask(__name__)
CORS(app)

# DB Config
db_config = {
    'host': 'mysql',
    'user': os.getenv('MYSQL_USER'),
    'password': os.getenv('MYSQL_PASSWORD'),
    'database': os.getenv('MYSQL_DATABASE'),
}

@app.route('/api/projects', methods=['GET'])
def get_projects():
    """ Fetch Project Data via the database """
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM projects")  # Query to fetch all projects
        projects = cursor.fetchall()
        cursor.close()
        connection.close()
        return jsonify({'status': 'success', 'data': projects})
    except mysql.connector.Error as err:
        return jsonify({'status': 'error', 'message': str(err)}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    """ Health check endpoint, verify API and DB connectivity """
    try:
        connection = mysql.connector.connect(**db_config)
        if connection.is_connected():
            connection.close()
            return jsonify({'status': 'success', 'message': 'API and DB connection are healthy'}), 200
    except mysql.connector.Error as err:
        return jsonify({'status': 'error', 'message': f'DB connection failed: {str(err)}'}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
