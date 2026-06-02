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