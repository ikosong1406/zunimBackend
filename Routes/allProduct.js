const express = require("express");
const router = express.Router();
const Products = require("../Models/Product");

router.get("/", async (req, res) => {
  try {
    const list = await Products.find(); // Fetch all users from the database
    res.json(list); // Send the users as JSON response
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Error fetching orders" });
  }
});

module.exports = router;
