import { notFound } from "next/navigation";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getProduct, getProducts } from "../../lib/medusa";
import ProductDetail from "./ProductDetail";
import { products as mockProducts } from "../../components/ProductCard";

// Pre-generate routes for known products at build time
export async function generateStaticParams() {
  try {
    const { products } = await getProducts();
    return products.map((p) => ({ id: p.handle || p.id }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProduct(id);
  
  if (!product) {
    return { title: "מוצר לא נמצא" };
  }

  return {
    title: `${product.name} | XVape`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images?.map((img) => ({ url: img })),
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(id);
  if (!product) notFound();

  // Merge static features/badge from mock data when Medusa doesn't provide them.
  // Match by handle, id, or first word of name (handles Medusa/mock handle mismatches).
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const mock = mockProducts.find(
    (p) =>
      p.handle === id ||
      p.id === id ||
      norm(p.name).startsWith(norm(product.name).slice(0, 4)) ||
      norm(product.name).startsWith(norm(p.name).slice(0, 4))
  );
  if (mock) {
    if (!product.features?.length)     product.features     = mock.features;
    if (!product.cardFeatures?.length) product.cardFeatures = mock.cardFeatures;
    if (!product.badge)                product.badge        = mock.badge;
  }

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.description,
    sku: product.variantId,
    offers: {
      "@type": "Offer",
      priceCurrency: "ILS",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: `https://xvape.co.il/shop/${product.handle || product.id}`,
      seller: {
        "@type": "Organization",
        name: "XVape",
      },
    },
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productSchema),
          }}
        />
      </Head>
      <Navbar />
      <main className="flex-1 bg-white">
        <ProductDetail product={product} />
      </main>
      <Footer />
    </>
  );
}
