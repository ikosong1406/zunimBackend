const express = require("express");
const router = express.Router();
const Orders = require("../Models/Order");

router.post("/", async (req, res) => {
  try {
    const { orderId, status } = req.body;

    // Filter out empty or null values from the update data
    const updateData = {};
    if (typeof status === "string" && status.trim() !== "") {
      updateData.status = status.trim();
    }

    const updatedUser = await Orders.findOneAndUpdate(
      { _id: orderId },
      updateData,
      { new: true } // Return the updated document
    );
    res.json({ message: "Order updated successfully", status: "ok" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
