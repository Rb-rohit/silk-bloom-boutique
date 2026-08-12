import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import axios from "axios";
import { categoryGroups } from "../data/categories";
import { PRODUCTS_API } from "../config/api";

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    category: "Sarees",
    fabric: "",
    color: "",
    occasion: "",
    price: "",
    stock: "",
    description: "",
    image: "",
    images: [],
  });
  const [uploading, setUploading] = useState(false);
  const uploadImage = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "silk_bloom_upload");

  setUploading(true);

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/ic4rknxn/image/upload",
      data
    );

    setForm((current) => ({
      ...current,
      image: current.image || res.data.secure_url,
      images: [...current.images, res.data.secure_url],
    }));
  } catch (err) {
    alert("Image upload failed");
    console.error(err);
  }

  setUploading(false);
};

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(PRODUCTS_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
      }),
    });

    if (res.ok) {
      alert("Product added successfully!");

      setForm({
        name: "",
        category: "Sarees",
        fabric: "",
        color: "",
        occasion: "",
        price: "",
        stock: "",
        description: "",
        image: "",
        images: [],
      });
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-[#FAF7F2] min-h-screen">
        <Topbar />

        <div className="p-8">
          <h1 className="text-4xl font-bold mb-8">Add New Product</h1>

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
              placeholder="Price"
              type="number"
              className="border p-4 rounded-xl"
            />

            <input
              name="stock"
              value={form.stock}
              onChange={handleChange}
              placeholder="Stock Quantity"
              type="number"
              className="border p-4 rounded-xl"
            />

            <div className="md:col-span-2">
  <label className="font-medium">Product Gallery Images</label>

  <input
    type="file"
    accept="image/*"
    multiple
    onChange={(e) => Array.from(e.target.files).forEach(uploadImage)}
    className="mt-2 w-full border p-4 rounded-xl"
  />

  {uploading && (
    <p className="text-blue-600 mt-2">Uploading image...</p>
  )}

  <div className="flex flex-wrap gap-3 mt-4">
    {form.images.map((url) => <img key={url} src={url} alt="Preview" className="w-28 h-28 object-cover rounded-xl border" />)}
  </div>
</div>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Product Description"
              className="border p-4 rounded-xl md:col-span-2 h-40"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-[#7A1F3D] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#631732]"
            >
              Add Product
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
