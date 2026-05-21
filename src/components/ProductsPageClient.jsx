"use client";

import { useEffect, useState } from "react";
import { getSkuLines } from "@/data/skus";
import Sidebar from "@/components/Sidebar";
import ProductDetail from "@/components/ProductDetail";
// import ContactSection from "@/components/ContactSection";

export default function ProductsPageClient() {
  const [skuLines, setSkuLines] = useState([]);
  const [activeSkuId, setActiveSkuId] = useState(null);
  const [activeVariantId, setActiveVariantId] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from Google Sheets API
  useEffect(() => {
    async function loadData() {
      try {
        const data = await getSkuLines();

        if (Array.isArray(data) && data.length > 0) {
          setSkuLines(data);
          setActiveSkuId(data[0].id);
          setActiveVariantId(data[0].variants?.[0]?.id || null);
        }
      } catch (error) {
        console.error("Failed to load SKU data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center px-4">
        <div className="text-center">
          <div
            className="w-10 h-10 mx-auto mb-4 rounded-full border-4 border-t-transparent animate-spin"
            style={{
              borderColor: "var(--color-gold-400)",
              borderTopColor: "transparent",
            }}
          />

          <p
            className="text-sm sm:text-base"
            style={{ color: "var(--color-gold-700)" }}
          >
            Loading products...
          </p>
        </div>
      </div>
    );
  }

  // No Data State
  if (!skuLines.length) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center px-4">
        <p
          className="text-center text-sm sm:text-base"
          style={{ color: "var(--color-gold-700)" }}
        >
          No products available.
        </p>
      </div>
    );
  }

  // Active SKU + Variant
  const activeSku =
    skuLines.find((s) => s.id === activeSkuId) || skuLines[0];

  const activeVariant =
    activeSku?.variants?.find(
      (v) => v.id === activeVariantId
    ) || activeSku?.variants?.[0];

  // SKU Selection Handler
  const handleSkuSelect = (skuId) => {
    setActiveSkuId(skuId);

    const sku = skuLines.find((s) => s.id === skuId);

    if (sku?.variants?.length) {
      setActiveVariantId(sku.variants[0].id);
    } else {
      setActiveVariantId(null);
    }
  };

  // Safety Check
  if (!activeSku || !activeVariant) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center px-4">
        <p
          className="text-center text-sm sm:text-base"
          style={{ color: "var(--color-gold-700)" }}
        >
          Product data is incomplete.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Main Layout */}
      <div
        className="
          flex 
          flex-col 
          md:flex-row 
          flex-1 
          min-h-screen
          bg-white
        "
      >
        {/* Sidebar */}
        <Sidebar
          skuLines={skuLines}
          activeSkuId={activeSkuId}
          activeVariantId={activeVariantId}
          onSkuSelect={handleSkuSelect}
          onVariantSelect={setActiveVariantId}
        />

        {/* Product Content */}
        <main
          className="
            flex-1
            w-full
            overflow-y-auto
          "
        >
          <div
            className="
              max-w-7xl
              mx-auto
              w-full
            "
          >
            <ProductDetail
              key={activeVariantId}
              skuLine={activeSku}
              variant={activeVariant}
              onVariantSelect={setActiveVariantId}
            />
          </div>
        </main>
      </div>

      {/* <ContactSection /> */}
    </>
  );
}