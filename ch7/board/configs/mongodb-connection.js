const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://suhyeon1740:212neNFR3Z3Sab05@cluster0.lgr3fhq.mongodb.net/board?retryWrites=true&w=majority";

module.exports = function (callback) {
  return MongoClient.connect(uri, callback);
};
