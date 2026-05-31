'use client'

import Link from "next/link";
import Image from "next/image";
import { FloatingWhatsApp } from '@digicroz/react-floating-whatsapp';

const columns = [
  {
    id: "nav",
    links: [
      { label: "בית", href: "/" },
      { label: "מוצרים", href: "/shop" },
      { label: "השוואה", href: "/compare" },
      { label: "בלוג", href: "/blog" },
      { label: "צור קשר", href: "/contact" },
    ],
  },
  {
    id: "support",
    links: [
      { label: "שאלות נפוצות", href: "/#faq" },
      { label: "תנאי שימוש", href: "/terms" },
      { label: "הצהרת נגישות", href: "/accessibility" },
      { label: "מדיניות משלוחים", href: "/shipping" },
      { label: "מדיניות פרטיות", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t" style={{ borderColor: "white" }}>
      <div className="site-container px-6 lg:px-12 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-0">

          {/* Logo + tagline — centered — full width on mobile */}
          <div className="col-span-2 sm:col-span-1 flex flex-col items-center text-center gap-3">
            <Link href="/">
              <Image src="/assets/logo.svg" alt="XVAPE" width={100} height={40} className="h-8 w-auto" />
            </Link>
            <p className="text-base leading-relaxed">
              המוצרים מיועדים למבוגרים בלבד (+18)
            </p>
          </div>

          {/* Link columns - centered */}
          {columns.map((col) => (
            <ul key={col.id} className="flex flex-col items-center gap-3 text-center sm:mt-0 mt-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base sm:text-xl transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}

        </div>
     <FloatingWhatsApp
        phoneNumber="972542216300"
        accountName="שירות לקוחות XVape"
        placeholder="הקלד הודעה..."
        chatMessage="שלום! במה אפשר לעזור לך היום?"
        notification
        notificationSound
      />

        {/* Copyright */}
        <div
          className="mt-12 pt-6 border-t text-center text-base flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>כל הזכויות שמורות · B2B מרקט {new Date().getFullYear()} ©</span>
        </div>
      </div>
    </footer>
  );
}
