import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard, { products } from "../components/ProductCard";

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white py-20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-black text-black mb-3">
              בחר את המכשיר שלך
            </h1>
            <p className="text-base" style={{ color: "#555555" }}>
              מהדגם הקומפקטי ועד הפרימיום - לכל משתמש יש את המכשיר המושלם
            </p>
          </div>

          {/* Product grid — 2 columns on shop page */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
