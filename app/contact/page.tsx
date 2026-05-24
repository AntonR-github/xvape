"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const trustBadges = [
  { icon: "/assets/icn/delivery.png", label: "משלוח מהיר",    sub: "עד 5 ימי עסקים" },
  { icon: "/assets/icn/headset.png",  label: "שירות לקוחות",  sub: "058-799-1234" },
  { icon: "/assets/icn/shield.png",   label: "רכישה מאובטחת", sub: "תשלום מאובן ומאובטח" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto rounded-2xl p-8 flex flex-col gap-4"
            style={{ background: "#ffffff" }}
          >
            {[
              { name: "name",    placeholder: "שם פרטי / שם",  type: "text" },
              { name: "phone",   placeholder: "טלפון",          type: "tel" },
              { name: "email",   placeholder: "אימייל",         type: "email" },
            ].map((field) => (
              <div
                key={field.name}
                className="border-b py-3"
                style={{ borderColor: "#e5e5e5" }}
              >
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.name as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  className="w-full bg-transparent outline-none text-start text-lg placeholder:text-start"
                  style={{ color: "#111111", caretColor: "#c6a87a" }}
                  dir="rtl"
                />
              </div>
            ))}

            {/* Textarea */}
            <div className="border-b py-3 mb-6" style={{ borderColor: "#e5e5e5" }}>
              <textarea
                placeholder="הודעה"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent outline-none resize-none text-start text-lg placeholder:text-start"
                style={{ color: "#111111", caretColor: "#c6a87a" }}
                dir="rtl"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-10 py-2.5 rounded-full text-lg font-regular text-black transition-opacity hover:opacity-85"
                style={{ background: "var(--color-accent-gradient)" }}
              >
                שליחה
              </button>
            </div>
          </form>
        </div>

        {/* Service info */}
        <div className="text-center pb-14 px-6">
          <p className="font-bold text-lg text-white mb-1">שירות לקוחות</p>
          <p className="text-lg mb-2">
            אנחנו כאן! לכל שאלה צרו איתנו קשר
          </p>
          <a
            href="tel:058-799-1234"
            className="text-xl font-bold transition-opacity hover:opacity-80"
            style={{ color: "#c6a87a" }}
          >
            058-799-1234
          </a>
        </div>

        {/* Trust badges */}
        <div className="border-t py-14 px-6 bg-[white]">
          <div className="site-container grid grid-cols-3 gap-6 text-center">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex flex-col items-center gap-2">
                <Image src={badge.icon} alt={badge.label} width={40} height={40} className="opacity-70" />
                <span className="text-sm font-semibold text-black">{badge.label}</span>
                <span className="text-xs" style={{ color: "black", opacity: 0.45 }}>
                  {badge.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
