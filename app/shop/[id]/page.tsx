import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { products } from "../../components/ProductCard";
import ProductDetail from "./ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-screen" style={{ background: "#f5f5f5" }}>
        <ProductDetail product={product} />
      </main>
      <Footer />
    </>
  );
}
