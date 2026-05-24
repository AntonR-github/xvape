import Image from "next/image";

function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" />
    </svg>
  );
}

const stores = [
  {
    id: "online",
    name: "באתר",
    details: "משלוח עד הבית\nתוך 3-5 ימי עסקים",
    icon: "/assets/icn/truck.png",
  },
  {
    id: "store-1",
    name: "חנות",
    details: "פרטי החנות כתובת\nטלפון ופרטי קשר",
    icon: "/assets/icn/store.png",
  },
  {
    id: "store-2",
    name: "חנות",
    details: "פרטי החנות כתובת\nטלפון ופרטי קשר",
    icon: "/assets/icn/store.png",
  },
  {
    id: "store-3",
    name: "חנות",
    details: "פרטי החנות כתובת\nטלפון ופרטי קשר",
    icon: "/assets/icn/store.png",
  },
];

export default function BrandSection() {
  return (
    <>
      {/* ── Brand split ── */}
      {/* py-16 = 64px top/bottom — image uses -my-16 to bleed past it */}
      <section className="bg-black relative py-16 overflow-visible">

        {/* Full-width surface stripe behind the content */}
        <div className="absolute inset-x-0 top-16 bottom-16" style={{ background: "var(--color-surface)" }} />

        <div className="site-container px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* Text — right side in RTL, sits on top of the stripe */}
            <div className="flex flex-col items-start text-start py-14 px-4 order-first">
              <Image src="/assets/logo.svg" alt="XVAPE" width={60} height={28} className="h-5 w-auto" />
              <h2 className="mb-6" style={{ fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)"}}>המותג שמאחורי המכשיר</h2>
              <p className="paragraph" style={{ fontSize: "clamp(1.2rem, 1.9vw, 1.5rem)" }}>
                XVAPE הוא מותג ווופורייזרים העולמי המוביל בתחום האידוי.
                <br />
                עם נוכחות ביותר מ-30 מדינות ומיליוני משתמשים ברחבי העולם.
                <br />
                XVAPE מביא לישראל טכנולוגיה מוכחת במחיר נגיש.
              </p>
            </div>

            {/* Image — bleeds above and below stripe using -my-16 */}
            <div
              className="relative rounded-2xl overflow-hidden mt-16"
              style={{ minHeight: "540px" }}
            >
              <Sparkle className="absolute top-12 inset-e-12 w-4 h-4 text-white opacity-50 z-10" />
              <Sparkle className="absolute top-1/3 inset-s-10 w-3 h-3 text-white opacity-30 z-10" />
              <Sparkle className="absolute bottom-1/4 inset-e-1/3 w-2.5 h-2.5 text-white opacity-20 z-10" />
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-20 blur-3xl rounded-full z-0"
                style={{ background: "rgba(198,168,122,0.15)" }}
              />
              <Image
                src="/assets/img/brand-image.jpg"
                alt="XVAPE brand"
                fill
                className="object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Store locator ── */}
      <section className="py-20 px-6 lg:px-12" style={{ background: "#0d0d0d" }}>
        <div className="site-container">

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-regular text-white text-center mb-12">
            היכן ניתן להשיג
          </h2>
          
          {/* Store cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stores.map((store) => (
              <div
                key={store.id}
                className="rounded-2xl px-6 py-8 flex flex-col items-center text-center gap-3 border transition-colors hover:border-white/15"
                style={{ background: "#1a1a1a", borderColor: "rgba(255,255,255,0.07)" }}
              >
                {/* Icon */}
                <div className="h-14 flex items-center justify-center">
                  <Image src={store.icon} alt={store.name} width={64} height={64} className="h-12 w-auto icon-accent" />
                </div>

                {/* Store name */}
                <span className="font-bold text-white text-2xl">{store.name}</span>

                {/* Details */}
                <p className="text-lg leading-relaxed whitespace-pre-line paragraph">
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
