import { useEffect, useState } from "react";
import { Search, Trash2, Pencil } from "lucide-react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    const ok = window.confirm("Delete this product?");
    if (!ok) return;

    await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
    });

    fetchProducts();
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-[#FAF7F2] min-h-screen">
        <Topbar />

        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold">Products</h1>

            <div className="relative w-80">
              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-[#7A1F3D]"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#F5E9DD]">
                <tr className="text-left">
                  <th className="p-4">Image</th>
                  <th className="p-4">Product</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Stock</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((product) => (
                  <tr
                    key={product._id}
                    className="border-t hover:bg-[#FAF7F2]"
                  >
                    <td className="p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-xl"
                      />
                     
                    </td>

                    <td className="p-4 font-medium">{product.name}</td>
                    <td className="p-4">{product.category}</td>
                    <td className="p-4 font-semibold text-[#7A1F3D]">
                      ₹{product.price}
                    </td>
                    <td className="p-4">{product.stock}</td>

                    <td className="p-4">
                      <div className="flex items-center justify-center gap-3">
                        <button
  onClick={() => navigate(`/admin/edit-product/${product._id}`)}
  className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200"
>
  <Pencil size={18} />
</button>

<button
  onClick={() => deleteProduct(product._id)}
  className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200"
>
  <Trash2 size={18} />
</button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan="6" className="p-10 text-center text-gray-500">
                      No products found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}