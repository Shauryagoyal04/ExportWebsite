import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    inquiry: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("✅ Inquiry submitted successfully!");
        setForm({ name: "", company: "", email: "", inquiry: "" });
      } else {
        setStatus("❌ Failed to submit inquiry.");
      }
    } catch {
      setStatus("❌ Network error.");
    }
  };

  return (
    <div className="px-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={form.company}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="inquiry"
          placeholder="Product Inquiry"
          value={form.inquiry}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="4"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
      <div className="mt-6 text-center text-gray-600">
        <p>Email: info@yourcompany.com</p>
        <p>Phone: +91-12345-67890</p>
        <p>Address: [City, State, Country]</p>
      </div>
    </div>
  );
}
