// Set VITE_API_URL in Vercel to change the backend without editing source code.
export const API_URL = (
  import.meta.env.VITE_API_URL || "https://silk-bloom-boutique.onrender.com"
).replace(/\/$/, "");

export const PRODUCTS_API = `${API_URL}/api/products`;
