"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

type Step = "shipping" | "payment";

function FormField({
  label, name, type = "text", value, onChange, placeholder,
}: {
  label: string; name: string; type?: string;
  value: string; onChange: (v: string) => void; placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm sm:text-lg font-semibold text-start" style={{ color: "#555555" }}>{label}</label>
      <input
        type={type} name={name} value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required
        dir="rtl"
        className="w-full rounded-xl border px-4 py-3 text-base sm:text-lg text-start outline-none transition-colors"
        style={{ borderColor: "#e0e0e0", background: "#fafafa", caretColor: "#c6a87a", color: "black" }}
      />
    </div>
  );
}

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clearCart } = useCart();
  const shipping = total >= 199 ? 0 : 29;

  const [step, setStep] = useState<Step>("shipping");
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", zip: "",
    cardNumber: "", expiry: "", cvv: "",
  });

  const set = (key: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [key]: v }));

  const isShippingValid = form.firstName && form.lastName && form.email && form.phone && form.address && form.city && form.zip;
  const isPaymentValid = form.cardNumber && form.expiry && form.cvv;

  const handleConfirm = () => {
    clearCart();
    router.push("/confirmation");
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-black text-black text-start mb-8">קופה</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">

            {/* Form — order-2 on mobile so summary shows first */}
            <div className="lg:col-span-2 flex flex-col gap-6 order-2 lg:order-1">

              {/* Step tabs */}
              <div className="flex gap-2 justify-start">
                {(["shipping", "payment"] as Step[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setStep(s)}
                    className="px-5 py-2 rounded-full text-base sm:text-lg font-semibold border transition-colors"
                    style={
                      step === s
                        ? { background: "#c6a87a", borderColor: "#c6a87a", color: "#000" }
                        : { borderColor: "#e0e0e0", color: "#777777" }
                    }
                  >
                    {s === "shipping" ? "פרטי משלוח" : "פרטי תשלום"}
                  </button>
                ))}
              </div>

              {step === "shipping" && (
                <div
                  className="rounded-2xl border p-5 sm:p-7 flex flex-col gap-5"
                  style={{ borderColor: "#eeeeee" }}
                >
                  <h2 className="font-black text-black text-start text-xl sm:text-xl">פרטים אישיים</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-start">
                    <FormField label="שם פרטי" name="firstName" value={form.firstName} onChange={set("firstName")} />
                    <FormField label="שם משפחה" name="lastName" value={form.lastName} onChange={set("lastName")} />
                  </div>
                  <FormField label="אימייל" name="email" type="email" value={form.email} onChange={set("email")} />
                  <FormField label="טלפון" name="phone" type="tel" value={form.phone} onChange={set("phone")} />

                  <h2 className="font-black text-black text-start text-xl sm:text-xl pt-2">כתובת למשלוח</h2>
                  <FormField label="כתובת" name="address" value={form.address} onChange={set("address")} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="עיר" name="city" value={form.city} onChange={set("city")} />
                    <FormField label="מיקוד" name="zip" value={form.zip} onChange={set("zip")} />
                  </div>

                  <button
                    onClick={() => setStep("payment")}
                    disabled={!isShippingValid}
                    className="w-full sm:w-auto sm:self-start px-8 py-3.5 rounded-full text-base sm:text-lg font-bold text-black mt-2 transition-opacity hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ background: "#c6a87a" }}
                  >
                    המשך לתשלום
                  </button>
                </div>
              )}

              {step === "payment" && (
                <div
                  className="rounded-2xl border p-5 sm:p-7 flex flex-col gap-5"
                  style={{ borderColor: "#eeeeee" }}
                >
                  <h2 className="font-black text-black text-start text-xl sm:text-lg">פרטי תשלום</h2>
                  <FormField label="מספר כרטיס" name="cardNumber" value={form.cardNumber} onChange={set("cardNumber")} placeholder="•••• •••• •••• ••••" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="תוקף" name="expiry" value={form.expiry} onChange={set("expiry")} placeholder="MM/YY" />
                    <FormField label="CVV" name="cvv" value={form.cvv} onChange={set("cvv")} placeholder="•••" />
                  </div>

                  <button
                    onClick={handleConfirm}
                    disabled={!isPaymentValid}
                    className="w-full sm:w-auto sm:self-start px-8 py-3.5 rounded-full text-base sm:text-lg font-bold text-black mt-2 transition-opacity hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ background: "#c6a87a" }}
                  >
                    אשר הזמנה
                  </button>
                </div>
              )}
            </div>

            {/* Order summary — order-1 on mobile so it shows above the form */}
            <div
              className="rounded-2xl border p-5 sm:p-6 flex flex-col gap-4 h-fit order-1 lg:order-2"
              style={{ background: "#f9f9f9", borderColor: "#eeeeee" }}
            >
              <h2 className="font-black text-black text-xl sm:text-xl text-start">סיכום הזמנה</h2>

              {items.length > 0 && (
                <div className="flex flex-col gap-2 text-base sm:text-lg border-b pb-4" style={{ borderColor: "#eeeeee" }}>
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between gap-2">
                      <span className="shrink-0" style={{ color: "#777" }}>× {item.qty}</span>
                      <span className="text-start text-black font-medium truncate">{item.name}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-col gap-2 text-base sm:text-lg">
                <div className="flex justify-between">
                  <span style={{ color: "#777777" }}>סכום ביניים</span>
                  <span className="font-semibold text-black">₪{total}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "#777777" }}>משלוח</span>
                  <span className="font-semibold text-black">{shipping === 0 ? "חינם" : `₪${shipping}`}</span>
                </div>
              </div>

              <div className="flex justify-between font-black text-black text-xl sm:text-lg border-t pt-4" style={{ borderColor: "#eeeeee" }}>
                <span>סה״כ</span>
                <span>₪{total + shipping}</span>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
