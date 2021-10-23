const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: String,
  phone: String,
  email: String,
}, {
  collection: 'contacts'
});

module.exports = mongoose.model("Contacts", contactSchema);
