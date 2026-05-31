"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useCart } from "../../context/CartContext";

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function PaymentSuccessPage() {
  const { clearCart } = useCart();
  const params = useSearchParams();

  const orderId = params.get("Order") ?? "";
  const amount  = params.get("Amount") ?? "";

  // Clear cart exactly once when the success page mounts
  useEffect(() => {
    clearCart();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white py-16 px-4" dir="rtl">
        <div className="max-w-md mx-auto flex flex-col items-center gap-8 text-center">

          {/* Circle check icon */}
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center"
            style={{ background: "#4caf50" }}
          >
            <CheckIcon />
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-black text-black">ההזמנה אושרה!</h1>
            <p className="text-base" style={{ color: "#555" }}>
              תודה על הרכישה. אישור הזמנה יישלח לכתובת המייל שלך.
            </p>
          </div>

          {(orderId || amount) && (
            <div
              className="w-full rounded-2xl border p-5 flex flex-col gap-2 text-sm text-start"
              style={{ borderColor: "#eeeeee", background: "#f9f9f9" }}
            >
              {orderId && (
                <div className="flex justify-between">
                  <span style={{ color: "#777" }}>מספר הזמנה</span>
                  <span className="font-semibold text-black">{orderId}</span>
                </div>
              )}
              {amount && (
                <div className="flex justify-between">
                  <span style={{ color: "#777" }}>סכום שחויב</span>
                  <span className="font-semibold text-black">₪{amount}</span>
                </div>
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Link
              href="/shop"
              className="flex-1 text-center py-3.5 rounded-full font-bold text-base text-black transition-opacity hover:opacity-85"
              style={{ background: "#c6a87a" }}
            >
              המשך לקנות
            </Link>
            <Link
              href="/"
              className="flex-1 text-center py-3.5 rounded-full font-bold text-base text-black border transition-opacity hover:opacity-75"
              style={{ borderColor: "#c6a87a", color: "#c6a87a", background: "transparent" }}
            >
              דף הבית
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
