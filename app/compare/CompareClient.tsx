"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "../components/ProductCard";

// Max features across all products
const maxFeatures = Math.max(...products.map((p) => p.features.length));

export default function CompareClient() {
  const [selectedId, setSelectedId] = useState("fog-pro");
  const selectedIndex = products.findIndex((p) => p.id === selectedId);

  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="site-container">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="title-h2 mb-4">השוואת דגמים</h1>
          <p className="paragraph">
            השוואה ממוקדת של מאידים מובילים כדי לעזור לך לבחור את המוצר המתאים עבורך
          </p>
        </div>

        {/* Unified comparison table */}
        <div
          className="rounded-2xl overflow-hidden border"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          {/* Row: product images */}
          <div className="grid grid-cols-4">
            {products.map((product, i) => {
              const isSelected = i === selectedIndex;
              return (
                <div
                  key={product.id}
                  className="p-4 border-b border-e last:border-e-0"
                  style={{
                    borderColor: "rgba(255,255,255,0.07)",
                    borderTopWidth: isSelected ? "2px" : "1px",
                    borderTopColor: isSelected ? "#c6a87a" : "rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="relative w-full rounded-xl overflow-hidden" style={{ height: "280px" }}>
                    <Image
                      src="/assets/img/product-test-img.jpeg"
                      alt={product.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Row: name + price */}
          <div className="grid grid-cols-4 border-b" style={{ borderColor: "rgba(255,255,255,0.07)", background: "#111111" }}>
            {products.map((product, i) => {
              const isSelected = i === selectedIndex;
              return (
                <div
                  key={product.id}
                  className="px-4 py-4 text-start border-e last:border-e-0 flex flex-col gap-1"
                  style={{
                    borderColor: "rgba(255,255,255,0.07)",
                    background: isSelected ? "rgba(198,168,122,0.06)" : "transparent",
                  }}
                >
                  <span className="font-regular text-3xl" style={{ color: isSelected ? "#c6a87a" : "#ffffff" }}>
                    {product.name}
                  </span>
                  <span className="font-regular text-3xl text-white">₪{product.price}</span>
                </div>
              );
            })}
          </div>

          {/* Row: select button */}
          <div className="grid grid-cols-4 border-b" style={{ borderColor: "rgba(255,255,255,0.07)", background: "#111111" }}>
            {products.map((product, i) => {
              const isSelected = i === selectedIndex;
              return (
                <div
                  key={product.id}
                  className="px-4 py-3 flex justify-center border-e last:border-e-0"
                  style={{
                    borderColor: "rgba(255,255,255,0.07)",
                    background: isSelected ? "rgba(198,168,122,0.06)" : "transparent",
                  }}
                >
                  <button
                    onClick={() => setSelectedId(product.id)}
                    className="px-12 py-2 rounded-full text-base font-semibold border transition-colors"
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

          {/* Feature rows */}
          {Array.from({ length: maxFeatures }, (_, fi) => (
            <div
              key={fi}
              className="grid grid-cols-4 border-b last:border-b-0"
              style={{
                borderColor: "rgba(255,255,255,0.05)",
                background: fi % 2 === 0 ? "#0d0d0d" : "#111111",
              }}
            >
              {products.map((product, i) => {
                const isSelected = i === selectedIndex;
                return (
                  <div
                    key={product.id}
                    className="px-4 py-4 text-center text-lg border-e last:border-e-0"
                    style={{
                      borderColor: "rgba(255,255,255,0.05)",
                      color: "#eeeeee",
                      opacity: isSelected ? 1 : 0.6,
                      fontWeight: isSelected ? 400 : 300,
                      background: isSelected ? "rgba(198,168,122,0.04)" : "transparent",
                    }}
                  >
                    {product.features[fi] ?? "—"}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <Link
            href={`/shop/${selectedId}`}
            className="inline-flex items-center px-8 py-3.5 rounded-full text-base font-semibold transition-opacity hover:opacity-85 text-black"
            style={{ background: "#c6a87a" }}
          >
            עבור לדף המוצר הנבחר
          </Link>
        </div>

      </div>
    </section>
  );
}
