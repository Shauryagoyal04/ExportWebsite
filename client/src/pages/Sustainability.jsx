export default function Sustainability() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Sustainability</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-semibold mb-4">Eco-Friendly Packaging</h3>
          <p className="text-gray-600">
            Our corrugated boards are 100% recyclable and manufactured using
            eco-friendly materials. We actively support sustainable packaging
            practices for global exports.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5f7d6ef"
            alt="Eco packaging"
            className="rounded-xl shadow"
          />
        </div>
      </div>
    </div>
  );
}
