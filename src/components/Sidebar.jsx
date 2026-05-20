"use client";

export default function Sidebar({
  skuLines = [],
  activeSkuId,
  activeVariantId,
  onSkuSelect,
  onVariantSelect,
}) {
  // If no data is available, show nothing
  if (!skuLines.length) {
    return (
      <aside
        className="w-52 shrink-0 p-4"
        style={{ backgroundColor: "var(--color-gold-800)" }}
      >
        <p
          className="text-xs"
          style={{ color: "var(--color-gold-400)" }}
        >
          No products available.
        </p>
      </aside>
    );
  }

  return (
    <aside
      className="w-52 shrink-0 p-4 flex flex-col gap-1 overflow-y-auto sticky top-0 left-0"
      style={{ backgroundColor: "var(--color-gold-800)" }}
    >
      <p
        className="text-[10px] tracking-widest font-semibold mb-3"
        style={{ color: "var(--color-gold-400)" }}
      >
        SKU LINES
      </p>

      {skuLines.map((sku) => {
        const isActive = sku.id === activeSkuId;

        return (
          <div key={sku.id} className="mb-1">
            {/* SKU Line Button */}
            <button
              onClick={() => {
                onSkuSelect?.(sku.id);

                // Select first variant automatically
                if (sku.variants?.length > 0) {
                  onVariantSelect?.(sku.variants[0].id);
                }
              }}
              className="w-full text-left rounded-lg px-3 py-2.5 transition-all"
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

              {/* <p className="text-[10px] mt-0.5 opacity-70">
                {sku.variants?.map((v) => v.name).join(" · ")}
              </p> */}
            </button>

            {/* Expanded Variants */}
            {isActive && sku.variants?.length > 0 && (
              <div
                className="ml-3 mt-1 pl-3 flex flex-col gap-0.5"
                style={{
                  borderLeft: "2px solid var(--color-gold-500)",
                  animation: "slideIn 0.3s ease-out",
                }}
              >
                {sku.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => onVariantSelect?.(variant.id)}
                    className="text-left text-xs px-2 py-1.5 rounded transition-colors"
                    style={{
                      backgroundColor:
                        variant.id === activeVariantId
                          ? "rgba(200,146,42,0.18)"
                          : "transparent",
                      color:
                        variant.id === activeVariantId
                          ? "var(--color-gold-400)"
                          : "rgba(168,138,80,0.7)",
                      fontWeight:
                        variant.id === activeVariantId ? 600 : 400,
                    }}
                  >
                    → {variant.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}

      <p
        className="mt-4 pt-3 text-[10px] leading-relaxed"
        style={{
          borderTop: "0.5px solid rgba(200,146,42,0.25)",
          color: "var(--color-gold-400)",
          opacity: 0.6,
        }}
      >
        Click any SKU line to expand sub-variants. Click a sub-variant to
        see product details →
      </p>
    </aside>
  );
}