from flask import Flask, request, jsonify
app = Flask(__name__)

items_database = []




@app.route('/', method=["GET"])
def getAllItems():
    return jsonify(items_database), 200


@app.route('/', method=["POST"])
def craeteItem():
    #GOOGLE HOW TO GET INFORMATION FROM BODY OF A POST might be requests.request(body)
    localDic = {} #fill out the local dict with information retrieved
    items_database.append(items_database)
    return jsonify(last item), 200


@app.route('/<itemID>', method=["GET"])
def getAllItems():
    # Find the item 
    #return the item
    return jsonify(items_database), 200


@app.route('/<itemID>', method=["PUT"])
def updateItem():
    # Find item and update it
    # return updated item
    return jsonify(items_database), 200


@app.route('/<itemID>', method=["DELETE"])
def updateItem():
    # Find item and delete it
    # return deleted item
    return jsonify(items_database), 200
