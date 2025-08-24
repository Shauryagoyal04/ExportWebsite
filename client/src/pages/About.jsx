export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-bold">Who We Are</h2>
          <p className="mt-4 text-gray-600">
            Established in [Year], based in [City, State], we specialize in
            manufacturing high-quality corrugated boxes for global markets.
          </p>
          <h3 className="mt-8 text-xl font-semibold">Why Choose Us</h3>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
            <li>High manufacturing capacity with modern machinery</li>
            <li>Years of export experience & compliance readiness</li>
            <li>Stringent quality checks & international standards</li>
            <li>Reliable timelines and global shipping familiarity</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Quick Stats</h3>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {[
              { k: "Years", v: "X+" },
              { k: "Countries", v: "Y+" },
              { k: "Units/Month", v: "Z+" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border p-6 text-center">
                <p className="text-3xl font-bold">{s.v}</p>
                <p className="text-xs uppercase tracking-wide text-gray-500 mt-1">
                  {s.k}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
