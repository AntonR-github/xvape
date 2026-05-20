import Link from "next/link";

function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" />
    </svg>
  );
}

export default function CTABanner() {
  return (
    <section className="bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[340px]">

          {/* Text — first in DOM = right side in RTL */}
          <div className="flex flex-col items-end text-end py-16 gap-4 order-first">
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              מוכן להתחיל לאדות?
            </h2>
            <p className="text-base" style={{ color: "#eeeeee", opacity: 0.6 }}>
              בחר את המכשיר שמתאים לך — משלוח עד הבית
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center px-7 py-3 rounded-full text-sm font-semibold border transition-colors hover:bg-white/5 mt-2"
              style={{ color: "#c6a87a", borderColor: "#c6a87a" }}
            >
              כנס לחנות
            </Link>
          </div>

          {/* Image — second in DOM = left side in RTL */}
          <div className="relative flex items-center justify-center h-[340px]">
            {/* Sparkles */}
            <Sparkle className="absolute top-10 inset-s-8 w-4 h-4 text-white opacity-55" />
            <Sparkle className="absolute top-1/4 inset-e-10 w-3 h-3 text-white opacity-30" />
            <Sparkle className="absolute bottom-1/4 inset-s-1/4 w-2.5 h-2.5 text-white opacity-25" />
            <Sparkle className="absolute bottom-12 inset-e-1/3 w-3.5 h-3.5 text-white opacity-35" />

            {/* Vignette sides */}
            <div className="absolute inset-y-0 inset-s-0 w-16 bg-linear-to-e from-black to-transparent z-10" />
            <div className="absolute inset-y-0 inset-e-0 w-16 bg-linear-to-s from-black to-transparent z-10" />

            {/* Image placeholder */}
            <div
              className="w-64 h-72 rounded-2xl flex items-center justify-center border"
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
  );
}
