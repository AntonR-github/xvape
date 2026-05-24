"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";

const navLinks = [
  { href: "/shop", label: "מוצרים" },
  { href: "/compare", label: "השוואה" },
  { href: "/blog", label: "בלוג" },
  { href: "/contact", label: "צור קשר" },
];


function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count: cartCount } = useCart();

  return (
    <header
      className="sticky top-0 z-50 bg-black border-b"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <nav className="site-container px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo — right side in RTL */}
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/logo.svg"
            alt="XVAPE"
            width={80}
            height={32}
            className="h-6 w-auto"
          />
        </Link>

        {/* Nav links — center, desktop only */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-regular transition-colors text-white"
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions — left side in RTL */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <button
            className="p-2 transition-opacity hover:opacity-100"
            aria-label="חיפוש"
          >
            <Image src="/assets/icn/search.png" alt="חיפוש" width={26} height={26} className="icon-accent" />
          </button>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative p-2"
            aria-label="עגלת קניות"
          >
            <Image src="/assets/icn/cart.png" alt="עגלה" width={26} height={26} className="icon-accent" />
            {cartCount > 0 && (
              <span
                className="absolute top-0.5 inset-e-0.5 text-black text-[10px] font-bold min-w-[16px] h-4 rounded-full flex items-center justify-center px-0.5"
                style={{ background: "#c6a87a" }}
              >
                {cartCount}
              </span>
            )}
          </Link>

          {/* CTA button — outlined gold, desktop only */}
          <Link
            href="/shop"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-base font-semibold border transition-colors hover:bg-white/5"
            style={{ color: "#c6a87a", borderColor: "#c6a87a" }}
          >
            כנס לחנות
          </Link>

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
        <div
          className="md:hidden border-t bg-black"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
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
            <div
              className="pt-3 border-t mt-2"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
            >
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
