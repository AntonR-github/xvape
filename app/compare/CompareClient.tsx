"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "../components/ProductCard";

const featureRows = [
  { label: "מחיר",    values: ["₪649", "₪549", "₪499", "₪299"] },
  { label: "חימום",   values: ["קונבקציה", "קונבקציה", "הולכות", "חם"] },
  { label: "פעולה",   values: ["שלמי", "משולב", "טורנירות", "פשוט"] },
  { label: "סוללה",   values: ["3200mAh (מובנה)", "3200mAh (מובנה)", "2600mAh", "1000mAh"] },
  { label: "מסך",     values: ["OLED", "OLED", "LED", "ללא"] },
  { label: "אחריות",  values: ["שנה אחת", "שנה אחת", "שנה אחת", "שנה אחת"] },
];

export default function CompareClient() {
  const [selectedId, setSelectedId] = useState("fog-pro");
  const selectedIndex = products.findIndex((p) => p.id === selectedId);

  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            השוואת דגמים
          </h1>
          <p className="text-base" style={{ color: "#eeeeee", opacity: 0.5 }}>
            השוואה ממוקדת של מאידים מובילים כדי לעזור לך לבחור את המוצר המתאים עבורך
          </p>
        </div>

        {/* Product selector cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {products.map((product) => {
            const isSelected = product.id === selectedId;
            return (
              <div
                key={product.id}
                className="rounded-2xl flex flex-col items-center text-center p-5 gap-3 border-2 transition-all"
                style={{
                  background: isSelected ? "#1a1a1a" : "#111111",
                  borderColor: isSelected ? "#c6a87a" : "rgba(255,255,255,0.07)",
                }}
              >
                {/* Image placeholder */}
                <div
                  className="w-full h-28 rounded-xl flex items-center justify-center"
                  style={{ background: "#222222" }}
                >
                  <span className="text-[10px]" style={{ color: "#eeeeee", opacity: 0.2 }}>
                    תמונה
                  </span>
                </div>

                <span className="font-bold text-white text-sm">{product.name}</span>
                <span className="font-black text-white text-base">₪{product.price}</span>

                <button
                  onClick={() => setSelectedId(product.id)}
                  className="w-full py-2 rounded-full text-xs font-semibold border transition-colors"
                  style={
                    isSelected
                      ? { background: "#c6a87a", borderColor: "#c6a87a", color: "#000000" }
                      : { borderColor: "rgba(255,255,255,0.2)", color: "#eeeeee" }
                  }
                >
                  בחר מוצר
                </button>
              </div>
            );
          })}
        </div>

        {/* Comparison table */}
        <div
          className="rounded-2xl overflow-hidden border"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          {/* Table header row — product names */}
          <div
            className="grid border-b"
            style={{
              gridTemplateColumns: "1.4fr repeat(4, 1fr)",
              borderColor: "rgba(255,255,255,0.08)",
              background: "#111111",
            }}
          >
            {/* Feature column header */}
            <div
              className="px-5 py-4 text-end text-xs font-bold uppercase tracking-widest"
              style={{ color: "#eeeeee", opacity: 0.4 }}
            >
              תכונה
            </div>
            {products.map((product, i) => (
              <div
                key={product.id}
                className="px-3 py-4 text-center text-sm font-bold transition-colors"
                style={{
                  color: i === selectedIndex ? "#c6a87a" : "#ffffff",
                  background: i === selectedIndex ? "rgba(198,168,122,0.08)" : "transparent",
                }}
              >
                {product.name}
              </div>
            ))}
          </div>

          {/* Feature rows */}
          {featureRows.map((row, rowIdx) => (
            <div
              key={row.label}
              className="grid border-b last:border-b-0"
              style={{
                gridTemplateColumns: "1.4fr repeat(4, 1fr)",
                borderColor: "rgba(255,255,255,0.05)",
                background: rowIdx % 2 === 0 ? "#0d0d0d" : "#111111",
              }}
            >
              {/* Feature label */}
              <div
                className="px-5 py-4 text-end text-sm font-semibold"
                style={{ color: "#eeeeee", opacity: 0.55 }}
              >
                {row.label}
              </div>

              {/* Product values */}
              {row.values.map((val, i) => (
                <div
                  key={i}
                  className="px-3 py-4 text-center text-sm"
                  style={{
                    color: i === selectedIndex ? "#ffffff" : "#eeeeee",
                    opacity: i === selectedIndex ? 1 : 0.6,
                    background: i === selectedIndex ? "rgba(198,168,122,0.06)" : "transparent",
                  }}
                >
                  {val}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <Link
            href={`/shop/${selectedId}`}
            className="inline-flex items-center px-8 py-3.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-85 text-black"
            style={{ background: "#c6a87a" }}
          >
            עבור לדף המוצר הנבחר
          </Link>
        </div>

      </div>
    </section>
  );
}
