from flask import Flask, request, jsonify
app = Flask(__name__)

items_database = []

@app.route('/test', methods=["GET"])
def helloWorldTest():
    return jsonify({"message": "Hello World"}), 200


@app.route('/', methods=["GET"])
def getAllItems():
    return jsonify(items_database), 200


@app.route('/', methods=["POST"])
def craeteItem():
    #GOOGLE HOW TO GET INFORMATION FROM BODY OF A POST might be requests.request(body)
    localDic = {} #fill out the local dict with information retrieved
    items_database.append(items_database)
    return jsonify({"message": "test"}), 200


@app.route('/<itemID>', methods=["GET"])
def getItems(itemID):
    # Find the item 
    #return the item
    return jsonify(items_database), 200


@app.route('/<itemID>', methods=["PUT"])
def updateItem(itemID):
    # Find item and update it
    # return updated item
    return jsonify(items_database), 200


@app.route('/<itemID>', methods=["DELETE"])
def deleteItem(itemID):
    # Find item and delete it
    # return deleted item
    return jsonify(items_database), 200
