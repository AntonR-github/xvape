"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const trustBadges = [
  { icon: "/assets/icn/delivery.png", label: "משלוח מהיר", sub: "עד 5 ימי עסקים" },
  { icon: "/assets/icn/headset.png", label: "שירות לקוחות", sub: "058-799-1234" },
  { icon: "/assets/icn/shield.png", label: "רכישה מאובטחת", sub: "תשלום מאובן ומאובטח" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-black">

        {/* Header */}
        <div className="pt-20 pb-10 text-center px-6">
          <h2 className="title-h2 mb-3">
            יצירת קשר
          </h2>
          <p className="text-2xl font-light">
            נשמח לעמוד לשירותכם ולענות על כל שאלה.
          </p>
        </div>

        {/* Form card */}
        <div className="px-6 pb-10">
          {status === "sent" ? (
            <p className="text-center text-xl font-bold text-white py-10">תודה! פנייתך נשלחה בהצלחה.</p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-xl mx-auto rounded-2xl p-8 flex flex-col gap-4 border-4 border-[#c6a87a]"
              style={{ background: "#2a2a2a" }}
            >
              {[
                { name: "name", placeholder: "שם פרטי / שם", type: "text" },
                { name: "phone", placeholder: "טלפון", type: "tel" },
                { name: "email", placeholder: "אימייל", type: "email" },
              ].map((field) => (
                <div
                  key={field.name}
                  className="border-b py-3"
                  style={{ borderColor: "#c6a87a" }}
                >
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.name as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                    className="w-full bg-transparent outline-none text-start text-xl placeholder:text-start"
                    style={{ color: "#ffffff", caretColor: "#c6a87a" }}
                    dir="rtl"
                  />
                </div>
              ))}

              {/* Textarea */}
              <div className="border-b py-3 mb-6" style={{ borderColor: "#c6a87a" }}>
                <textarea
                  placeholder="הודעה"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent outline-none resize-none text-start text-xl placeholder:text-start"
                  style={{ color: "#ffffff", caretColor: "#c6a87a" }}
                  dir="rtl"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col items-center gap-4">
                {status === "error" && (
                  <p className="text-red-600 font-bold text-sm">שגיאה בשליחה, נסה שוב מאוחר יותר.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-10 py-2.5 rounded-full text-xl font-regular text-black transition-opacity hover:opacity-85 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  style={{ background: "var(--color-gold)" }}
                >
                  {status === "sending" ? "שולח..." : "שליחה"}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Service info */}
        <div className="text-center pb-14 px-6">
          <p className="font-bold text-2xl text-white mb-1">שירות לקוחות</p>
          <p className="text-2xl mb-2">
            אנחנו כאן! לכל שאלה צרו איתנו קשר
          </p>
          <a
            href="tel:058-799-1234"
            className="text-3xl font-bold transition-opacity hover:opacity-80"
            style={{ color: "#c6a87a" }}
          >
            058-799-1234
          </a>
        </div>

        {/* Trust badges */}
        <div className="border-t py-14 px-4 bg-[white]">
          <div className="flex flex-col sm:flex-row justify-center text-center items-center gap-8 sm:gap-52">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex flex-col items-center gap-2 w-50">
                <Image src={badge.icon} alt={badge.label} width={62} height={62} className="w-12 h-12 sm:w-16 sm:h-16" />
                <span className="text-lg sm:text-2xl font-semibold text-black">{badge.label}</span>
                <span className="text-base sm:text-2xl font-light text-black">{badge.sub}</span>
              </div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}