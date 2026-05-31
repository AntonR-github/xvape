import Link from "next/link";
import ProductCard, { products as mockProducts } from "./ProductCard";
import { getProducts } from "../lib/medusa";

export default async function ProductCatalog() {
  let displayProducts = mockProducts;
  try {
    const { products } = await getProducts(4);
    if (products.length > 0) {
      // Merge static features/badge from mock data (Medusa doesn't store these)
      displayProducts = products.map((p) => {
        const mock = mockProducts.find((m) => m.handle === p.handle || m.id === p.id);
        if (!mock) return p;
        return {
          ...p,
          badge:        p.badge        || mock.badge,
          features:     p.features?.length     ? p.features     : mock.features,
          cardFeatures: p.cardFeatures?.length ? p.cardFeatures : mock.cardFeatures,
        };
      });
    }
  } catch {
    // backend unreachable — keep mock data
  }

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
          {displayProducts.map((product) => (
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
