const express = require("express");
const Destination = require("../models/Destination");
// const productModel = require("../module/productModel");
const searchRoute = express.Router({ mergeParams: true });

// const protect = require("../middleware/authMiddelWare");

searchRoute.get("/",async(req,res,next)=>{
    const query=req.query.q
try {
    
const destinations=await Destination.aggregate([
    {
      $search: {
        index: "search",
        text: {
          query: query,
          path: {
            wildcard: "*"
          }
        }
      }
    }
  ]);
//   const response = {
//     count: result.length,
//     products: result,
//   };
  //   if (docs.length >= 0) {
  res.status(200).json({destinations});

} catch (error) {
    res.status().send();
}
});

module.exports=searchRoute;