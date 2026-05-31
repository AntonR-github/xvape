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

const benefits = [
  {
    id: "quality",
    title: "איכות ללא פשרות",
    subtitle: "מוצרים בסטנדרט גבוה ביותר",
    icon: (
      <Image src="/assets/icn/checkmark.png" alt="checkmark" width={52} height={52} className="w-13 h-13" />
    ),
  },
  {
    id: "discreet",
    title: "משלוח דיסקרטי",
    subtitle: "אריזה דיסקרטית ושירות מהיר",
    icon: (
   <Image src="/assets/icn/package.png" alt="checkmark" width={52} height={52} className="w-13 h-13" />
    ),
  },
  {
    id: "shipping",
    title: "משלוח חינם",
    subtitle: "בקנייה מעל ₪199 לכל הארץ",
    icon: (
   <Image src="/assets/icn/delivery.png" alt="checkmark" width={52} height={52} className="w-13 h-13" />
    ),
  },
  {
    id: "warranty",
    title: "אחריות מלאה",
    subtitle: "שביעות רצון מלאה או החזר כספי",
    icon: (
    <Image src="/assets/icn/warranty.png" alt="checkmark" width={52} height={52} className="w-13 h-13" />
    ),
  },
];

export default function BrandSection() {
  return (
    <>
      {/* ── Brand split ── */}
      <section className="bg-black relative py-16 overflow-x-hidden">

        <div
          className="absolute inset-x-0 top-16 bottom-16"
        />

        <div className="site-container px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            <div className="flex flex-col items-start text-start py-8 lg:py-14 px-2 sm:px-4 order-first">
              {/* Logo — explicit bottom margin so spacing doesn't depend solely on h2 */}
              <Image
                src="/assets/logo.svg"
                alt="XVAPE"
                width={60}
                height={28}
                className="h-5 w-auto mb-4"
              />

              <h2
                className="mb-4 lg:mb-6"
                style={{ fontSize: "clamp(1.75rem, 3.8vw, 3.6rem)" }}
              >
                המותג שמאחורי המכשיר
              </h2>

              <p
                className="paragraph"
                style={{ fontSize: "clamp(1rem, 1.9vw, 1.5rem)" }}
              >
                XVAPE הוא מותג ווופורייזרים העולמי המוביל בתחום האידוי.
                <br />
                עם נוכחות ביותר מ-30 מדינות ומיליוני משתמשים ברחבי העולם.
                <br />
                XVAPE מביא לישראל טכנולוגיה מוכחת במחיר נגיש.
              </p>
            </div>

            <div
              className="
                relative rounded-2xl overflow-hidden order-last
                my-0 lg:-my-16
                min-h-[420px] sm:min-h-[600px] lg:min-h-[820px]
              "
            >
              <Sparkle className="absolute top-12 inset-e-12 w-4 h-4 text-white opacity-50 z-10" />
              <Sparkle className="absolute top-1/3 inset-s-10 w-3 h-3 text-white opacity-30 z-10" />
              <Sparkle className="absolute bottom-1/4 inset-e-1/3 w-2.5 h-2.5 text-white opacity-20 z-10" />

              {/* Warm glow behind the product */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-20 blur-3xl rounded-full z-0"
              />

              <Image
                src="/assets/img/lanzah.jpg"
                alt="XVAPE brand"
                fill
                className="object-contain product-image"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Benefits bar ── */}
      <section className="bg-white py-8 sm:py-10 px-4 sm:px-6 lg:px-12">
        <div className="site-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-x-reverse divide-gray-200">
            {benefits.map((b) => (
              <div key={b.id} className="flex flex-col items-center text-center gap-2 px-4 sm:px-6 py-4">
                {/* Icon */}
                <div className="mb-1 text-black">
                  {b.icon}
                </div>
                {/* Title */}
                <span className="font-bold text-black text-lg sm:text-xl leading-tight">
                  {b.title}
                </span>
                {/* Subtitle */}
                <p className="text-base sm:text-lg text-black">
                  {b.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
