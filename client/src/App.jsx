import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Dashboard from "./admin/Dashboard";
import AddProduct from "./admin/AddProduct";
import Products from "./admin/Products";
import EditProduct from "./admin/EditProduct";
import { Account, Cart, Checkout, Track, Wishlist } from "./pages/Commerce";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/track" element={<Track />} />
        <Route path="/account" element={<Account />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}
