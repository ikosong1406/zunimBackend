const express = require("express");
const router = express.Router();
const Orders = require("../Models/Order");

router.get("/", async (req, res) => {
  try {
    const list = await Orders.find(); // Fetch all users from the database
    res.json(list); // Send the users as JSON response
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Error fetching orders" });
  }
});

module.exports = router;
