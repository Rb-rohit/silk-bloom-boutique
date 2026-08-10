import { LayoutDashboard, Package, PlusCircle, Tag } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#2C2C2C] text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold text-[#D4AF37]">
        Silk & Bloom
      </h2>
      <p className="text-gray-400 text-sm mb-8">Admin Panel</p>

      <nav className="space-y-3">
        <Link
          to="/admin"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/admin/products"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10"
        >
          <Package size={20} />
          Products
        </Link>

        <Link
          to="/admin/add-product"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10"
        >
          <PlusCircle size={20} />
          Add Product
        </Link>

        <Link
          to="/admin/categories"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10"
        >
          <Tag size={20} />
          Categories
        </Link>
      </nav>
    </aside>
  );
}