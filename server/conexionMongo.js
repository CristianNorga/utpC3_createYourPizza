const { MongoClient } = require("mongodb");
const user = "admin";
const password = "SgYvjK3YsPAP8xlW";
const dataBase = "sample_analytics.customers";
;
const uri = `mongodb+srv://${user}:<${password}>@cluster.ctsee.mongodb.net/${dataBase}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  // const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
