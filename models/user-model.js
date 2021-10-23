const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String
}, {
  collection: 'users',
});

module.exports = mongoose.model('Users', userSchema)