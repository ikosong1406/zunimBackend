const express = require("express");
const router = express.Router();
const Orders = require("../Models/Order");
const { sendMail } = require("../Utils/mail");
const { OrderConfirmation } = require("../Templates/orderTemplate");
const twilio = require("twilio");
require("dotenv").config(); // Load environment variables

router.post("/", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    street,
    city,
    state,
    zipCode,
    specialNote,
    products,
    deliveryFee,
    subTotal,
    discount,
    total,
  } = req.body;

  try {
    const newOrder = await Orders.create({
      customer: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        street: street,
        city: city,
        state: state,
        zipCode: zipCode,
        specialNote: specialNote,
      },
      products: products,
      deliveryFee: deliveryFee,
      subTotal: subTotal,
      discount: discount,
      total: total,
    });

    const htmlContent = OrderConfirmation(
      firstName,
      products,
      subTotal,
      deliveryFee,
      total,
      newOrder._id
    );

    // Send order confirmation email
    sendMail(newOrder.customer.email, "Order Confirmation", "", htmlContent);

    return res.status(200).json({
      status: "ok",
      data: "Order Created",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
