"use client";

export default function ProductDetail({
  skuLine,
  variant,
  onVariantSelect,
}) {
  const specs = [
    { label: "USP", value: variant.grainLength },
    { label: "Packing Type", value: variant.moisture },
    { label: "Primary Use", value: variant.primaryUse },
    { label: "Pack Sizes", value: variant.packSizes },
  ];

  return (
    <div
      className="p-4 sm:p-5 md:p-6 flex flex-col gap-4 sm:gap-5"
      style={{
        backgroundColor: "#fff",
        animation: "fadeIn 0.3s ease-in-out",
      }}
    >
      {/* Breadcrumb */}
      <p
        className="text-[10px] sm:text-xs break-words leading-relaxed"
        style={{ color: "var(--color-gold-400)" }}
      >
        Products › {skuLine.name} ›{" "}
        <span
          style={{
            color: "var(--color-gold-500)",
            fontWeight: 600,
          }}
        >
          {variant.name}
        </span>
      </p>

      {/* Title row */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4">
        <div className="min-w-0">
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-semibold break-words"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-gold-900)",
            }}
          >
            {variant.name}
          </h2>

          <p
            className="text-[10px] sm:text-xs mt-1 leading-relaxed break-words"
            style={{ color: "var(--color-gold-400)" }}
          >
            SKU Code: {variant.skuCode}
            <span className="hidden sm:inline">
              {" "}
              &nbsp;|&nbsp; {variant.grade}
            </span>

            <span className="sm:hidden block mt-1">
              Grade: {variant.grade}
            </span>
          </p>
        </div>

        <span
          className="text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-md w-fit shrink-0"
          style={{
            backgroundColor: variant.inStock
              ? "#f0fdf4"
              : "#fef2f2",
            color: variant.inStock ? "#166534" : "#dc2626",
          }}
        >
          {variant.inStock ? "✓ In Stock" : "✕ Out of Stock"}
        </span>
      </div>

      {/* Spec cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
        {specs.map(({ label, value }) => (
          <div
            key={label}
            className="rounded-lg p-3 sm:p-4 text-center border min-h-[90px] flex flex-col justify-center"
            style={{
              backgroundColor: "var(--color-gold-100)",
              borderColor: "var(--color-gold-200)",
            }}
          >
            <p
              className="text-[10px] sm:text-xs mb-1"
              style={{ color: "var(--color-gold-400)" }}
            >
              {label}
            </p>

            <p
              className="text-sm sm:text-base md:text-lg font-semibold break-words"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-gold-900)",
              }}
            >
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Description */}
      <div
        className="px-3 sm:px-4 py-3 rounded-r-md"
        style={{
          backgroundColor: "var(--color-gold-50)",
          borderLeft: "4px solid var(--color-gold-500)",
        }}
      >
        <p
          className="text-sm sm:text-[15px] leading-relaxed"
          style={{ color: "var(--color-gold-700)" }}
        >
          {variant.description}
        </p>
      </div>

      {/* Sub-variant switcher */}
      <div>
        <p
          className="text-[10px] sm:text-[11px] tracking-widest font-semibold mb-3"
          style={{ color: "var(--color-gold-400)" }}
        >
          SWITCH SUB-VARIANT
        </p>

        <div className="flex flex-wrap gap-2">
          {skuLine.variants.map((v) => (
            <button
              key={v.id}
              onClick={() => onVariantSelect(v.id)}
              className="px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 break-words max-w-full"
              style={{
                backgroundColor:
                  v.id === variant.id
                    ? "var(--color-gold-500)"
                    : "var(--color-gold-100)",
                color:
                  v.id === variant.id
                    ? "#fff"
                    : "var(--color-gold-700)",
                border:
                  v.id === variant.id
                    ? "none"
                    : "1px solid var(--color-gold-200)",
              }}
            >
              {v.name}
            </button>
          ))}
        </div>
      </div>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        {/* Example buttons */}

        {/* 
        <button
          className="w-full sm:w-auto text-white text-sm font-semibold px-5 py-3 rounded-md transition-colors"
          style={{ backgroundColor: "var(--color-gold-500)" }}
        >
          📩 Request Quote
        </button>

        <button
          className="w-full sm:w-auto text-sm font-semibold px-5 py-3 rounded-md border transition-colors"
          style={{
            borderColor: "var(--color-gold-500)",
            color: "var(--color-gold-500)",
          }}
        >
          📄 Spec Sheet
        </button>
        */}
      </div>
    </div>
  );
}