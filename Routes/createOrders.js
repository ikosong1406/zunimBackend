const express = require("express");
const router = express.Router();
const Orders = require("../Models/Order");
const { sendMail } = require("../Utils/mail");
const { OrderConfirmation } = require("../Templates/orderTemplate");
const twilio = require("twilio");
require("dotenv").config(); // Load environment variables

// Twilio configuration using environment variables
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = twilio(accountSid, authToken);

// Helper function to format Nigerian phone numbers
// const formatPhoneNumber = (phoneNumber) => {

//   const cleanedNumber = phoneNumber.replace(/\D/g, "");

//   return cleanedNumber.startsWith("0")
//     ? `+234${cleanedNumber.substring(1)}`
//     : `+234${cleanedNumber}`;
// };

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

    // const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
    // const smsBody = `Hello ${firstName}, your order with Zunim has been confirmed. Thank you for shopping with us!`;
    // await client.messages.create({
    //   body: smsBody,
    //   from: process.env.TWILIO_PHONE_NUMBER,
    //   to: formattedPhoneNumber,
    // });

    return res.status(200).json({
      status: "ok",
      data: "Order Created",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
