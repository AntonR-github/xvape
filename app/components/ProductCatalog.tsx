import Link from "next/link";
import ProductCard, { products } from "./ProductCard";

export default function ProductCatalog() {
  return (
    <section className="bg-white py-20 px-6 lg:px-12">
      <div className="site-container">

        {/* Header */}
        <div className="text-start mb-12">
          <h2 className="title-h2-black mb-3">
            בחר את המכשיר שלך
          </h2>
          <h3 className="title-h3-black">
            מהדגם הקומפקטי ועד הפרימיום - לכל משתמש יש את המכשיר המושלם
          </h3>
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
            className="inline-flex items-center px-10 py-3.5 rounded-full text-xl font-regular border transition-transform duration-200 hover:scale-105"
            style={{ borderColor: "#1a1a1a", color: "#1a1a1a" }}
          >
            לקטלוג המוצרים
          </Link>
        </div>

      </div>
    </section>
  );
}
