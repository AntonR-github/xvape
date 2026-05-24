import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    id: "nav",
    links: [
      { label: "בית", href: "/" },
      { label: "מוצרים", href: "/products" },
      { label: "השוואה", href: "/compare" },
      { label: "בלוג", href: "/blog" },
      { label: "צור קשר", href: "/contact" },
    ],
  },
  {
    id: "support",
    links: [
      { label: "משלוח והחזרות", href: "/shipping" },
      { label: "אחריות", href: "/warranty" },
      { label: "שאלות נפוצות", href: "/faq" },
      { label: "החזרי ואחריות", href: "/returns" },
      { label: "מדריכי שימוש", href: "/guides" },
    ],
  },
  {
    id: "legal",
    links: [
      { label: "מדיניות ביטולים", href: "/cancellation-policy" },
      { label: "תנאי שימוש", href: "/terms" },
      { label: "מדיניות פרטיות", href: "/privacy" },
      { label: "הצהרת נגישות", href: "/accessibility" },
      { label: "מדיניות משלוחים", href: "/shipping-policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t" style={{ borderColor: "white" }}>
      <div className="site-container px-6 lg:px-12 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">

          {/* Logo + tagline — rightmost in RTL */}
          <div className="flex flex-col items-start text-start gap-3 col-span-2 sm:col-span-1">
            <Link href="/">
              <Image src="/assets/logo.svg" alt="XVAPE" width={100} height={40} className="h-8 w-auto" />
            </Link>
            <p className="text-base leading-relaxed">
              המוצרים מיועדים למבוגרים בלבד (+18)
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <ul key={col.id} className="flex flex-col items-start gap-3">
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
          className="mt-12 pt-6 border-t text-center text-base">
          כל הזכויות שמורות · XVAPE Israel {new Date().getFullYear()} ©
        </div>
      </div>
    </footer>
  );
}
