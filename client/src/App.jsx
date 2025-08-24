import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import ExportQuality from "./pages/ExportQuality.jsx";
import Sustainability from "./pages/Sustainability.jsx";
import Clients from "./pages/Clients.jsx";
import Contact from "./pages/Contact.jsx";
import Manufacturing from "./pages/Manufacturing.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/export-quality" element={<ExportQuality />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
