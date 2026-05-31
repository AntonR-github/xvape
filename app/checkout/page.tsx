"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

type Step = "shipping" | "payment";

function FormField({
  label, name, type = "text", value, onChange, placeholder, showError,
}: {
  label: string; name: string; type?: string;
  value: string; onChange: (v: string) => void; placeholder?: string; showError?: boolean;
}) {
  const invalid = showError && !value.trim();
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm sm:text-xs font-semibold text-start" style={{ color: "#555555" }}>{label}</label>
      <input
        type={type} name={name} value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required
        dir="rtl"
        className="w-full rounded-xl border px-4 py-3 text-base sm:text-sm text-start outline-none transition-colors"
        style={{
          borderColor: invalid ? "#e53e3e" : "#e0e0e0",
          background: invalid ? "#fff5f5" : "#fafafa",
          caretColor: "#c6a87a",
          color: "black",
        }}
      />
      {invalid && <span className="text-xs text-red-500 text-start">שדה חובה</span>}
    </div>
  );
}

function LockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );
}

export default function CheckoutPage() {
  const { items, total } = useCart();
  const shipping = total >= 199 ? 0 : 29;

  const [step, setStep] = useState<Step>("shipping");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", zip: "",
  });

  const set = (key: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [key]: v }));

  const isShippingValid =
    form.firstName.trim() && form.lastName.trim() && form.email.trim() &&
    form.phone.trim() && form.address.trim() && form.city.trim() && form.zip.trim();

  const handleContinue = () => {
    setSubmitted(true);
    if (isShippingValid) setStep("payment");
  };

  const handlePay = async () => {
    setLoading(true);
    setError(null);
    try {
      const orderId = `XV-${Date.now()}`;
      const res = await fetch("/api/hyp-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: total + shipping,
          orderId,
        }),
      });

      const data = await res.json();
      if (!res.ok || data.error) {
        setError(data.error ?? "שגיאה בחיבור לשער התשלומים");
        setLoading(false);
        return;
      }

      // Redirect to Hyp Pay hosted payment page
      window.location.href = data.paymentUrl;
    } catch {
      setError("שגיאה בחיבור לשער התשלומים. אנא נסה שוב.");
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-black text-black text-start mb-8">קופה</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">

            {/* Form */}
            <div className="lg:col-span-2 flex flex-col gap-6 order-2 lg:order-1">

              {/* Step tabs */}
              <div className="flex gap-2 justify-start">
                {(["shipping", "payment"] as Step[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => s === "shipping" && setStep("shipping")}
                    className="px-5 py-2 rounded-full text-base sm:text-sm font-semibold border transition-colors"
                    style={
                      step === s
                        ? { background: "#c6a87a", borderColor: "#c6a87a", color: "#000" }
                        : { borderColor: "#e0e0e0", color: "#777777" }
                    }
                  >
                    {s === "shipping" ? "פרטי משלוח" : "תשלום"}
                  </button>
                ))}
              </div>

              {/* Step 1: Shipping */}
              {step === "shipping" && (
                <div className="rounded-2xl border p-5 sm:p-7 flex flex-col gap-5" style={{ borderColor: "#eeeeee" }}>
                  <h2 className="font-black text-black text-start text-xl sm:text-lg">פרטים אישיים</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="שם פרטי" name="firstName" value={form.firstName} onChange={set("firstName")} showError={submitted} />
                    <FormField label="שם משפחה" name="lastName" value={form.lastName} onChange={set("lastName")} showError={submitted} />
                  </div>
                  <FormField label="אימייל" name="email" type="email" value={form.email} onChange={set("email")} showError={submitted} />
                  <FormField label="טלפון" name="phone" type="tel" value={form.phone} onChange={set("phone")} showError={submitted} />

                  <h2 className="font-black text-black text-start text-xl sm:text-lg pt-2">כתובת למשלוח</h2>
                  <FormField label="כתובת" name="address" value={form.address} onChange={set("address")} showError={submitted} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="עיר" name="city" value={form.city} onChange={set("city")} showError={submitted} />
                    <FormField label="מיקוד" name="zip" value={form.zip} onChange={set("zip")} showError={submitted} />
                  </div>

                  <button
                    onClick={handleContinue}
                    className="w-full sm:w-auto sm:self-start px-8 py-3.5 rounded-full text-base sm:text-sm font-bold text-black mt-2 transition-opacity hover:opacity-85"
                    style={{ background: "#c6a87a" }}
                  >
                    המשך לתשלום
                  </button>
                </div>
              )}

              {/* Step 2: Pay via Hyp */}
              {step === "payment" && (
                <div className="rounded-2xl border p-5 sm:p-7 flex flex-col gap-6" style={{ borderColor: "#eeeeee" }}>
                  <h2 className="font-black text-black text-start text-xl sm:text-lg">תשלום מאובטח</h2>

                  {/* Order recap */}
                  <div className="rounded-xl p-4 flex flex-col gap-2 text-sm" style={{ background: "#f7f7f7" }}>
                    <div className="flex justify-between">
                      <span style={{ color: "#777" }}>שם</span>
                      <span className="font-medium text-black">{form.firstName} {form.lastName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: "#777" }}>אימייל</span>
                      <span className="font-medium text-black">{form.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: "#777" }}>כתובת</span>
                      <span className="font-medium text-black">{form.address}, {form.city}</span>
                    </div>
                    <button
                      onClick={() => setStep("shipping")}
                      className="self-start text-xs mt-1 underline transition-opacity hover:opacity-60"
                      style={{ color: "#c6a87a" }}
                    >
                      ערוך פרטים
                    </button>
                  </div>

                  {/* Hyp Pay CTA */}
                  <div className="flex flex-col gap-3">
                    {error && (
                      <p className="text-sm text-red-500 text-start">{error}</p>
                    )}
                    <button
                      onClick={handlePay}
                      disabled={loading}
                      className="w-full py-4 rounded-full font-bold text-base sm:text-sm text-black flex items-center justify-center gap-2 transition-opacity hover:opacity-85 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ background: "#c6a87a" }}
                    >
                      <LockIcon />
                      {loading ? "מעבד..." : "לתשלום מאובטח"}
                    </button>
                    <p className="text-xs text-center" style={{ color: "#aaa" }}>
                      התשלום מאובטח באמצעות Hyp Pay
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Order summary sidebar */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="rounded-2xl border p-5 sm:p-6 flex flex-col gap-4 sticky top-24" style={{ borderColor: "#eeeeee" }}>
                <h2 className="font-black text-black text-start text-xl sm:text-lg">סיכום הזמנה</h2>
                <div className="flex flex-col gap-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      {item.image && (
                        <Image src={item.image} alt={item.name} width={48} height={48} className="w-12 h-12 rounded-lg object-cover shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-black truncate text-start">{item.name}</p>
                        <p className="text-xs text-start" style={{ color: "#777" }}>× {item.qty}</p>
                      </div>
                      <span className="text-sm font-semibold text-black shrink-0">₪{(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4 flex flex-col gap-2" style={{ borderColor: "#eeeeee" }}>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "#777" }}>סכום ביניים</span>
                    <span className="text-black">₪{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "#777" }}>משלוח</span>
                    <span className="text-black">{shipping === 0 ? "חינם" : `₪${shipping}`}</span>
                  </div>
                  <div className="flex justify-between text-base font-black text-black mt-1">
                    <span>סה״כ</span>
                    <span>₪{(total + shipping).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
