const express = require("express");
const router = express.Router();
const Order = require("../Models/Order");

router.post("/", async (req, res) => {
  const { orderId } = req.body; // Extract userId from req.params

  try {
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    console.error("Error fetching user transactions:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
