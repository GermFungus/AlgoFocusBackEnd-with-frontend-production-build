const MongoClient = require('mongodb').MongoClient;
const uri = process.env.dbUrl || "mongodb+srv://kapinjal:00gannakeras@algofocus-zkugd.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true  , useUnifiedTopology : true});

var dbconnection =  async () =>{
    await client.connect();
    let connection = await client.db("AlgoFocus").collection('SubmissionData');
    return connection;
}

var dbWrite = async (data) =>{
    let collection = await dbconnection();
    let resp = await collection.insertOne(data);
    return resp;
}

module.exports.dbWrite =  dbWrite ;