require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

const products = [
  { name: "Royal Banarasi Silk Saree", category: "Sarees", fabric: "Banarasi Silk", color: "Wine", occasion: "Wedding", price: 3499, stock: 8, rating: 4.8, reviews: 42, description: "A rich hand-finished Banarasi silk drape with luminous zari work.", images: ["https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1618244972963-dbad68f1a7a4?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1583391733981-849cb11f1df6?auto=format&fit=crop&w=1000&q=85"] },
  { name: "Ivory Kota Doria Saree", category: "Sarees", fabric: "Cotton", color: "Ivory", occasion: "Casual", price: 1899, stock: 12, rating: 4.6, reviews: 28, description: "Lightweight, airy and gracefully detailed for everyday elegance.", images: ["https://images.unsplash.com/photo-1618244972963-dbad68f1a7a4?auto=format&fit=crop&w=1000&q=85"] },
  { name: "Emerald Embroidered Kurti", category: "Kurtis", fabric: "Rayon", color: "Green", occasion: "Party", price: 1299, stock: 15, rating: 4.7, reviews: 36, description: "A flattering straight-fit kurti with delicate thread embroidery.", images: ["https://images.unsplash.com/photo-1583391733981-849cb11f1df6?auto=format&fit=crop&w=1000&q=85"] },
  { name: "Rosewood Anarkali Dress", category: "Dresses", fabric: "Chanderi", color: "Rose", occasion: "Festive", price: 2499, stock: 7, rating: 4.9, reviews: 19, description: "Fluid Chanderi with a dramatic flared silhouette.", images: ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=85"] },
  { name: "Blush Mirrorwork Lehenga", category: "Lehengas", fabric: "Georgette", color: "Pink", occasion: "Wedding", price: 6499, stock: 4, rating: 4.9, reviews: 51, description: "A celebration-ready lehenga with mirrorwork.", images: ["https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1000&q=85"] },
  { name: "Midnight Blue Gown", category: "Gowns", fabric: "Satin", color: "Blue", occasion: "Party", price: 4299, stock: 6, rating: 4.7, reviews: 24, description: "A polished satin gown for an effortless evening statement.", images: ["https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"] }
].map((product) => ({ ...product, image: product.images[0] }));

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log(`Stored ${products.length} products with gallery images in MongoDB.`);
  await mongoose.disconnect();
}
seed().catch((error) => { console.error(error); process.exit(1); });
