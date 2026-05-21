"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Sidebar({
  skuLines = [],
  activeSkuId,
  activeVariantId,
  onSkuSelect,
  onVariantSelect,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";

      const timer = setTimeout(() => {
        setMounted(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [mobileOpen]);

  if (!skuLines.length) return null;

  const SidebarContent = () => (
    <>
      <p
        className="text-[10px] tracking-widest font-semibold mb-3"
        style={{ color: "var(--color-gold-400)" }}
      >
        SKU LINES
      </p>

      {skuLines.map((sku) => {
        const isActive = sku.id === activeSkuId;

        return (
          <div key={sku.id} className="mb-2">
            <button
              onClick={() => {
                onSkuSelect?.(sku.id);

                if (sku.variants?.length > 0) {
                  onVariantSelect?.(sku.variants[0].id);
                }

                setMobileOpen(false);
              }}
              className="
                w-full 
                text-left 
                rounded-xl 
                px-3 
                py-3 
                transition-all 
                duration-300
                hover:scale-[1.02]
                active:scale-[0.98]
              "
              style={{
                backgroundColor: isActive
                  ? "var(--color-gold-500)"
                  : "rgba(255,255,255,0.05)",
                border: isActive
                  ? "none"
                  : "0.5px solid rgba(200,146,42,0.3)",
                color: isActive ? "#fff" : "var(--color-gold-50)",
              }}
            >
              <p
                className="text-sm font-medium"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {sku.icon || "⭐"} {sku.name}
              </p>
            </button>

            {/* Variants Animation */}
            <div
              className={`
                overflow-hidden
                transition-all
                duration-300
                ease-in-out
                ${
                  isActive
                    ? "max-h-96 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              {sku.variants?.length > 0 && (
                <div
                  className="ml-3 pl-3 flex flex-col gap-1"
                  style={{
                    borderLeft:
                      "2px solid var(--color-gold-500)",
                  }}
                >
                  {sku.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => {
                        onVariantSelect?.(variant.id);
                        setMobileOpen(false);
                      }}
                      className="
                        text-left 
                        text-xs 
                        px-2 
                        py-2 
                        rounded-md
                        transition-all
                        duration-200
                        hover:translate-x-1
                      "
                      style={{
                        backgroundColor:
                          variant.id === activeVariantId
                            ? "rgba(200,146,42,0.18)"
                            : "transparent",
                        color:
                          variant.id === activeVariantId
                            ? "var(--color-gold-400)"
                            : "rgba(168,138,80,0.7)",
                      }}
                    >
                      → {variant.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div
        className="
          md:hidden 
          sticky 
          top-0 
          z-40 
          backdrop-blur-md
          border-b
          px-3 
          py-3
        "
        style={{
          backgroundColor: "rgba(255,255,255,0.85)",
          borderColor: "rgba(0,0,0,0.05)",
        }}
      >
        <button
          onClick={() => setMobileOpen(true)}
          className="
            flex 
            items-center 
            gap-2 
            px-4 
            py-2.5 
            rounded-xl 
            text-white
            transition-all
            duration-300
            active:scale-95
            shadow-md
          "
          style={{
            backgroundColor: "var(--color-gold-500)",
          }}
        >
          <Menu size={20} />
          <span className="text-sm font-medium">
            Browse Products
          </span>
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {mounted && (
        <div
          className={`
            fixed 
            inset-0 
            z-50 
            md:hidden
            transition-opacity
            duration-300
            ${
              mobileOpen
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }
          `}
        >
          {/* Overlay */}
          <div
            onClick={() => setMobileOpen(false)}
            className="
              absolute 
              inset-0 
              bg-black/50
              backdrop-blur-sm
              transition-opacity
              duration-300
            "
          />

          {/* Drawer */}
          <aside
            className={`
              absolute
              top-0
              left-0
              w-full
              max-h-[90vh]
              overflow-y-auto
              rounded-b-3xl
              shadow-2xl
              transition-all
              duration-300
              ease-out
              ${
                mobileOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0"
              }
            `}
            style={{
              backgroundColor: "var(--color-gold-800)",
            }}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 backdrop-blur-md bg-black/10">
              <div className="flex justify-between items-center p-4">
                <h2 className="text-white font-semibold text-lg">
                  Product Categories
                </h2>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="
                    text-white
                    p-2
                    rounded-full
                    transition-all
                    duration-200
                    hover:bg-white/10
                    active:scale-90
                  "
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 pt-2">
              <SidebarContent />

              <p
                className="mt-5 pt-4 text-[10px] leading-relaxed"
                style={{
                  borderTop:
                    "0.5px solid rgba(200,146,42,0.25)",
                  color: "var(--color-gold-400)",
                  opacity: 0.7,
                }}
              >
                Click SKU line → expand variants → open
                details.
              </p>
            </div>
          </aside>
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <aside
        className="
          hidden 
          md:flex 
          w-56 
          lg:w-64
          shrink-0 
          p-4 
          flex-col 
          gap-1 
          overflow-y-auto 
          sticky 
          top-0 
          left-0
          h-screen
        "
        style={{
          backgroundColor: "var(--color-gold-800)",
        }}
      >
        <SidebarContent />

        <p
          className="mt-4 pt-3 text-[10px] leading-relaxed"
          style={{
            borderTop:
              "0.5px solid rgba(200,146,42,0.25)",
            color: "var(--color-gold-400)",
            opacity: 0.6,
          }}
        >
          Click SKU line → expand variants → open details.
        </p>
      </aside>
    </>
  );
}