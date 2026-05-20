function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  );
}

const stores = [
  {
    id: "store-1",
    name: "חנות",
    details: "פרטי החנות כתובת\nטלפון ופרטי קשר",
    icon: null,
  },
  {
    id: "store-2",
    name: "חנות",
    details: "פרטי החנות כתובת\nטלפון ופרטי קשר",
    icon: null,
  },
  {
    id: "store-3",
    name: "חנות",
    details: "פרטי החנות כתובת\nטלפון ופרטי קשר",
    icon: null,
  },
  {
    id: "online",
    name: "באתר",
    details: "משלוח עד הבית\nתוך 3-5 ימי עסקים",
    icon: <TruckIcon />,
  },
];

export default function BrandSection() {
  return (
    <>
      {/* ── Brand split ── */}
      <section className="bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[520px]">

            {/* Text — first in DOM = right side in RTL */}
            <div className="flex flex-col items-end text-end py-20 lg:ps-16 order-first">
              {/* Logo placeholder */}
              <span className="text-xl font-black tracking-tight mb-6" style={{ color: "#eeeeee" }}>
                X<span style={{ color: "#c6a87a" }}>V</span>APE
              </span>

              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
                המותג שמאחורי המכשיר
              </h2>

              <p className="text-base leading-loose max-w-sm" style={{ color: "#eeeeee", opacity: 0.6 }}>
                XVAPE הוא מותג ווופורייזרים העולמי המוביל בתחום האידוי.
                <br />
                עם נוכחות ביותר מ-30 מדינות ומיליוני משתמשים ברחבי העולם.
                <br />
                XVAPE מביא לישראל טכנולוגיה מוכחת במחיר נגיש.
              </p>
            </div>

            {/* Image — second in DOM = left side in RTL */}
            <div className="relative flex items-end justify-center h-[480px] lg:h-[560px]">
              {/* Sparkles */}
              <Sparkle className="absolute top-12 inset-e-12 w-4 h-4 text-white opacity-50" />
              <Sparkle className="absolute top-1/3 inset-s-10 w-3 h-3 text-white opacity-30" />
              <Sparkle className="absolute bottom-1/4 inset-e-1/3 w-2.5 h-2.5 text-white opacity-20" />

              {/* Bottom glow */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-20 blur-3xl rounded-full"
                style={{ background: "rgba(198,168,122,0.15)" }}
              />

              {/* Image placeholder */}
              <div
                className="relative z-10 w-72 h-[420px] rounded-2xl flex items-center justify-center border mb-0"
                style={{ background: "#111111", borderColor: "rgba(255,255,255,0.06)" }}
              >
                <span className="text-xs" style={{ color: "#eeeeee", opacity: 0.25 }}>
                  תמונת מוצר
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Store locator ── */}
      <section className="py-20 px-6 lg:px-12" style={{ background: "#0d0d0d" }}>
        <div className="max-w-7xl mx-auto">

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-black text-white text-center mb-12">
            היכן ניתן להשיג
          </h2>

          {/* Cards label */}
          <p className="text-xs font-medium mb-4 text-end" style={{ color: "#eeeeee", opacity: 0.4 }}>
            ניתן להשיג
          </p>

          {/* Store cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stores.map((store) => (
              <div
                key={store.id}
                className="rounded-2xl px-6 py-8 flex flex-col items-center text-center gap-3 border transition-colors hover:border-white/15"
                style={{ background: "#1a1a1a", borderColor: "rgba(255,255,255,0.07)" }}
              >
                {/* Icon */}
                <div className="h-12 flex items-center justify-center" style={{ color: "#c6a87a" }}>
                  {store.icon ?? (
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold border"
                      style={{ borderColor: "rgba(255,255,255,0.1)", color: "#eeeeee", opacity: 0.4 }}
                    >
                      לוגו
                    </div>
                  )}
                </div>

                {/* Store name */}
                <span className="font-bold text-white text-base">{store.name}</span>

                {/* Details */}
                <p className="text-xs leading-relaxed whitespace-pre-line" style={{ color: "#eeeeee", opacity: 0.45 }}>
                  {store.details}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
