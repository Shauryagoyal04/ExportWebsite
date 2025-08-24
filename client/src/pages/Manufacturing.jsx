const steps = [
  "Custom Box Design",
  "Flute & Material Selection",
  "Die Cutting & Printing",
  "Assembly & Quality Checks",
  "Packing & Global Dispatch",
];

export default function Manufacturing() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        Manufacturing Process
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {steps.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {i + 1}. {s}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
