import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const id = product._id || product.id;

  return (
  <article onClick={() => navigate(`/product/${id}`)} className="product-card cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm">
    <div className="product-card-image"><img src={product.image || product.images?.[0]} alt={product.name} className="w-full h-80 object-cover" /></div>
    <div className="p-5">
      <h3 className="font-semibold text-lg product-card-title">{product.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{product.fabric}</p>
      <div className="flex items-center justify-between mt-4"><span className="text-2xl font-bold text-[#7A1F3D]">₹{product.price}</span><button onClick={(e) => { e.stopPropagation(); navigate(`/product/${id}`); }} className="product-card-button px-5 py-2 rounded-full bg-[#7A1F3D] text-white font-medium">View</button></div>
    </div>
  </article>
  );
}
