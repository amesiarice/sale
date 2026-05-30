import Link from "next/link";
// import { Download } from "../../public/";

export default function Home() {
  const stats = [
    { value: "20+", label: "Countries Exported To" },
    { value: "4", label: "Premium SKU Lines" },
    { value: "24/7", label: "Service & Support" },
  ];

  const grainCards = [
    {
      id: "ls",
      title: "LS — Lot Sale",
      subtitle: "थोक / लॉट में बिक्री",
      description:
        "LS matlab Lot Sale — jab aap poori lot ya bade quantity mein basmati khareedte hain. Distributors, exporters, hotels aur wholesale buyers ke liye yeh model best hai. Saifco LS mein fixed lot size, competitive rate, saaf grading aur time par delivery milti hai.",
      tagline: "बड़े ऑर्डर और थोक खरीद के लिए",
      image: "/download.jpg",
      reverse: false,
    },
    {
      id: "lp",
      title: "LP — Lot Purchase",
      subtitle: "लॉट में खरीदारी",
      description:
        "LP matlab Lot Purchase — ek hi lot mein alag-alag SKU ya variant select karke bulk mein order dena. Retailers aur dealers jo ek saath zyada maatra mein stock lena chahte hain, unke liye yeh system aasan aur clear hai.",
      tagline: "डीलर और रिटेलर के लिए आसान लॉट ऑर्डर",
      image: "/lotPurchase.jpg",
      reverse: true,
    },
    {
      id: "cp",
      title: "CP — Consumer Pack",
      subtitle: "छोटी पैकिंग — घर और दुकान के लिए",
      description:
        "CP matlab Consumer Pack — chhoti aur ready-to-sell packing jaise 1 kg, 5 kg wagairah. Saifco CP mein achhi printing, saaf packing aur har pack par same quality guarantee — dukaan aur household buyers dono ke liye.",
      tagline: "रिटेल और घरेलू उपयोग के लिए तैयार पैक",
      image: "/Consumer Pack.webp",
      reverse: false,
    },
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
      
      </div>

      <section className="max-w-5xl w-full mx-auto mt-16">
  {grainCards.map((card) => (
    <div
      key={card.id}
      className={`flex flex-col md:flex-row gap-8 items-center mb-12 p-6 rounded-xl border bg-white/50 ${
        card.reverse ? "md:flex-row-reverse" : ""
      }`}
      style={{ borderColor: "var(--color-gold-200)" }}
    >
      <div className="w-full md:w-1/2">
        <img src={card.image} alt={card.title} className="rounded-lg w-full object-cover" />
      </div>
      <div className="w-full md:w-1/2 text-left">
        <h2>{card.title}</h2>
        <p className="text-sm opacity-80">{card.subtitle}</p>
        <p className="mt-3">{card.description}</p>
        <p className="mt-2 text-sm font-semibold" style={{ color: "var(--color-gold-500)" }}>
          {card.tagline}
        </p>
      </div>
    </div>
  ))}
</section>

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
