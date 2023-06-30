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
  time: {
    type: String,
  },
  location: {
    type: String,
  },
}, {
    timestamps: true
});

module.exports = mongoose.model("Event", eventSchema);
