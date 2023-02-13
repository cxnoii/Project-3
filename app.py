from flask import Flask, jsonify
import json

app = Flask(__name__)

# Homicides = Base.classes.homicides
# Robberies = Base.classes.robberies

#--------------
#  Home Page  |
# #------------
@app.route("/")
def index():
    return(
        f"Welcome to the LA Crime API!<br/>"
        f"Available Routes:<br/>"
        f"/api/homicides<br/>"
        f"/api/robberies<br/>"
    )

#------------------
# Homicides route |
#------------------
@app.route("/api/homicides")
def homicides():
    table = []

    with open('Data/criminal_homicide_2010_2019.json', 'r') as f:
        table = json.loads(f.read())

        return jsonify(table)


#------------------
# Robberies route |
#------------------
@app.route("/api/robberies")
def robberies():
    table = []

    with open('Data/robbery_2010_2019.json', 'r') as f:
        table = json.loads(f.read())

        return jsonify(table)

if __name__ == "__main__":
    app.run(debug=True)

