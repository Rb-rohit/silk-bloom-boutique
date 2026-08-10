const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: String,
    fabric: String,
    color: String,
    occasion: String,
    price: Number,
    stock: Number,
    description: String,
    // `image` remains the cover image for older admin records.
    image: String,
    // All gallery images used on the product page are persisted in MongoDB.
    images: { type: [String], default: [] },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
