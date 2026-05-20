import Link from "next/link";
import ProductCard, { products } from "./ProductCard";

export default function ProductCatalog() {
  return (
    <section className="bg-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-end mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-3">
            בחר את המכשיר שלך
          </h2>
          <p className="text-base" style={{ color: "#555555" }}>
            מהדגם הקומפקטי ועד הפרימיום - לכל משתמש יש את המכשיר המושלם
          </p>
        </div>

        {/* Product grid — 4 columns on homepage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Section CTA */}
        <div className="flex justify-center mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center px-10 py-3.5 rounded-full text-sm font-semibold border transition-colors hover:bg-black hover:text-white"
            style={{ borderColor: "#1a1a1a", color: "#1a1a1a" }}
          >
            לדף המוצר
          </Link>
        </div>

      </div>
    </section>
  );
}
