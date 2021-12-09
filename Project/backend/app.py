from flask import Flask, request, jsonify

app = Flask(__name__)

items_database = [
    {
        "ItemID": 0,
        "ItemName": "Duck",
        "ItemDescription": "A very good duck",
        "ItemPrice": "$1000"
    },
    {
        "ItemID": 1,
        "ItemName": "Better Duck",
        "ItemDescription": "An even better duck",
        "ItemPrice": "$2000"
    },
    {
        "ItemID": 2,
        "ItemName": "Best Duck",
        "ItemDescription": "The best duck",
        "ItemPrice": "$30000"
    }
]

@app.route('/test', methods=["GET"])
def helloWorldTest():
    return jsonify({"message": "Hello World"}), 200


@app.route('/item', methods=["GET"])
def getAllItems():
    response = jsonify(items_database)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response, 200



@app.route('/create', methods=["POST"])
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


@app.route('/get/<itemID>', methods=["GET"])
def getItems(itemID):
    for item in items_database:
        print(item["ItemID"])
        if item["ItemID"] == int(itemID):
            # print()
            # print()
            # print()
            # print()
            # print("TEST2")
            response = jsonify(item)
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response, 200
    
    # Find the item 
    #return the item

    response = jsonify({'message': 'oneSec'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response, 200


@app.route('/update/<itemID>', methods=["PUT"])
def updateItem(itemID):
    print("This ran")
    print(itemID)
    localDic = { #fill out the local dict with information retrieved
        "ItemID": request.json["ItemID"],
        "ItemName": request.args.get("ItemName"),
        "ItemDescription": request.args.get("ItemDescription"),
        "ItemPrice": request.args.get("ItemPrice")
    }     
    # Find item and update it
    # return updated item
    response = jsonify(items_database[-1]), 200
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response, 200


@app.route('/delete/<itemID>', methods=["DELETE"])
def deleteItem(itemID):
    for item in items_database:
        if item["ItemID"] == itemID:
            items_database.remove(item)
            return jsonify(item), 200
    
    # Find item and delete it
    # return deleted item
    return jsonify({"message": "No item of itemID"}), 500
