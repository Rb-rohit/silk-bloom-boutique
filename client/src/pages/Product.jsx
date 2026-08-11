import { Heart, MessageCircle, Star, ZoomIn } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { imageOf } from "../data/catalog";
import { useStore } from "../context/StoreContext";

const productId = (product) => String(product?._id ?? product?.id ?? "");

export default function Product() {
  const { id } = useParams();
  const { addToCart, wishlist, toggleWishlist, products } = useStore();
  const product = products.find((item) => productId(item) === String(id));
  const images = useMemo(() => {
    if (!product) return [];
    const gallery = Array.isArray(product.images) ? product.images : typeof product.images === "string" ? product.images.split("\n") : [];
    return gallery.filter(Boolean).length ? gallery.filter(Boolean) : [imageOf(product)];
  }, [product]);
  const [active, setActive] = useState("");
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    setActive(images[0] || "");
    setZoom(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id, images]);

  if (!product) {
    return <>
      <Navbar />
      <main className="container-custom py-20 text-center">
        <p className="eyebrow">Product unavailable</p>
        <h1 className="section-title">We couldn’t find this product.</h1>
      </main>
      <Footer />
    </>;
  }

  const wished = wishlist.some((item) => productId(item) === productId(product));
  const related = products
    .filter((item) => item.category === product.category && productId(item) !== productId(product))
    .concat(products.filter((item) => item.category !== product.category && productId(item) !== productId(product)))
    .slice(0, 4);
  const price = Number(product.price || 0);
  const wa = `https://wa.me/919876543210?text=${encodeURIComponent(`Hello Silk & Bloom, I would like to order ${product.name} (₹${price}).`)}`;

  return <>
    <Navbar />
    <main className="container-custom py-12">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <button onClick={() => setZoom(true)} className="relative block w-full rounded-3xl overflow-hidden bg-stone-100">
            <img src={active} alt={product.name} className="w-full h-[520px] object-cover" />
            <span className="absolute bottom-4 right-4 bg-white rounded-full p-3">
              <ZoomIn size={19} />
            </span>
          </button>
          <div className="flex gap-3 mt-3">
            {images.map((image, index) => 
              <button key={image} onClick={() => setActive(image)} className={`rounded-xl overflow-hidden border-2 ${active === image ? "border-[#7A1F3D]" : "border-transparent"}`}>
                <img src={image} alt={`${product.name} view ${index + 1}`} className="h-20 w-16 object-cover" />
              </button>
              )
            }
          </div>
        </div>
        <div>
          <p className="eyebrow">{product.category}</p>
          <h1 className="font-serif text-5xl mt-2">{product.name}</h1>
          <div className="flex items-center gap-2 mt-4">
            <Star size={18} className="fill-[#D4AF37] text-[#D4AF37]" />
            <b>{product.rating || "4.7"}</b>
            <span className="text-stone-500">({product.reviews || 12} reviews)</span>
          </div>
          <p className="text-3xl font-bold text-[#7A1F3D] mt-5">₹{price.toLocaleString("en-IN")}</p>
          <p className="text-stone-600 leading-7 mt-6">{product.description}</p>
          <div className="grid grid-cols-2 gap-3 mt-7">
            {
              [
                ["Fabric", product.fabric], ["Color", product.color], ["Occasion", product.occasion], ["Delivery", "3–5 days"]
              ].map(([label, value]) => 
                <div className="detail-card" key={label}>
                  <small>{label}</small>
                  <b>{value || "—"}</b>
                </div>
              )
            }
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <button onClick={() => addToCart(product)} className="button-primary">Add to bag</button>
            <button onClick={() => toggleWishlist(product)} className="button-outline">
              <Heart size={18} fill={wished ? "currentColor" : "none"} />
              {wished ? "Saved to wishlist" : "Save for later"}
            </button>
          </div>
          <a href={wa} target="_blank" rel="noreferrer" className="whatsapp-order">
            <MessageCircle size={20} /> 
            Order this style on WhatsApp
          </a>
          <p className="text-xs text-stone-500 mt-3">Cash on Delivery available. Secure checkout when you’re ready.</p>
        </div>
      </div>
      <section className="mt-20">
        <div className="text-center">
          <p className="eyebrow">More to love</p>
          <h2 className="section-title">Related products</h2>
        </div>
        {
          related.length ? 
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {related.map((item) => 
                <ProductCard key={productId(item)} product={item} />
              )}
            </div> 
          : 
            <p className="text-center text-stone-500 mt-6">More styles are coming soon.</p>
        }
      </section>
  </main>
  {
    zoom && 
      <div onClick={() => setZoom(false)} className="zoom-overlay">
        <img src={active} alt={product.name} />
        <button onClick={() => setZoom(false)}>Close</button>
      </div>
  }
  <Footer />
</>;

}
