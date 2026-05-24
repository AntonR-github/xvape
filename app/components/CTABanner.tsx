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
      <div className="site-container px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start min-h-[600px]">
          {/* Text — first in DOM = right side in RTL */}
          <div className="flex flex-col items-start text-start mt-12 py-16 gap-4 order-first">
            <h2 className="text-5xl sm:text-6xl font-regular text-white leading-tight">
              מוכן להתחיל לאדות?
            </h2>
            <h3 className="title-h3">
              בחר את המכשיר שמתאים לך — משלוח עד הבית
            </h3>
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-regular text-black text-xl transition-opacity hover:opacity-85"
              style={{ background: "var(--color-accent-gradient)" }}
            >
              כנס לחנות
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* Image — second in DOM = left side in RTL */}
          <div className="relative flex items-center justify-center h-[600px]">
            {/* Sparkles */}
            <Sparkle className="absolute top-10 inset-s-8 w-4 h-4 text-white opacity-55" />
            <Sparkle className="absolute top-1/4 inset-e-10 w-3 h-3 text-white opacity-30" />
            <Sparkle className="absolute bottom-1/4 inset-s-1/4 w-2.5 h-2.5 text-white opacity-25" />
            <Sparkle className="absolute bottom-12 inset-e-1/3 w-3.5 h-3.5 text-white opacity-35" />

            {/* Vignette sides */}
            <div className="absolute inset-y-0 inset-s-0 w-16 bg-linear-to-e from-black to-transparent z-10" />
            <div className="absolute inset-y-0 inset-e-0 w-16 bg-linear-to-s from-black to-transparent z-10" />

            {/* CTA image */}
            <Image
              src="/assets/img/cta-image.jpg"
              alt="מוצר"
              width={600}
              height={600}
              className="object-contain w-full h-full max-h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
