const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");

router.post("/", async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await Product.findByIdAndDelete(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
