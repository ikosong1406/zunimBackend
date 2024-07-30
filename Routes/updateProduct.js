const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");

router.post("/", async (req, res) => {
  try {
    const {
      productId,
      name,
      about,
      description,
      price,
      category,
      isBestSeller,
      isNewArrival,
    } = req.body;

    const updateData = {};

    if (typeof name === "string" && name.trim() !== "") {
      updateData.name = name.trim();
    }
    if (typeof about === "string" && about.trim() !== "") {
      updateData.about = about.trim();
    }
    if (typeof description === "string" && description.trim() !== "") {
      updateData.description = description.trim();
    }
    if (typeof price === "number") {
      updateData.price = price;
    }
    if (typeof category === "string" && category.trim() !== "") {
      updateData.category = category.trim();
    }
    if (typeof isBestSeller === "boolean") {
      updateData.isBestSeller = isBestSeller;
    }
    if (typeof isNewArrival === "boolean") {
      updateData.isNewArrival = isNewArrival;
    }

    const updatedProduct = await Product.findOneAndUpdate(
      { _id: productId },
      updateData,
      { new: true } // Return the updated document
    );

    res.json({
      message: "Product updated successfully",
      status: "ok",
      updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
});

module.exports = router;
