"use strict";

const user = require("../routes/user.routes");
const SDC = require("../routes/commonSDC.routes");
 

module.exports = function (app) {
    app.use("/api/user",user);
    app.use("/api/commonSDC",SDC);
     
};