<<<<<<< HEAD
from flask import Flask, request, jsonify
from flask.wrappers import Response
app = Flask(__name__)

items_database = [
    {
        "ItemID": 0,
        "ItemName": "Base Name",
        "ItemDescription": "Base Description",
        "ItemPrice": "Base Price"
    }
]


@app.route('/test', methods=["GET"])
def helloWorldTest():
    return jsonify({"message": "Hello World"}), 200


@app.route('/', methods=["GET"])
def getAllItems():
    response = jsonify(items_database)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response, 200



@app.route('/', methods=["POST"])
def createItem():
    idNum = items_database[-1] + 1
    #GOOGLE HOW TO GET INFORMATION FROM BODY OF A POST might be requests.request(body)
    localDic = { #fill out the local dict with information retrieved
        "ItemID": idNum,
        "ItemName": request.args.get("ItemName"),
        "ItemDescription": request.args.get("ItemDescription"),
        "ItemPrice": request.args.get("ItemPrice")
    }
    items_database.append(items_database)
    response = jsonify(items_database)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response, 200


@app.route('/<itemID>', methods=["GET"])
def getItems(itemID):
    for item in items_database:
        if item["ItemID"] == itemID:
            response = jsonify(items_database)
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response, 200
    
    # Find the item 
    #return the item
    return jsonify({"message": "No item of itemID"}), 500


@app.route('/<itemID>', methods=["PUT"])
def updateItem(itemID):
    localDic = { #fill out the local dict with information retrieved
        "ItemID": request.args.get("ItemID"),
        "ItemName": request.args.get("ItemName"),
        "ItemDescription": request.args.get("ItemDescription"),
        "ItemPrice": request.args.get("ItemPrice")
    }     
    # Find item and update it
    # return updated item
    return jsonify(items_database), 200


@app.route('/<itemID>', methods=["DELETE"])
def deleteItem(itemID):
    for item in items_database:
        if item["ItemID"] == itemID:
            items_database.remove(item)
            return jsonify(item), 200
    
    # Find item and delete it
    # return deleted item
    return jsonify({"message": "No item of itemID"}), 500
=======
from flask import Flask, request, jsonify
app = Flask(__name__)

items_database = []

@app.route('/test', methods=["GET"])
def helloWorldTest():
    response = jsonify({'some': 'data'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response, 200
    return jsonify({"message": "Hello World"}), 200


@app.route('/', methods=["GET"])
def getAllItems():
    response = jsonify(items_database)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response, 200


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
>>>>>>> 03cb153530fd4691f9dc10db8d0aff8c12ff716f
