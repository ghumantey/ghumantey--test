const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  photo: {
    type: String,
  },
//   time: {
//     type: String,
//   },
//   location: {
//     type: String,
//   },
});

module.exports = mongoose.model("Event", eventSchema);
