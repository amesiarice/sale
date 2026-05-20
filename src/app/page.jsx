import Link from "next/link";

export default function Home() {
  const stats = [
    { value: "20+", label: "Countries Exported To" },
    { value: "4", label: "Premium SKU Lines" },
    { value: "24/7", label: "Service & Support" },
  ];

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center bg-gradient-to-b from-[--color-gold-100] to-[--color-gold-50]">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-[--color-gold-500]/10 border border-[--color-gold-500]/30 rounded-full px-4 py-1.5 mb-6">
        <span className="text-sm">🌾</span>
        <span
          className="text-xs font-semibold tracking-widest"
          style={{ color: "var(--color-gold-500)" }}
        >
          PREMIUM BASMATI RICE
        </span>
      </div>

      {/* Headline */}
      <h1
        className="text-4xl sm:text-5xl font-semibold max-w-2xl leading-tight mb-4"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-gold-900)" }}
      >
        Saifco Basmati Rice
      </h1>

      <p
        className="text-base max-w-xl leading-relaxed mb-8"
        style={{ color: "var(--color-gold-700)" }}
      >
        Manufacturer, Exporter &amp; Supplier of the finest Punjab-grown basmati
        rice. Trusted by 500+ buyers across 20+ countries. ISO Certified.
        24-hour service.
      </p>

      {/* CTAs */}
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/products"
          className="text-white text-sm font-semibold px-7 py-3 rounded-md transition-colors"
          style={{ backgroundColor: "var(--color-gold-500)" }}
        >
          Browse SKU Catalogue →
        </Link>
        {/* <Link
          href="/products"
          className="text-sm font-semibold px-7 py-3 rounded-md border transition-colors"
          style={{
            borderColor: "var(--color-gold-500)",
            color: "var(--color-gold-500)",
          }}
        >
          Get A Quote
        </Link> */}
      </div>

      {/* Stats */}
      <div
        className="grid grid-cols-3 gap-8 mt-16 pt-10 max-w-lg w-full border-t"
        style={{ borderColor: "var(--color-gold-200)" }}
      >
        {stats.map(({ value, label }) => (
          <div key={label} className="text-center">
            <p
              className="text-2xl font-semibold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-gold-500)" }}
            >
              {value}
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--color-gold-400)" }}>
              {label}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
