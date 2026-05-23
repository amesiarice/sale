//https://script.google.com/macros/s/AKfycbxwSphV62nmj7V9ZlFXulQU4zIuwQjF3CD6FZfpYssJrykdWFJqKF5HKRSBRPuJwloQ/exec

// export const skuLines = [
//   {
//     id: "uttam",
//     name: "Uttam SKU",
//     icon: "⭐",
//     variants: [
//       {
//         id: "uttam-100",
//         name: "Uttam 100",
//         skuCode: "SFC-UTM-100",
//         grade: "Premium Polished Basmati",
//         grainLength: "8.3 mm",
//         moisture: "≤13.5%",
//         broken: "<1%",
//         packSizes: "5 / 25 kg",
//         description:
//           "Uttam 100 is our top-grade fully polished long-grain basmati rice with zero sorting defects, premium aroma, and fluffy non-sticky texture — perfect for retail, hotels, and export markets.",
//         inStock: true,
//       },
//       {
//         id: "uttam-80",
//         name: "Uttam 80",
//         skuCode: "SFC-UTM-080",
//         grade: "Select Polished Basmati",
//         grainLength: "8.1 mm",
//         moisture: "≤13.5%",
//         broken: "<3%",
//         packSizes: "5 / 25 / 50 kg",
//         description:
//           "Uttam 80 offers an excellent balance of quality and value. Long-grain, aromatic basmati with minimal broken grains, ideal for wholesale distributors and food service businesses.",
//         inStock: true,
//       },
//       {
//         id: "uttam-60",
//         name: "Uttam 60",
//         skuCode: "SFC-UTM-060",
//         grade: "Standard Polished Basmati",
//         grainLength: "7.9 mm",
//         moisture: "≤14%",
//         broken: "<5%",
//         packSizes: "25 / 50 kg",
//         description:
//           "Uttam 60 is a reliable everyday basmati with consistent quality. Suitable for mid-market retail, restaurants, and institutional buyers requiring steady supply.",
//         inStock: true,
//       },
//       {
//         id: "uttam-40",
//         name: "Uttam 40",
//         skuCode: "SFC-UTM-040",
//         grade: "Economy Polished Basmati",
//         grainLength: "7.6 mm",
//         moisture: "≤14%",
//         broken: "<8%",
//         packSizes: "25 / 50 kg",
//         description:
//           "Uttam 40 is our value-grade basmati offering great aroma at competitive pricing. Best suited for bulk institutional buyers, canteens, and large-scale food production.",
//         inStock: false,
//       },
//     ],
//   },
//   {
//     id: "golden",
//     name: "Golden SKU",
//     icon: "✨",
//     variants: [
//       {
//         id: "golden-100",
//         name: "Golden 100",
//         skuCode: "SFC-GLD-100",
//         grade: "Premium Golden Sella",
//         grainLength: "8.5 mm",
//         moisture: "≤12.5%",
//         broken: "<1%",
//         packSizes: "5 / 20 / 25 kg",
//         description:
//           "Golden 100 is our signature parboiled golden sella basmati — steam-processed for extra firmness, enhanced nutrition, and a rich golden hue. Exceptional for biryani and pilaf.",
//         inStock: true,
//       },
//       {
//         id: "golden-80",
//         name: "Golden 80",
//         skuCode: "SFC-GLD-080",
//         grade: "Select Golden Sella",
//         grainLength: "8.2 mm",
//         moisture: "≤13%",
//         broken: "<3%",
//         packSizes: "25 / 50 kg",
//         description:
//           "Golden 80 delivers the golden sella experience in a high-volume, cost-effective format. Non-sticky, elongates beautifully on cooking — preferred by hotels and catering services.",
//         inStock: true,
//       },
//       {
//         id: "golden-60",
//         name: "Golden 60",
//         skuCode: "SFC-GLD-060",
//         grade: "Standard Golden Sella",
//         grainLength: "8.0 mm",
//         moisture: "≤13.5%",
//         broken: "<5%",
//         packSizes: "25 / 50 kg",
//         description:
//           "Golden 60 is the economy entry in our golden sella line. Robust, parboiled grain with good aroma and texture — suitable for large-scale distribution and export markets.",
//         inStock: true,
//       },
//     ],
//   },
//   {
//     id: "silver",
//     name: "Silver SKU",
//     icon: "🥈",
//     variants: [
//       {
//         id: "silver-100",
//         name: "Silver 100",
//         skuCode: "SFC-SLV-100",
//         grade: "Premium Steam Basmati",
//         grainLength: "8.4 mm",
//         moisture: "≤13%",
//         broken: "<1%",
//         packSizes: "5 / 25 kg",
//         description:
//           "Silver 100 is our top-tier steam basmati — white, fluffy, and aromatic. Prepared through a precise steam process that retains maximum grain integrity and fragrance.",
//         inStock: true,
//       },
//       {
//         id: "silver-80",
//         name: "Silver 80",
//         skuCode: "SFC-SLV-080",
//         grade: "Select Steam Basmati",
//         grainLength: "8.1 mm",
//         moisture: "≤13.5%",
//         broken: "<3%",
//         packSizes: "25 / 50 kg",
//         description:
//           "Silver 80 offers premium steam-processed basmati at a wholesale-friendly price point. Consistent quality, strong aroma, and reliable grain length — trusted by exporters across the Gulf.",
//         inStock: true,
//       },
//       {
//         id: "silver-60",
//         name: "Silver 60",
//         skuCode: "SFC-SLV-060",
//         grade: "Standard Steam Basmati",
//         grainLength: "7.8 mm",
//         moisture: "≤14%",
//         broken: "<5%",
//         packSizes: "25 / 50 kg",
//         description:
//           "Silver 60 is our value steam basmati — well-processed, aromatic, and suited for mass-market retail and institutional supply chains that need dependable quality at scale.",
//         inStock: false,
//       },
//     ],
//   },
//   {
//     id: "premium",
//     name: "Premium SKU",
//     icon: "💎",
//     variants: [
//       {
//         id: "premium-100",
//         name: "Premium 100",
//         skuCode: "SFC-PRM-100",
//         grade: "Ultra Premium Aged Basmati",
//         grainLength: "8.8 mm",
//         moisture: "≤12%",
//         broken: "<0.5%",
//         packSizes: "2 / 5 kg",
//         description:
//           "Premium 100 is the crown jewel of Saifco — aged 2-year basmati rice with unmatched aroma, extraordinary elongation (up to 2×), and zero defects. Reserved for luxury retail and fine dining establishments.",
//         inStock: true,
//       },
//       {
//         id: "premium-80",
//         name: "Premium 80",
//         skuCode: "SFC-PRM-080",
//         grade: "Super Premium Aged Basmati",
//         grainLength: "8.6 mm",
//         moisture: "≤12.5%",
//         broken: "<1%",
//         packSizes: "5 / 10 kg",
//         description:
//           "Premium 80 brings aged basmati excellence to a broader market. Hand-sorted, twice-milled, and aromatic — the preferred choice of discerning buyers and premium export markets worldwide.",
//         inStock: true,
//       },
//     ],
//   },
// ];

