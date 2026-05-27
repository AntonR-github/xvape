import { notFound } from "next/navigation";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getProduct, getProducts } from "../../lib/medusa";
import ProductDetail from "./ProductDetail";

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
