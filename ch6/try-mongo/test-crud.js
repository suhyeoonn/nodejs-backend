const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://suhyeon1740:212neNFR3Z3Sab05@cluster0.lgr3fhq.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });

async function main() {
  try {
    await client.connect();
    console.log("mongoDB 접속 성공");

    const collection = client.db("test").collection("person");

    await collection.insertOne({ name: "Andy", age: 30 });
    console.log("문서 추가 완료");

    const documents = await collection.find({ name: "Andy" }).toArray();
    console.log("찾은 문서", documents);

    await collection.updateOne({ name: "Andy" }, { $set: { age: 31 } });
    console.log("문서 업데이트");

    const updatedDocuments = await collection.find({ name: "Andy" }).toArray();
    console.log("갱신된 문서 ", updatedDocuments);

    // await collection.deleteOne({ name: "Andy" });
    // console.log("문서 삭제");

    await client.close();
  } catch (err) {
    console.error(err);
  }
}

main();
