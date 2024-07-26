// models/Order.js
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  status: { type: String, default: "pending" },
  date: { type: Date, default: Date.now },
  customer: {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phoneNumber: { type: String },
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String },
    specialNote: { type: String },
  },
  products: [
    {
      name: { type: String },
      quantity: { type: Number },
      subPrice: { type: Number },
    },
  ],
  deliveryFee: { type: Number },
  subTotal: { type: Number },
  discount: { type: Number },
  total: { type: Number },
});

module.exports = mongoose.model("Order", OrderSchema);
