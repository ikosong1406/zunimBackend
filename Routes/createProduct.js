// routes/product.js
const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");
const upload = require("../Utils/multer-config");

router.post(
  "/",
  upload.fields([
    { name: "mainImage", maxCount: 1 },
    { name: "additionalImages", maxCount: 3 },
  ]),
  async (req, res) => {
    const {
      name,
      about,
      description,
      price,
      category,
      availableColors,
      availableSize,
      brand,
      isBestSeller,
      isNewArrival,
    } = req.body;

    try {
      const mainImage = req.files["mainImage"]
        ? req.files["mainImage"][0].path
        : null;
      const additionalImages = req.files["additionalImages"]
        ? req.files["additionalImages"].map((file) => file.path)
        : [];

      const newProduct = await Product.create({
        name: name,
        about: about,
        description: description,
        price: price,
        category: category,
        mainImage: mainImage,
        additionalImages: additionalImages,
        availableColors: availableColors,
        availableSize: availableSize,
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
  }
);

module.exports = router;
