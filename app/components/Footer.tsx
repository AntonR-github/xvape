import Link from "next/link";
import Image from "next/image";

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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">

          {/* Logo + tagline — centered */}
          <div className="flex flex-col items-center text-center gap-3">
            <Link href="/">
              <Image src="/assets/logo.svg" alt="XVAPE" width={100} height={40} className="h-8 w-auto" />
            </Link>
            <p className="text-base leading-relaxed">
              המוצרים מיועדים למבוגרים בלבד (+18)
            </p>
          </div>

          {/* Link columns - centered */}
          {columns.map((col) => (
            <ul key={col.id} className="flex flex-col items-center gap-3 text-center">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xl transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}

        </div>

        {/* Copyright */}
        <div
          className="mt-12 pt-6 border-t text-center text-base flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>כל הזכויות שמורות · B2B מרקט {new Date().getFullYear()} ©</span>
          <span className="hidden sm:inline">|</span>
          <a
            href="https://www.arweblabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-100"
            style={{ color: "var(--color-accent)" }}
          >
            פיתוח AR Web Labs
          </a>
        </div>
      </div>
    </footer>
  );
}
