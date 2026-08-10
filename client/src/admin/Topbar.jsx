import { Search, Bell, User } from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <div className="relative w-96">
        <Search
          className="absolute left-3 top-3 text-gray-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-[#7A1F3D]"
        />
      </div>

      <div className="flex items-center gap-4">
        <Bell size={20} />
        <div className="w-10 h-10 rounded-full bg-[#7A1F3D] text-white flex items-center justify-center">
          <User size={20} />
        </div>
      </div>
    </header>
  );
}