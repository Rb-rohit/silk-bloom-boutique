export default function Footer() {
  return (
    <footer className="bg-[#2c2c2c] text-white mt-20">
      <div className="container-custom py-16 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-[#D4AF37]">Silk & Bloom</h3>
          <p className="text-gray-300 mt-4">
            Premium Sarees, Kurtis, and Ethnic Wear curated for elegance.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p>Nashik, Maharashtra</p>
          <p>+91 98765 43210</p>
          <p>silkbloom@example.com</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Hours</h4>
          <p>Mon - Sat: 10:00 AM - 8:30 PM</p>
          <p>Sunday: 11:00 AM - 6:00 PM</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
        © 2026 Silk & Bloom Boutique. All rights reserved.
      </div>
    </footer>
  );
}