const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");

router.post("/", async (req, res) => {
  const {
    name,
    about,
    description,
    price,
    category,
    imageUrl,
    availableColors,
    brand,
    isBestSeller,
    isNewArrival,
  } = req.body;
  try {
    const newProduct = await Product.create({
      name: name,
      about: about,
      description: description,
      price: price,
      category: category,
      imageUrl: imageUrl,
      availableColors: availableColors,
      brand: brand,
      isBestSeller: isBestSeller,
      isNewArrival: isNewArrival,
    });

    return res.status(200).json({
      status: "ok",
      data: "Product Created",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
