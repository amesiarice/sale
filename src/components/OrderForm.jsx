"use client";

import { useState } from "react";

const skuOptions = [
  "Good Basmati Rice 5kg",
  "Natural Basmati Rice 10kg",
  "Premium Basmati Rice 25kg",
];

export default function OrderForm() {
  const [form, setForm] = useState({
    retailerId: "",
    skuName: skuOptions[0],
    quantity: 1,
    remarks: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          createdAt: new Date().toISOString(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit order");
      }

      alert("Order submitted successfully!");

      setForm({
        retailerId: "",
        skuName: skuOptions[0],
        quantity: 1,
        remarks: "",
      });
    } catch (error) {
      alert(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
        backgroundColor: "var(--color-gold-50)",
        borderColor: "var(--color-gold-200)",
      }}
       className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Order Form</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">
              Retailer ID
            </label>
            <input
              type="text"
              name="retailerId"
              value={form.retailerId}
              onChange={handleChange}
              required
              placeholder="Enter Retailer ID"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              SKU Name
            </label>
            <select
              name="skuName"
              value={form.skuName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {skuOptions.map((sku) => (
                <option key={sku} value={sku}>
                  {sku}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              min="1"
              value={form.quantity}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Remarks
            </label>
            <textarea
              name="remarks"
              value={form.remarks}
              onChange={handleChange}
              rows="4"
              placeholder="Optional remarks"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
          style={{
                 backgroundColor: "var(--color-gold-400)",
                 borderColor: "var(--color-gold-400)",
           }}
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Submitting..." : "Submit Order"}
          </button>
        </form>
      </div>
    </div>
  );
}