from flask import Flask, Response, request, jsonify
import json

app = Flask(__name__)

@app.route('/Savelist', methods=['POST'])
def savelist():


@app.route('/getList', methods=['GET'])
def getList():
    

app.run(debug=True, port=5001)