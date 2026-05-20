import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CompareClient from "./CompareClient";

export default function ComparePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-black">
        <CompareClient />
      </main>
      <Footer />
    </>
  );
}
