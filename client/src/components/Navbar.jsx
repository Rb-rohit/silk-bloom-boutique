import { Heart, Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStore } from "../context/StoreContext";

export default function Navbar() {
  const { cartCount, wishlist, user } = useStore();
  const [open, setOpen] = useState(false); const [search, setSearch] = useState(""); const navigate = useNavigate();
  const submit = (e) => { e.preventDefault(); if (search.trim()) navigate(`/shop?search=${encodeURIComponent(search)}`); };
  return <header className="sticky top-0 z-50 bg-[#fffdf9]/95 backdrop-blur border-b border-[#eadfd4]">
    <div className="container-custom flex items-center gap-5 py-4">
      <Link to="/" className="shrink-0"><h1 className="font-serif text-2xl font-bold tracking-wide text-[#7A1F3D]">Silk & Bloom</h1><p className="text-[10px] uppercase tracking-[.18em] text-stone-500">Boutique Ethnic Wear</p></Link>
      <nav className="hidden lg:flex flex-1 justify-center gap-6 text-sm font-medium"><Link to="/">Home</Link><Link to="/shop">Shop all</Link><Link to="/shop?collection=sarees">Sarees</Link><Link to="/shop?collection=kurtis">Kurtis</Link><Link to="/track">Track order</Link></nav>
      <form onSubmit={submit} className="hidden md:flex items-center border border-stone-200 rounded-full px-3 py-2 w-48 focus-within:border-[#7A1F3D]"><Search size={16}/><input aria-label="Search products" value={search} onChange={e=>setSearch(e.target.value)} className="w-full ml-2 text-sm outline-none bg-transparent" placeholder="Search"/></form>
      <div className="flex items-center gap-2 ml-auto"><Link aria-label="Wishlist" to="/wishlist" className="relative p-2"><Heart size={20}/>{wishlist.length > 0 && <b className="count">{wishlist.length}</b>}</Link><Link aria-label="Cart" to="/cart" className="relative p-2"><ShoppingBag size={20}/>{cartCount > 0 && <b className="count">{cartCount}</b>}</Link><Link aria-label="Account" to="/account" className="hidden sm:block p-2"><UserRound size={20}/></Link><button onClick={()=>setOpen(!open)} className="lg:hidden p-2">{open ? <X/> : <Menu/>}</button></div>
    </div>
    {open && <nav className="lg:hidden container-custom pb-4 flex flex-col gap-3 text-sm font-medium"><Link onClick={()=>setOpen(false)} to="/shop">Shop all</Link><Link onClick={()=>setOpen(false)} to="/shop?collection=sarees">Sarees</Link><Link onClick={()=>setOpen(false)} to="/shop?collection=kurtis">Kurtis</Link><Link onClick={()=>setOpen(false)} to="/track">Track order</Link><Link onClick={()=>setOpen(false)} to="/account">{user?.name || "Login / Sign up"}</Link></nav>}
  </header>;
}
