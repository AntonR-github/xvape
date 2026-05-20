"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "../../components/ProductCard";
import { useCart } from "../../context/CartContext";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4 shrink-0"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ProductDetail({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [selectedThumb, setSelectedThumb] = useState(2);
  const { addItem } = useCart();
  const router = useRouter();

  return (
    <section className="py-16 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ── Product info — right side in RTL ── */}
          <div className="flex flex-col items-end text-end gap-5 order-first">
            {/* Badge */}
            <span
              className="text-xs font-semibold text-white px-3 py-1 rounded-full"
              style={{ background: "#1a1a1a" }}
            >
              {product.badge}
            </span>

            {/* Name */}
            <h1 className="text-4xl font-black text-black leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="text-3xl font-black text-black">
              ₪{product.price}
            </div>

            {/* Feature list */}
            <ul className="flex flex-col gap-3 w-full">
              {product.features.map((f) => (
                <li key={f} className="flex items-center justify-end gap-2 text-sm text-black">
                  <span>{f}</span>
                  <span style={{ color: "#c6a87a" }}>
                    <CheckIcon />
                  </span>
                </li>
              ))}
            </ul>

            {/* Quantity */}
            <div className="flex flex-col items-end gap-2 w-full">
              <span className="text-sm font-medium text-black">כמות:</span>
              <div
                className="flex items-center gap-4 border rounded-full px-5 py-2.5"
                style={{ borderColor: "#d0d0d0" }}
              >
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="text-lg font-bold text-black hover:opacity-60 transition-opacity w-5 text-center"
                >
                  +
                </button>
                <span className="text-base font-semibold text-black w-5 text-center">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="text-lg font-bold text-black hover:opacity-60 transition-opacity w-5 text-center"
                >
                  −
                </button>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 w-full">
              <button
                className="w-full py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-85"
                style={{ background: "#1a1a1a" }}
                onClick={() => addItem({ id: product.id, name: product.name, price: product.price }, qty)}
              >
                הוסף לעגלה - ₪{product.price * qty}
              </button>
              <button
                className="w-full py-4 rounded-full font-bold text-sm border transition-colors hover:bg-black hover:text-white"
                style={{ borderColor: "#1a1a1a", color: "#1a1a1a" }}
                onClick={() => { addItem({ id: product.id, name: product.name, price: product.price }, qty); router.push("/checkout"); }}
              >
                קנה עכשיו
              </button>
            </div>
          </div>

          {/* ── Image gallery — left side in RTL ── */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div
              className="rounded-2xl overflow-hidden h-80 flex items-center justify-center"
              style={{ background: "#111111" }}
            >
              <span className="text-xs" style={{ color: "#eeeeee", opacity: 0.25 }}>
                תמונת מוצר
              </span>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 justify-end">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setSelectedThumb(i)}
                  className="w-16 h-16 rounded-xl border-2 transition-all flex items-center justify-center"
                  style={{
                    background: "#e4e4e4",
                    borderColor: selectedThumb === i ? "#c6a87a" : "transparent",
                  }}
                >
                  <span className="text-[10px]" style={{ color: "#aaaaaa" }}>
                    {i + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
