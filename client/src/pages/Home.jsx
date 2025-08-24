import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative">
      {/* Background image — put /public/hero.jpg or keep gradient */}
      <div
        className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center"
        aria-hidden="true"
      ></div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[70vh] flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            [Your Company Name]: Exporting Premium Corrugated Carton Boxes
          </h1>
          <p className="mt-4 text-base sm:text-lg opacity-90">
            Reliable quality, tailored to your specifications, delivered
            globally.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              to="/contact"
              className="px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:opacity-90"
            >
              Get a Quote
            </Link>
            <Link
              to="/products"
              className="px-5 py-3 rounded-xl border border-white/70 font-semibold hover:bg-white/10"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
