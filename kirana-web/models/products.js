var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
   title: String,
   image: String,
   description: String,
   price: Number,
   type: String,
   seller: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   // comments: [
   //    {
   //       type: mongoose.Schema.Types.ObjectId,
   //       ref: "Comment"
   //    }
   // ]
});

module.exports = mongoose.model("Product", ProductSchema);