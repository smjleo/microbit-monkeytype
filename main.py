import serial
from flask import Flask, request
from flask_cors import CORS


ser = serial.Serial('/dev/cu.usbmodem11302', 115200) 

app = Flask(__name__)
CORS(app)


@app.route("/")
def forward():
    inp = request.args.get('text') + '\n'
    ser.write(inp.encode())
    return "OK"


app.run()
