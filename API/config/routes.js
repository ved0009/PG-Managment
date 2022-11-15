"use strict";

const user = require("../routes/user.routes");
 

module.exports = function (app) {
    app.use("/api/user",user);
     
};