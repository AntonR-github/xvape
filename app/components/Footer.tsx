import Link from "next/link";

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
    <footer className="bg-black border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">

          {/* Logo + tagline — rightmost in RTL */}
          <div className="flex flex-col items-end text-end gap-3 col-span-2 sm:col-span-1">
            <Link href="/" className="text-white font-black text-2xl tracking-tight">
              X<span style={{ color: "#c6a87a" }}>V</span>APE
            </Link>
            <p className="text-xs leading-relaxed" style={{ color: "#eeeeee", opacity: 0.4 }}>
              המוצרים מיועדים למבוגרים בלבד (+18)
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <ul key={col.id} className="flex flex-col items-end gap-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-opacity hover:opacity-100"
                    style={{ color: "#eeeeee", opacity: 0.55 }}
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
          className="mt-12 pt-6 border-t text-center text-xs"
          style={{ borderColor: "rgba(255,255,255,0.07)", color: "#eeeeee", opacity: 0.35 }}
        >
          כל הזכויות שמורות · XVAPE Israel {new Date().getFullYear()} ©
        </div>
      </div>
    </footer>
  );
}
