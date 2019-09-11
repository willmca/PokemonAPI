const mongoose = require("../connection");

const TypeSchema = new mongoose.Schema({
  name:String,
  url:String
});

const Type = mongoose.model("Type", TypeSchema);

module.exports = Type;
