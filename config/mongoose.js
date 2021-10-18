const mongoose = require("mongoose");
const config = require("../config/env/develepment");

module.exports = () => {
  const db = mongoose.connect(config.cloudDb);
  return db;
};
