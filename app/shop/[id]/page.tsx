import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getProduct, getProducts } from "../../lib/medusa";
import ProductDetail from "./ProductDetail";

// Pre-generate routes for known products at build time
export async function generateStaticParams() {
  try {
    const products = await getProducts();
    return products.map((p) => ({ id: p.handle || p.id }));
  } catch {
    return [];
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(id);
  if (!product) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        <ProductDetail product={product} />
      </main>
      <Footer />
    </>
  );
}
