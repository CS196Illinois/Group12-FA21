import pymongo
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://srkethireddy:4qhe9j<password>@cluster0.hlsqe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

db = cluster["Items"]
collection = db["Item"]

post1 = {"_id": 0, "name": "Duck", "price": 500, "Description": "A very good duck"}
post2 = {"_id": 0, "name": "Even Better Duck", "price": 1000, "Description": "A very good duck"  }

collection.insert_many([post1, post2])

# results = collection.find({"name" : "Duck"})
#for result in results: 
#    print(result)