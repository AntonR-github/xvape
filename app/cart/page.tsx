"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

function TrashIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
  );
}

const FREE_SHIPPING_THRESHOLD = 199;

export default function CartPage() {
  const { items, removeItem, updateQty, total } = useCart();
  const shipping = total >= FREE_SHIPPING_THRESHOLD ? 0 : 29;

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-black text-black text-end mb-10">עגלת קניות</h1>

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 gap-6">
              <p className="text-lg font-medium" style={{ color: "#777777" }}>העגלה שלך ריקה</p>
              <Link
                href="/shop"
                className="px-8 py-3 rounded-full text-sm font-semibold text-black transition-opacity hover:opacity-85"
                style={{ background: "#c6a87a" }}
              >
                עבור לחנות
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Cart items */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-5 rounded-2xl p-5 border"
                    style={{ background: "#f9f9f9", borderColor: "#eeeeee" }}
                  >
                    {/* Image placeholder */}
                    <div
                      className="w-20 h-20 rounded-xl shrink-0 flex items-center justify-center"
                      style={{ background: "#e4e4e4" }}
                    >
                      <span className="text-[10px]" style={{ color: "#aaa" }}>תמונה</span>
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col items-end text-end gap-1">
                      <span className="font-bold text-black">{item.name}</span>
                      <span className="text-sm font-black text-black">₪{item.price}</span>
                    </div>

                    {/* Qty controls */}
                    <div
                      className="flex items-center gap-3 border rounded-full px-4 py-1.5"
                      style={{ borderColor: "#d0d0d0" }}
                    >
                      <button onClick={() => updateQty(item.id, item.qty + 1)} className="text-base font-bold text-black hover:opacity-60">+</button>
                      <span className="w-5 text-center text-sm font-semibold text-black">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty - 1)} className="text-base font-bold text-black hover:opacity-60">−</button>
                    </div>

                    {/* Line total */}
                    <span className="font-black text-black text-base w-16 text-end shrink-0">
                      ₪{item.price * item.qty}
                    </span>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-400 hover:text-red-600 transition-colors shrink-0"
                      aria-label="הסר פריט"
                    >
                      <TrashIcon />
                    </button>
                  </div>
                ))}

                <Link
                  href="/shop"
                  className="self-end text-sm font-medium transition-opacity hover:opacity-70 mt-2"
                  style={{ color: "#777777" }}
                >
                  ← המשך קניות
                </Link>
              </div>

              {/* Order summary */}
              <div
                className="rounded-2xl p-6 flex flex-col gap-4 h-fit border"
                style={{ background: "#f9f9f9", borderColor: "#eeeeee" }}
              >
                <h2 className="font-black text-black text-lg text-end">סיכום הזמנה</h2>

                <div className="flex flex-col gap-3 text-sm border-b pb-4" style={{ borderColor: "#eeeeee" }}>
                  <div className="flex justify-between">
                    <span style={{ color: "#777777" }}>סכום ביניים</span>
                    <span className="font-semibold text-black">₪{total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "#777777" }}>משלוח</span>
                    <span className="font-semibold text-black">
                      {shipping === 0 ? "חינם" : `₪${shipping}`}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-end" style={{ color: "#c6a87a" }}>
                      הוסף ₪{FREE_SHIPPING_THRESHOLD - total} למשלוח חינם
                    </p>
                  )}
                </div>

                <div className="flex justify-between font-black text-black text-lg">
                  <span>סה״כ</span>
                  <span>₪{total + shipping}</span>
                </div>

                <Link
                  href="/checkout"
                  className="w-full py-3.5 rounded-full font-bold text-sm text-black text-center transition-opacity hover:opacity-85 mt-2"
                  style={{ background: "#c6a87a" }}
                >
                  עבור לקופה
                </Link>
              </div>

            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
