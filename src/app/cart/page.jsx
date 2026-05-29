"use client";

import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  Tag,
  Truck,
  ShieldCheck,
} from "lucide-react";

import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  // Pricing calculations
 const subtotal = cartItems.reduce(
  (total, item) =>
    total +
    Number(item.dealerPrice || 0) *
      item.quantity,
  0
);

  const discount = subtotal > 5000 ? subtotal * 0.1 : 0;

  const shipping = subtotal > 3000 ? 0 : 150;

  const total = subtotal - discount + shipping;

  return (
    <div
      className="min-h-screen px-4 py-6 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(to bottom, #fffdf8, #f8f4ea)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1
              className="text-3xl sm:text-4xl font-bold"
              style={{
                color: "var(--color-gold-800)",
              }}
            >
              Shopping Cart
            </h1>

            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Review your selected products before placing the order.
            </p>
          </div>

          <div
            className="px-5 py-3 rounded-2xl shadow-sm border bg-white flex items-center gap-3 w-fit"
            style={{
              borderColor: "var(--color-gold-200)",
            }}
          >
            <ShoppingBag
              size={20}
              style={{
                color: "var(--color-gold-500)",
              }}
            />

            <div>
              <p className="text-xs text-gray-500">
                Total Items
              </p>

              <p
                className="font-bold text-lg"
                style={{
                  color: "var(--color-gold-700)",
                }}
              >
                {cartItems.length}
              </p>
            </div>
          </div>
        </div>

        {!cartItems.length ? (
          <div
            className="bg-white rounded-3xl p-10 text-center border shadow-sm"
            style={{
              borderColor: "var(--color-gold-200)",
            }}
          >
            <div
              className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-5"
              style={{
                backgroundColor:
                  "var(--color-gold-100)",
              }}
            >
              <ShoppingBag
                size={34}
                style={{
                  color: "var(--color-gold-500)",
                }}
              />
            </div>

            <h2
              className="text-2xl font-bold mb-2"
              style={{
                color: "var(--color-gold-700)",
              }}
            >
              Your Cart is Empty
            </h2>

            <p className="text-gray-500">
              Add products to continue shopping.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="xl:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border shadow-sm p-5 sm:p-6 transition-all duration-300 hover:shadow-lg"
                  style={{
                    borderColor:
                      "var(--color-gold-200)",
                  }}
                >
                  <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">
                    {/* Product */}
                    <div className="flex gap-4 items-start">
                      {/* Product Image Placeholder */}
                      <div
                        className="w-24 h-24 rounded-2xl shrink-0 flex items-center justify-center text-3xl"
                        style={{
                          backgroundColor:
                            "var(--color-gold-100)",
                        }}
                      >
                        🌾
                      </div>

                      <div>
                        <h2
                          className="text-lg sm:text-xl font-bold"
                          style={{
                            color:
                              "var(--color-gold-800)",
                          }}
                        >
                          {item.name}
                        </h2>

                        <div className="mt-2 space-y-1 text-sm text-gray-500">
                          <p>
                            SKU: {item.skuCode || "N/A"}
                          </p>

                          <p>
                            Grade: {item.grade || "Premium"}
                          </p>

                          <p>
                            Pack Size: {item.packSizes || "25kg"}
                          </p>
                        </div>

                        <div className="mt-3 flex items-center gap-3 flex-wrap">
                          <span
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{
                              backgroundColor:
                                "#f0fdf4",
                              color: "#166534",
                            }}
                          >
                            In Stock
                          </span>

                          <span className="text-sm text-gray-500">
                            Fast Delivery Available
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Price + Actions */}
                    <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-5">
                      <div className="text-left sm:text-center lg:text-right">
                        <p className="text-sm text-gray-400 line-through">
                          ₹{Number(item.dealerPrice || 0) + 200}
                        </p>

                        <h3
                          className="text-2xl font-bold"
                          style={{
                            color:
                              "var(--color-gold-700)",
                          }}
                        >
                          ₹
                          {Number(item.dealerPrice || 0) * item.quantity}
                        </h3>

                        <p className="text-xs text-green-600 mt-1">
                          {item.skuId}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 flex-wrap">
                        {/* Quantity */}
                        <div
                          className="flex items-center rounded-2xl border overflow-hidden"
                          style={{
                            borderColor:
                              "var(--color-gold-200)",
                          }}
                        >
                          <button
                            onClick={() =>
                              decreaseQty(item.id)
                            }
                            className="w-11 h-11 flex items-center justify-center hover:bg-gray-50 transition"
                          >
                            <Minus size={16} />
                          </button>

                          <div className="w-12 text-center font-semibold">
                            {item.quantity}
                          </div>

                          <button
                            onClick={() =>
                              increaseQty(item.id)
                            }
                            className="w-11 h-11 flex items-center justify-center hover:bg-gray-50 transition"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() =>
                            removeFromCart(item.id)
                          }
                          className="w-11 h-11 rounded-2xl flex items-center justify-center transition hover:scale-105"
                          style={{
                            backgroundColor:
                              "#fef2f2",
                            color: "#dc2626",
                          }}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div>
              <div
                className="bg-white rounded-3xl border shadow-sm p-6 sticky top-24"
                style={{
                  borderColor:
                    "var(--color-gold-200)",
                }}
              >
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{
                    color: "var(--color-gold-800)",
                  }}
                >
                  Order Summary
                </h2>

                {/* Coupon */}
                {/* <div
                  className="rounded-2xl border p-4 mb-6"
                  style={{
                    borderColor:
                      "var(--color-gold-200)",
                    backgroundColor:
                      "var(--color-gold-50)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Tag
                      size={16}
                      style={{
                        color:
                          "var(--color-gold-500)",
                      }}
                    />

                    <p className="font-medium text-sm">
                      Coupon Applied
                    </p>
                  </div>

                  <p className="text-sm text-green-600">
                    SAVE10 applied successfully.
                  </p>
                </div> */}

                {/* Pricing */}
                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">
                      Subtotal
                    </span>

                    <span className="font-medium">
                      ₹{subtotal}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">
                      Discount
                    </span>

                    <span className="text-green-600 font-medium">
                      -₹{discount}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">
                      Shipping
                    </span>

                    <span className="font-medium">
                      {shipping === 0
                        ? "Free"
                        : `₹${shipping}`}
                    </span>
                  </div>

                  <div
                    className="pt-4 border-t flex items-center justify-between"
                    style={{
                      borderColor:
                        "var(--color-gold-200)",
                    }}
                  >
                    <span className="text-lg font-bold">
                      Total
                    </span>

                    <span
                      className="text-2xl font-bold"
                      style={{
                        color:
                          "var(--color-gold-700)",
                      }}
                    >
                      ₹{total}
                    </span>
                  </div>
                </div>

                {/* Checkout */}
                <button
                  className="w-full mt-6 py-4 rounded-2xl text-white font-semibold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                  style={{
                    backgroundColor:
                      "var(--color-gold-500)",
                  }}
                >
                  Proceed To Checkout
                </button>

                {/* Features */}
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Truck size={18} />
                    Free delivery on orders above ₹3000
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <ShieldCheck size={18} />
                    100% secure order processing
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}