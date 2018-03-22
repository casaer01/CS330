from flask import Flask, Response, request, jsonify
import json

app = Flask(__name__)

#write json to file
@app.route('/Savelist', methods=['POST'])
def savelist():
    return null

#write json from file
@app.route('/getList', methods=['GET'])
def getList():
    return null

app.run(debug=True, port=5001)