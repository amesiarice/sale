"use client";

import Navlink from "./Navlink"
import { useCart } from "@/app/context/CartContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";


const navlinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  // { label: "Order Form", href: "/orderForm" },
  { label: "Contact", href: "/contact" },
  { label: "Cart", href: "/cart" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const { cartItems, cartPulse } = useCart();

  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`px-6 flex items-center justify-between sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "py-2 backdrop-blur-md bg-[--color-gold-900]/90 shadow-lg" : "py-3"
        }`}
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
            className={`relative text-sm transition-colors ${
              label === "Cart" && cartPulse
                ? "ring-2 ring-[--color-gold-500] ring-offset-2 ring-offset-[--color-gold-900] rounded-md px-1 -mx-1"
                : ""
            }`}
            style={{
              color: "var(--color-gold-400)",
              opacity: label === "Products" ? 1 : 0.6,
            }}
          >
            <span>{label}</span>

            {/* Cart Count */}
            {label === "Cart" &&
              totalCartItems > 0 && (
                <motion.span
                  className="
            absolute
            -top-2
            -right-4
            min-w-[20px]
            h-5
            px-1
            rounded-full
            flex
            items-center
            justify-center
            text-[10px]
            font-bold
            text-white
          "
                  style={{
                    backgroundColor:
                      "var(--color-gold-500)",
                  }}
                >
                  {totalCartItems}
                </motion.span>
              )}
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
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full flex flex-col gap-1 px-6 py-4 md:hidden border-t overflow-hidden"
            style={{ backgroundColor: "var(--color-gold-900)", borderColor: "var(--color-gold-800)" }}
          >
            {navlinks.map(({ label, href }) => (
              <Navlink
                key={label}
                href={href}
                className={`relative text-sm transition-colors ${
                  label === "Cart" && cartPulse
                    ? "ring-2 ring-[--color-gold-500] ring-offset-2 ring-offset-[--color-gold-900] rounded-md px-1 -mx-1"
                    : ""
                }`}
                style={{
                  color: "var(--color-gold-400)",
                }}
                onClick={() => setMenuOpen(false)}
              >
                <span>{label}</span>

                {label === "Cart" &&
                  totalCartItems > 0 && (
                    <motion.span
                    initial={{ scale: 0}}
                    animate={{ scale: 1 }}
                      className="
            min-w-[22px]
            h-5
            px-1
            rounded-full
            flex
            items-center
            justify-center
            text-[10px]
            font-bold
            text-white
          "
                      style={{
                        backgroundColor:
                          "var(--color-gold-500)",
                      }}
                    >
                      {totalCartItems}
                    </motion.span>
                  )}
              </Navlink>
            ))}

          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
