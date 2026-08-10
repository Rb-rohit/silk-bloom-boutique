const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

const galleryPayload = (body) => {
  const images = Array.isArray(body.images)
    ? body.images.filter(Boolean)
    : typeof body.images === "string"
      ? body.images.split("\n").map((url) => url.trim()).filter(Boolean)
      : [];
  const image = body.image || images[0] || "";
  return { ...body, image, images: images.length ? images : (image ? [image] : []) };
};

// Get all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add product
router.post("/", async (req, res) => {
  const product = await Product.create(galleryPayload(req.body));
  res.status(201).json(product);
});

// Delete product
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

// Get single product
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// Update product
router.put("/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    galleryPayload(req.body),
    { new: true }
  );

  res.json(product);
});

module.exports = router;
