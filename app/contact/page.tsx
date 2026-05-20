"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HeadsetIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  );
}

const trustBadges = [
  { icon: <HeadsetIcon />, label: "שירות לקוחות", sub: "058-799-1234" },
  { icon: <ShieldIcon />,  label: "רכישה מאובטחת", sub: "תשלום מאובן ומאובטח" },
  { icon: <TruckIcon />,   label: "משלוח מהיר", sub: "עד 5 ימי עסקים" },
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
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">
            יצירת קשר
          </h1>
          <p className="text-base" style={{ color: "#eeeeee", opacity: 0.5 }}>
            נשמח לעמוד לשירותכם ולענות על כל שאלה.
          </p>
        </div>

        {/* Form card */}
        <div className="px-6 pb-10">
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto rounded-2xl p-8 flex flex-col gap-0"
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
                  className="w-full bg-transparent outline-none text-end text-sm placeholder:text-end"
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
                className="w-full bg-transparent outline-none resize-none text-end text-sm placeholder:text-end"
                style={{ color: "#111111", caretColor: "#c6a87a" }}
                dir="rtl"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-10 py-2.5 rounded-full text-sm font-semibold text-black transition-opacity hover:opacity-85"
                style={{ background: "#c6a87a" }}
              >
                שליחה
              </button>
            </div>
          </form>
        </div>

        {/* Service info */}
        <div className="text-center pb-14 px-6">
          <p className="font-bold text-white mb-1">שירות לקוחות</p>
          <p className="text-sm mb-2" style={{ color: "#eeeeee", opacity: 0.45 }}>
            אנחנו כאן! לכל שאלה צרו איתנו קשר
          </p>
          <a
            href="tel:058-799-1234"
            className="text-lg font-bold transition-opacity hover:opacity-80"
            style={{ color: "#c6a87a" }}
          >
            058-799-1234
          </a>
        </div>

        {/* Trust badges */}
        <div
          className="border-t py-14 px-6"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <div className="max-w-xl mx-auto grid grid-cols-3 gap-6 text-center">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex flex-col items-center gap-2">
                <span style={{ color: "#eeeeee", opacity: 0.7 }}>{badge.icon}</span>
                <span className="text-sm font-semibold text-white">{badge.label}</span>
                <span className="text-xs" style={{ color: "#eeeeee", opacity: 0.45 }}>
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
