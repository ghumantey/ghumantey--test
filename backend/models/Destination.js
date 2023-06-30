const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, "Enter name"],
    // maxLength: 50,
  },
  location: {
    type: String,
    // required: [true, "Enter location"],
    // maxLength: 50,
  },
  photo: {
    type: String,
  },
  bestVisitingTime: {
    type: String,
    // required: [true, "Enter best visiting time"],
    // maxLength: 50,
  },
  timeForCompletion:{
    type:String,
    // required:[true, "Enter the average time to visit"]
  },
  description:{
    type:String,
  },
  expenditureDetails: {
    type: String,
    // required: [true, "Enter expenditure"],
    // maxLength: 50,
  },
  heritageSite: [
    {
      title: {
        type: String,
      },
      photo: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
  store: [
    {
      item: {
        type: String,
      },
      price: {
        type: String,
      },
      description: {
        type: String,
      },
      photo: {
        type: String,
      },
    },
  ],
  cuisine: {
    type: Array,
  },
  historical_facts: {
    type: String,
  },
  posts: [{}]
});

module.exports = mongoose.model("Destination", destinationSchema);

// db.update({'Searching criteria goes here'},
// {
//  $push : {
//     trk :  {
//              "lat": 50.3293714,
//              "lng": 6.9389939
//            } //inserted data is the object to be inserted
//   }
// });
