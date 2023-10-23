const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://suhyeon1740:212neNFR3Z3Sab05@cluster0.lgr3fhq.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const adminDB = await client.db("test").admin(); //.command({ ping: 1 });
    const listDatabases = await adminDB.listDatabases();
    console.log(listDatabases);
    return "OK";
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
