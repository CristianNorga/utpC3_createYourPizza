var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var ingredients = new Schema({
  size: { type: String, enum: ["small", "medium", "large", "extra large"] },
  portion: {
    type: Number,
    enum: [1, 4, 6, 8],
  },
  price: { type: Number },
  img: { type: String },
  scale: {
    type: Number,
    enum: [1, 2, 3, 4],
  },
  description: { type: String },
  summary: { type: String },
});

module.exports = mongoose.model("Ingredients", ingredients);
