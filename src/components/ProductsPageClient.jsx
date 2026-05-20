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

  // Show loading state while data is being fetched
  if (loading) {
    return (
      <div className="p-8 text-center">
        Loading products...
      </div>
    );
  }

  // If no data found
  if (!skuLines.length) {
    return (
      <div className="p-8 text-center">
        No products available.
      </div>
    );
  }

  // Find currently selected SKU and Variant
  const activeSku = skuLines.find((s) => s.id === activeSkuId) || skuLines[0];

  const activeVariant =
    activeSku?.variants?.find((v) => v.id === activeVariantId) ||
    activeSku?.variants?.[0];

  // Handle SKU selection
  const handleSkuSelect = (skuId) => {
    setActiveSkuId(skuId);

    const sku = skuLines.find((s) => s.id === skuId);

    if (sku?.variants?.length) {
      setActiveVariantId(sku.variants[0].id);
    } else {
      setActiveVariantId(null);
    }
  };

  // Safety check if no variants exist
  if (!activeSku || !activeVariant) {
    return (
      <div className="p-8 text-center">
        Product data is incomplete.
      </div>
    );
  }

  return (
    <>
      {/* Sidebar + Detail Panel */}
      <div
        className="flex flex-1 min-h-0"
        style={{ minHeight: "420px" }}
      >
        <Sidebar
          skuLines={skuLines}
          activeSkuId={activeSkuId}
          activeVariantId={activeVariantId}
          onSkuSelect={handleSkuSelect}
          onVariantSelect={setActiveVariantId}
        />

        <main className="flex-1 overflow-y-auto">
          <ProductDetail
            key={activeVariantId}
            skuLine={activeSku}
            variant={activeVariant}
            onVariantSelect={setActiveVariantId}
          />
        </main>
      </div>

      {/* <ContactSection /> */}
    </>
  );
}