const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
  name1: {
    type: String
  },
  name2: {
    type: String
  },
  name3: {
    type: String
  },
  name4: {
    type: String
  }
});

module.exports = mongoose.model("ok", StudentSchema, "ok");

// var mongoose = require("mongoose");

// var StudentSchema = new mongoose.Schema({
//   StudentId: Number,
//   Name: String,
//   Roll: Number,
//   Birthday: Date,
//   Address: String
// });

// module.exports = mongoose.model("dada", StudentSchema, "dada");
