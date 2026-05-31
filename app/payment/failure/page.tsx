"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function PaymentFailurePage() {
  const params = useSearchParams();
  const orderId = params.get("Order") ?? "";

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white py-16 px-4" dir="rtl">
        <div className="max-w-md mx-auto flex flex-col items-center gap-8 text-center">

          {/* Circle X icon */}
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center"
            style={{ background: "#ef4444" }}
          >
            <XIcon />
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-black text-black">התשלום נכשל</h1>
            <p className="text-base" style={{ color: "#555" }}>
              לא הצלחנו לעבד את התשלום שלך. הכרטיס לא חויב. אנא נסה שנית.
            </p>
          </div>

          {orderId && (
            <div
              className="w-full rounded-2xl border p-4 text-sm text-start"
              style={{ borderColor: "#eeeeee", background: "#f9f9f9" }}
            >
              <div className="flex justify-between">
                <span style={{ color: "#777" }}>מספר הזמנה</span>
                <span className="font-semibold text-black">{orderId}</span>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Link
              href="/checkout"
              className="flex-1 text-center py-3.5 rounded-full font-bold text-base text-black transition-opacity hover:opacity-85"
              style={{ background: "#c6a87a" }}
            >
              נסה שוב
            </Link>
            <Link
              href="/cart"
              className="flex-1 text-center py-3.5 rounded-full font-bold text-base border transition-opacity hover:opacity-75"
              style={{ borderColor: "#c6a87a", color: "#c6a87a", background: "transparent" }}
            >
              חזור לעגלה
            </Link>
          </div>

          <p className="text-sm" style={{ color: "#aaa" }}>
            אם הבעיה חוזרת,{" "}
            <Link href="/contact" className="underline" style={{ color: "#c6a87a" }}>
              צור קשר
            </Link>{" "}
            עם שירות הלקוחות שלנו.
          </p>

        </div>
      </main>
      <Footer />
    </>
  );
}
