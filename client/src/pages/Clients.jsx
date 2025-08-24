export default function Clients() {
  const testimonials = [
    {
      client: "Global Exporter Inc.",
      quote: "Consistently strong, on-time export packaging.",
    },
    {
      client: "Retail Chain EU",
      quote: "Durable boxes, perfect for international shipments.",
    },
  ];

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        Clients & Testimonials
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl shadow hover:shadow-md"
          >
            <h3 className="font-semibold">{t.client}</h3>
            <p className="text-gray-600 italic">“{t.quote}”</p>
          </div>
        ))}
      </div>
    </div>
  );
}
