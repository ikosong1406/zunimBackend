// models/Product.js
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String },
  about: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  mainImage: { type: String },
  additionalImages: [String],
  availableColors: [String],
  brand: { type: String },
  isBestSeller: { type: Boolean },
  isNewArrival: { type: Boolean },
});

module.exports = mongoose.model("Product", ProductSchema);
