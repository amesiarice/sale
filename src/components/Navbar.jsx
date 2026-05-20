"use client";


import { useState } from "react";
import Navlink from "./Navlink"


const navlinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Order Form", href: "/orderForm" },
  { label: "Contact", href: "/contact" },
  // { label: "Login", href: "/login" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="px-6 py-3 flex items-center justify-between sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "var(--color-gold-900)",
        borderColor: "var(--color-gold-800)",
      }}
    >
      {/* Logo */}
      <Navlink href="/" className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-md"
          style={{ backgroundColor: "var(--color-gold-500)" }}
        >
          🌾
        </div>
        <div>
          <p
            className="font-semibold text-base leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-gold-400)" }}
          >
            Saifco Basmati Rice
          </p>
          <p className="text-[10px] tracking-widest" style={{ color: "var(--color-gold-400)", opacity: 0.6 }}>
            MANUFACTURER · EXPORTER · SUPPLIER
          </p>
        </div>
      </Navlink>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-6">
        {navlinks.map(({ label, href }) => (
          <Navlink
            key={label}
            href={href}
            className="text-sm transition-colors"
            style={{ color: "var(--color-gold-400)", opacity: label === "Products" ? 1 : 0.6 }}
          >
            {label}
          </Navlink>
        ))}
        {/* <Navlink
          href="/products"
          className="text-white text-xs font-semibold px-4 py-2 rounded-md transition-colors"
          style={{ backgroundColor: "var(--color-gold-500)" }}
        >
          Get A Quote
        </Navlink> */}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-2xl"
        style={{ color: "var(--color-gold-400)" }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full flex flex-col gap-1 px-6 py-4 md:hidden border-t"
          style={{
            backgroundColor: "var(--color-gold-900)",
            borderColor: "var(--color-gold-800)",
          }}
        >
          {navlinks.map(({ label, href }) => (
            <Navlink
              key={label}
              href={href}
              className="text-sm py-2"
              style={{ color: "var(--color-gold-400)" }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Navlink>
          ))}
          {/* <Navlink
            href="/products"
            className="text-white text-sm font-semibold px-4 py-2 rounded-md mt-2 text-center"
            style={{ backgroundColor: "var(--color-gold-500)" }}
            onClick={() => setMenuOpen(false)}
          >
            Get A Quote
          </Navlink> */}
        </div>
      )}
    </nav>
  );
}
