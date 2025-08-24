import { Card, CardContent } from "../components/Card";

export default function Products() {
  const products = [
    {
      name: "Corrugated Boxes",
      desc: "Standard and heavy-duty export-ready cartons.",
    },
    { name: "Printed Boxes", desc: "Custom-printed for branding and export." },
    { name: "Die-Cut Boxes", desc: "Precision cut for specialty packaging." },
    { name: "Mono Cartons", desc: "Compact and sturdy packaging." },
    {
      name: "Partition Boxes",
      desc: "Safe partitioning for delicate exports.",
    },
    {
      name: "Food-Grade Packaging",
      desc: "Safe, hygienic, and export-compliant.",
    },
    {
      name: "Shoe & Cosmetic Boxes",
      desc: "Stylish, durable packaging for retail exports.",
    },
    { name: "Auto-Parts Boxes", desc: "Heavy-duty corrugated for auto parts." },
    {
      name: "Corrugated Rolls",
      desc: "Flexible rolls for protective export packing.",
    },
    {
      name: "Master Cartons",
      desc: "Strong outer cartons for bulk export shipments.",
    },
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <Card key={i} className="shadow-lg hover:shadow-xl transition">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
