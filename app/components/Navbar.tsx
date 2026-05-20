"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const navLinks = [
  { href: "/products", label: "מוצרים" },
  { href: "/compare", label: "השוואה" },
  { href: "/blog", label: "בלוג" },
  { href: "/contact", label: "צור קשר" },
];

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count: cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-black border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">

        {/* Logo — right side in RTL */}
        <Link href="/" className="text-white font-black text-2xl tracking-tight shrink-0">
          {/* User will replace with actual logo */}
          X<span style={{ color: "#c6a87a" }}>V</span>APE
        </Link>

        {/* Nav links — center, desktop only */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors"
              style={{ color: "#eeeeee", opacity: 0.75 }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "0.75")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions — left side in RTL */}
        <div className="flex items-center gap-3">
          {/* CTA button — outlined gold, desktop only */}
          <Link
            href="/shop"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold border transition-colors hover:bg-white/5"
            style={{ color: "#c6a87a", borderColor: "#c6a87a" }}
          >
            כנס לחנות
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative p-2 transition-colors"
            style={{ color: "#eeeeee" }}
            aria-label="עגלת קניות"
          >
            <CartIcon />
            {cartCount > 0 && (
              <span
                className="absolute top-0.5 inset-e-0.5 text-black text-[10px] font-bold min-w-[16px] h-4 rounded-full flex items-center justify-center px-0.5"
                style={{ background: "#c6a87a" }}
              >
                {cartCount}
              </span>
            )}
          </Link>

          {/* Search */}
          <button
            className="p-2 transition-opacity hover:opacity-100"
            style={{ color: "#eeeeee", opacity: 0.75 }}
            aria-label="חיפוש"
          >
            <SearchIcon />
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            style={{ color: "#eeeeee" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="תפריט"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-black" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 px-3 rounded-lg text-base font-medium transition-colors"
                style={{ color: "#eeeeee" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t mt-2" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
              <Link
                href="/shop"
                className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold border"
                style={{ color: "#c6a87a", borderColor: "#c6a87a" }}
                onClick={() => setMobileOpen(false)}
              >
                כנס לחנות
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
