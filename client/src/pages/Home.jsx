import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { imageOf } from "../data/catalog";
import { useStore } from "../context/StoreContext";

const preferredCategories = ["Sarees", "Kurtis", "Dresses", "Lehengas", "Gowns"];

export default function Home() {
  const { products } = useStore();
  const categories = [...preferredCategories, ...new Set(products.map((p) => p.category).filter(Boolean))]
    .filter((name, index, list) => list.indexOf(name) === index)
    .filter((name) => products.some((p) => p.category === name));

  return (
    <>
    <Navbar />
    <Hero />
    <section className="container-custom py-16">
      <div className="flex justify-between items-end mb-8"><div><p className="eyebrow">Explore our world</p><h2 className="section-title">Shop by category</h2></div><Link to="/shop" className="text-[#7A1F3D] font-semibold">View all →</Link></div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((name) => { const product = products.find((p) => p.category === name); return <Link key={name} to={`/shop?category=${encodeURIComponent(name)}`} className="category-card"><img src={imageOf(product)} alt={name} /><span>{name}</span></Link>; })}
      </div>
    </section>
    <section className="container-custom pb-8"><div className="text-center mb-10"><p className="eyebrow">Straight from our collection</p><h2 className="section-title">All products</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{products.map((p) => <ProductCard key={p._id} product={p} />)}</div></section>
    <section className="container-custom py-16"><div className="bg-[#7A1F3D] text-white rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row justify-between gap-5 items-center"><div><p className="text-[#f5dcb0] uppercase text-xs tracking-[.2em]">A little help goes a long way</p><h2 className="font-serif text-3xl mt-2">Not sure what to choose?</h2><p className="text-white/75 mt-2">Talk to our stylist and order directly on WhatsApp.</p></div><a className="button-light" href="https://wa.me/919876543210" target="_blank" rel="noreferrer">Chat with a stylist</a></div></section>
    <Footer />
    <WhatsAppButton />
    </>
  );
}
