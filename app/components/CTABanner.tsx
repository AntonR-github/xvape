import Link from "next/link";
import Image from "next/image";

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" />
    </svg>
  );
}

export default function CTABanner() {
  return (
    <section className="bg-black overflow-hidden">
      <div className="site-container px-4 sm:px-6 lg:px-12">
        {/*
          Grid:
          - Mobile:  single column, image below text, no fixed min-height
          - Desktop: two columns, items vertically centred, 600px min-height
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:items-start lg:min-h-[780px]">

          {/* ── Text ── first in DOM = right side in RTL ── */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-start pt-10 pb-6 lg:py-16 gap-4 order-first mt-16">
            <h2
              className="font-normal text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 5.5vw, 3.75rem)" }}
            >
              מוכן להתחיל לאדות?
            </h2>

            <h3 className="title-h3">
              בחר את המכשיר שמתאים לך — משלוח עד הבית
            </h3>

            <Link
              href="/shop"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 font-normal text-black text-lg sm:text-xl transition-opacity hover:opacity-85 mt-2"
              style={{ background: "#ffffff" }}
            >
              כנס לחנות
              {/* Arrow points toward inline-start (right in RTL = "forward" in RTL reading) */}
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* ── Image ── second in DOM = left side in RTL ── */}
          {/*
            Height is responsive:
            - Mobile:  300px — compact, doesn't dominate the screen
            - sm:      420px — comfortable on large phones / small tablets
            - lg:      600px — matches the original design intent on desktop
          */}
          <div className="relative flex items-center justify-center h-[400px] sm:h-[560px] lg:h-[780px]">

            {/* Sparkles — hidden on mobile to reduce clutter */}
            <Sparkle className="hidden sm:block absolute top-10 inset-s-8 w-4 h-4 text-white opacity-55" />
            <Sparkle className="hidden sm:block absolute top-1/4 inset-e-10 w-3 h-3 text-white opacity-30" />
            <Sparkle className="absolute bottom-1/4 inset-s-1/4 w-2.5 h-2.5 text-white opacity-25" />
            <Sparkle className="absolute bottom-12 inset-e-1/3 w-3.5 h-3.5 text-white opacity-35" />

            {/*
              Side vignettes fade the image into the black background.
              bg-linear-to-e = toward inline-end (left in RTL) → fades right-to-left ✓
              bg-linear-to-s = toward inline-start (right in RTL) → fades left-to-right ✓
              Narrowed on mobile (w-8) so they don't eat too much of the smaller image.
            */}
            <div className="absolute inset-y-0 inset-s-0 w-8 sm:w-16 bg-linear-to-e from-black to-transparent z-10" />
            <div className="absolute inset-y-0 inset-e-0 w-8 sm:w-16 bg-linear-to-s from-black to-transparent z-10" />

            {/*
              Bottom vignette — helps blend image into whatever section follows.
              Only meaningful on mobile where the image sits above the next section.
            */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent z-10 lg:hidden" />

            <Image
              src="/assets/img/cta.jpg"
              alt="מוצר"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain product-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
