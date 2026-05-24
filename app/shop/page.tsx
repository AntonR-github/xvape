import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard, { products as mockProducts } from "../components/ProductCard";
import { getProducts } from "../lib/medusa";

const PER_PAGE = 16;

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;

  // Fetch from Medusa — fall back to mock data if the backend is unreachable
  let allProducts = mockProducts;
  try {
    const fetched = await getProducts();
    if (fetched.length > 0) allProducts = fetched;
  } catch {
    // backend unreachable — keep mock data
  }

  const totalPages = Math.ceil(allProducts.length / PER_PAGE);
  const page = Math.min(Math.max(Number(pageParam) || 1, 1), Math.max(totalPages, 1));
  const start = (page - 1) * PER_PAGE;
  const pageProducts = allProducts.slice(start, start + PER_PAGE);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white py-20 px-6 lg:px-12">
        <div className="site-container">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-black text-black mb-3">
              בחר את המכשיר שלך
            </h1>
            <p className="text-base" style={{ color: "#555555" }}>
              מהדגם הקומפקטי ועד הפרימיום - לכל משתמש יש את המכשיר המושלם
            </p>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {pageProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-14">
              {page > 1 && (
                <Link
                  href={`/shop?page=${page - 1}`}
                  className="px-4 py-2 rounded-full text-sm font-semibold border transition-colors hover:bg-black/5"
                  style={{ color: "#333333", borderColor: "#dddddd" }}
                >
                  &#8592;
                </Link>
              )}

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={`/shop?page=${p}`}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border transition-colors"
                  style={{
                    background: p === page ? "#1a1a1a" : "transparent",
                    color: p === page ? "#ffffff" : "#333333",
                    borderColor: p === page ? "#1a1a1a" : "#dddddd",
                  }}
                >
                  {p}
                </Link>
              ))}

              {page < totalPages && (
                <Link
                  href={`/shop?page=${page + 1}`}
                  className="px-4 py-2 rounded-full text-sm font-semibold border transition-colors hover:bg-black/5"
                  style={{ color: "#333333", borderColor: "#dddddd" }}
                >
                  &#8594;
                </Link>
              )}
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}
