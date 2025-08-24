import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/export-quality", label: "Export & Quality" },
  { to: "/manufacturing", label: "Manufacturing" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/clients", label: "Clients" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold tracking-tight">
            {/* Replace with logo if you have one */}
            YourCompany
          </Link>
          <nav className="hidden md:flex gap-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-medium hover:text-gray-900 ${isActive ? "text-gray-900" : "text-gray-600"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <button
            className="md:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-gray-800 mb-1" />
            <span className="block w-6 h-0.5 bg-gray-800 mb-1" />
            <span className="block w-6 h-0.5 bg-gray-800" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block text-sm text-gray-700"
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
