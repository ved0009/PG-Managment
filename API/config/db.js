const mongoose = require("mongoose");

// Replace this with your MONGOURI.
//  const MONGOURI = "mongodb://localhost:27017/PGManagement";
 const MONGOURI = "mongodb+srv://mongopg:mongopgdb12@pg.rgduo1c.mongodb.net/PGManagement";

// NEW server
//  const MONGOURI =
//  "mongodb://ysosy:YsOsYPassWord@13.235.154.174:27017/ysosy_ecommerce_db?authSource=ysosy_ecommerce_db&readPreference=primary&appname=MongoDBCompassCommunity&ssl=false";

// old AWS
//const MONGOURI = "mongodb+srv://patilnayan092:Nayan22121992@dev-cluster-ecomlogisti.imint.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
secretKey: "secret";
const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
