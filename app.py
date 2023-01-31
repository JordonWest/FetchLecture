from flask import Flask, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route("/", methods=['GET', 'POST'])
def hello_world():
    if request.method == "POST":
        return json.dumps({"response": "POST Request Received"}), 200
    else:
        return json.dumps({"response": "GET Request Received"}), 200

