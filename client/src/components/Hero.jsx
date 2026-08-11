import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import heroImage from "../assets/hero/saree2.png";

export default function Hero() {
  return <section className="hero"><div className="container-custom grid lg:grid-cols-2 gap-10 items-center py-14 lg:py-20">
    <div className="hero-copy"><p className="eyebrow">New festive edit · 2026</p><h2 className="font-serif text-5xl lg:text-7xl leading-[.98] mt-4">Made for your <em>most beautiful</em> moments.</h2><p className="text-stone-600 mt-6 text-lg max-w-lg">Discover sarees, kurtis, dresses, lehengas and gowns handpicked for effortless elegance.</p><div className="flex flex-wrap gap-3 mt-8"><Link to="/shop" className="button-primary">Shop the collection</Link><a href="https://wa.me/9921923609?text=Hello%20Silk%20%26%20Bloom%2C%20I%20need%20styling%20help." target="_blank" rel="noreferrer" className="button-outline"><MessageCircle size={18}/> Style me on WhatsApp</a></div></div>
    <div className="hero-image rounded-[2rem] overflow-hidden shadow-2xl"><img src={heroImage} alt="Silk saree collection" className="w-full h-[520px] object-cover"/></div>
  </div></section>;
}
