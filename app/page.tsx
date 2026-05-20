import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCatalog from "./components/ProductCatalog";
import BrandSection from "./components/BrandSection";
import Reviews from "./components/Reviews";
import Blog from "./components/Blog";
import CTABanner from "./components/CTABanner";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProductCatalog />
        <BrandSection />
        <Reviews />
        <Blog />
        <CTABanner />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
