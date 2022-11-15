const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const nocache = require("nocache");
const fileUpload = require("express-fileupload");
const multipart = require("connect-multiparty");
const myapi = require("./config/routes");
const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

global.__basedir = __dirname;
app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.json({ limit: "100mb", parameterLimit: 100000000 }));
app.use(
  bodyparser.urlencoded({
    limit: "100mb",
    extended: true,
    parameterLimit: 100000000,
  })
);
app.use(nocache());
app.use(fileUpload());

require("./config/db")(app);
require("./config/routes")(app);

// if (process.env.NODE_ENV == 'production') {
//   require('./startup/prod')(app);
// }

app.get("/", (req, res) => {

  res.send({ Hello: "World", API: "On the running mode", StatusCode: "200" });
});
//constum api
app.get("/myapi/:Id", (req, res) => {
  const id = req.params.Id;
  const data = req.body;
  res.status(200).json({
    message: "your running api",
    apiList: "plz contact to admin 8505948801",
    responsedata: id,
   responsedata2:data
  });
});
//const port = process.env.PORT || 3007;
let port = process.env.PORT;
if (port == null || port == "") {
  port = 5001;
}

app.listen(port, () => {
  console.log("Server started at port " + port);
  //   // readResponseForS3Job();
});

module.exports = app;
