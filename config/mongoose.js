const mongoose = require("mongoose");
const config = require("../config/env/develepment");

module.exports = () => {
  mongoose
    .connect(config.db)
    .then(() => console.log("Connected to database"))
    .catch(() => console.error("Connection failed"));
};
