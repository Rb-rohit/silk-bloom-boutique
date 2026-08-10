import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-[#FAF7F2] min-h-screen">
        <Topbar />

        <div className="p-8">
          <h1 className="text-4xl font-bold mb-8">
            Boutique Dashboard
          </h1>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <p className="text-gray-500">Total Products</p>
              <h2 className="text-4xl font-bold mt-3">128</h2>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <p className="text-gray-500">Sarees</p>
              <h2 className="text-4xl font-bold mt-3">84</h2>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <p className="text-gray-500">Garments</p>
              <h2 className="text-4xl font-bold mt-3">44</h2>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <p className="text-gray-500">Low Stock</p>
              <h2 className="text-4xl font-bold mt-3 text-red-500">7</h2>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm mt-8">
            <h2 className="text-2xl font-bold mb-4">Recent Products</h2>

            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="py-3">Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="py-4">Royal Banarasi Silk Saree</td>
                  <td>Silk Sarees</td>
                  <td>₹3499</td>
                  <td>12</td>
                </tr>

                <tr className="border-b">
                  <td className="py-4">Designer Party Wear Kurti</td>
                  <td>Garments</td>
                  <td>₹899</td>
                  <td>25</td>
                </tr>

                <tr>
                  <td className="py-4">Elegant Cotton Saree</td>
                  <td>Cotton Sarees</td>
                  <td>₹1499</td>
                  <td>8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}