// src/data/sku-lines.js

// This file fetches data from your Google Apps Script API and exports it
// in the same format as your old `export const skuLines = [...]` structure.

const API_URL =
  "https://script.google.com/macros/s/AKfycbwl5SUoVZKyCyGcgalJvVPK2kHEkXz0Y2P9V0DsOBh0QcvHX8dwzbrc1Zd1pk141AcX/exec";

// Optional fallback if API fails
export const skuLines = [];

/**
 * Get SKU lines from Google Sheet API.
 * Returns data in exactly the same structure as:
 * [
 *   {
 *     id,
 *     name,
 *     icon,
 *     variants: [
 *       {
 *         id,
 *         name,
 *         skuCode,
 *         grade,
 *         grainLength,
 *         moisture,
 *         broken,
 *         packSizes,
 *         description,
 *         inStock,
 *         ...
 *       }
 *     ]
 *   }
 * ]
 */
export async function getSkuLines() {
  try {
    const response = await fetch(API_URL, {
      method: "GET",

      // Cache the response for 1 minute.
      // First request fetches from Google Apps Script.
      // Subsequent page navigations use cached data instantly.
      // Any changes in Google Sheet will appear automatically
      // after the cache is refreshed.
      next: {
        revalidate: 10,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    // Ensure valid array
    if (!Array.isArray(data)) {
      console.error("API did not return an array:", data);
      return [];
    }

    return data;
  } catch (error) {
    console.error("Failed to fetch SKU lines:", error);
    return skuLines; // fallback
  }
}