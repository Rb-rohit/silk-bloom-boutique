import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { catalog } from "../data/catalog";

const StoreContext = createContext();
const read = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
};

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => read("sb-cart", []));
  const [wishlist, setWishlist] = useState(() => read("sb-wishlist", []));
  const [orders, setOrders] = useState(() => read("sb-orders", []));
  const [user, setUser] = useState(() => read("sb-user", null));
  const [products, setProducts] = useState(catalog);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.ok ? res.json() : Promise.reject())
      .then((data) => { if (data.length) setProducts(data); })
      .catch(() => {});
  }, []);

  useEffect(() => localStorage.setItem("sb-cart", JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem("sb-wishlist", JSON.stringify(wishlist)), [wishlist]);
  useEffect(() => localStorage.setItem("sb-orders", JSON.stringify(orders)), [orders]);
  useEffect(() => localStorage.setItem("sb-user", JSON.stringify(user)), [user]);

  const value = useMemo(() => ({
    cart, wishlist, orders, user, setUser, products,
    cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
    addToCart: (product) => setCart(items => {
      const found = items.find(item => item._id === product._id);
      return found ? items.map(item => item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item) : [...items, { ...product, quantity: 1 }];
    }),
    updateQuantity: (id, quantity) => setCart(items => quantity < 1 ? items.filter(item => item._id !== id) : items.map(item => item._id === id ? { ...item, quantity } : item)),
    removeFromCart: (id) => setCart(items => items.filter(item => item._id !== id)),
    toggleWishlist: (product) => setWishlist(items => items.some(item => item._id === product._id) ? items.filter(item => item._id !== product._id) : [...items, product]),
    createOrder: (details) => {
      const order = { id: `SB${Date.now().toString().slice(-7)}`, date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }), status: "Order confirmed", items: cart, total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0), ...details };
      setOrders(items => [order, ...items]); setCart([]); return order;
    }
  }), [cart, wishlist, orders, user, products]);
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
export const useStore = () => useContext(StoreContext);
