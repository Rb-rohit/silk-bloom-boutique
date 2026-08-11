import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { categoryGroups } from "../data/categories";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    category: "",
    fabric: "",
    color: "",
    occasion: "",
    price: "",
    stock: "",
    description: "",
    image: "",
    images: [],
  });

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setForm(data));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
      }),
    });

    alert("Product updated successfully!");
    navigate("/admin/products");
  };

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-[#FAF7F2] min-h-screen">
        <Topbar />

        <div className="p-8">
          <h1 className="text-4xl font-bold mb-8">Edit Product</h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 shadow-sm grid md:grid-cols-2 gap-6"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Product Name"
              className="border p-4 rounded-xl"
              required
            />

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="border p-4 rounded-xl"
            >
              {categoryGroups.map((group) => <optgroup key={group.name} label={group.name}>{group.categories.map((category) => <option key={category}>{category}</option>)}</optgroup>)}
            </select>

            <input
              name="fabric"
              value={form.fabric}
              onChange={handleChange}
              placeholder="Fabric"
              className="border p-4 rounded-xl"
            />

            <textarea
              name="images"
              value={Array.isArray(form.images) ? form.images.join("\n") : form.images || ""}
              onChange={handleChange}
              placeholder="Gallery image URLs (one per line)"
              className="border p-4 rounded-xl md:col-span-2 h-28"
            />

            <input
              name="color"
              value={form.color}
              onChange={handleChange}
              placeholder="Color"
              className="border p-4 rounded-xl"
            />

            <input
              name="occasion"
              value={form.occasion}
              onChange={handleChange}
              placeholder="Occasion"
              className="border p-4 rounded-xl"
            />

            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              type="number"
              placeholder="Price"
              className="border p-4 rounded-xl"
            />

            <input
              name="stock"
              value={form.stock}
              onChange={handleChange}
              type="number"
              placeholder="Stock"
              className="border p-4 rounded-xl"
            />

            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="border p-4 rounded-xl"
            />

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              className="border p-4 rounded-xl md:col-span-2 h-40"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-[#7A1F3D] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#631732]"
            >
              Update Product
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
