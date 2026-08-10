export default function CategoryCard({ title, image }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="absolute inset-0 bg-black/30 flex items-end p-6">
        <div>
          <h3 className="text-white text-2xl font-semibold">{title}</h3>
          <button className="mt-3 px-5 py-2 rounded-full bg-white text-[#7A1F3D] font-medium">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}