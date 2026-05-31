import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative w-full min-h-[65vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-black">

        {/* Background image */}
        <Image
          src="/assets/img/herobg2.jpg"
          alt="hero background"
          fill
          priority
          quality={100}
          className="object-cover sm:object-contain object-center select-none pointer-events-none"
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.78) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center gap-4 sm:gap-6 px-4 sm:px-6 py-10 w-full max-w-4xl mx-auto">

          {/* Logo */}
          <Image
            src="/assets/logo2.svg"
            alt="XVAPE"
            width={480}
            height={220}
            className="w-44 sm:w-72 lg:w-[420px] h-auto mb-1 sm:mb-2 drop-shadow-2xl"
            priority
          />

          {/* Heading */}
          <h1
            className="font-semibold text-white tracking-wide"
            style={{
              fontSize: "clamp(1.4rem, 5vw, 3rem)",
              lineHeight: 1.2,
              letterSpacing: "0.04em",
            }}
          >
            מכשירי אידוי מתקדמים
          </h1>

          {/* Subtitle */}
          <p
            className="font-semibold sm:whitespace-nowrap text-center px-2"
            style={{
              fontSize: "clamp(1.2rem, 3vw, 2.6rem)",
              lineHeight: 1.6,
              color: "#c6a87a",
              letterSpacing: "0.02em",
              maxWidth: "90vw",
            }}
          >
            וופורייזרים במגוון דגמים, בעיצוב חדשני ובקרת חום מדויקת
          </p>

          {/* Buttons */}
          <div className="flex flex-row items-center justify-center gap-3 mt-2 sm:mt-4">

            {/* Primary — כנס לחנות */}
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-3 sm:py-4 text-black text-sm sm:text-base font-regular transition-all hover:bg-gray-100"
              style={{
                border: "1.5px solid rgba(255,255,255,0.75)",
                background: "#ffffff",
                minWidth: "150px",
              }}
            >
              כנס לחנות
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 shrink-0">
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            {/* Secondary — השוואת מודלים */}
            <Link
              href="/compare"
              className="inline-flex items-center justify-center px-6 sm:px-10 py-3 sm:py-4 text-white text-sm sm:text-base font-regular transition-all hover:bg-white/10"
              style={{
                border: "1.5px solid rgba(255,255,255,0.75)",
                background: "rgba(0,0,0,0.15)",
                backdropFilter: "blur(4px)",
                boxShadow: "0 0 12px rgba(255,255,255,0.15), inset 0 0 8px rgba(255,255,255,0.04)",
                minWidth: "150px",
              }}
            >
              השוואת מודלים
            </Link>
          </div>

        </div>
      </section>

      {/* ── Tech section ── */}
      <section className="py-10 mb-16">
        <div className="site-container px-6 lg:px-12">
          <h2 className="title-h2 sm:text-4xl text-start mb-4">
            הטכנולוגיה שמשנה את הצריכה
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="gradient-border rounded-2xl p-7 flex flex-col items-center text-center">
              <div className="mb-6">
                <Image
                  src="/assets/icn/vape-icon.png"
                  alt="vape icon"
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="title-h3 mb-4">מה זה וופורייזר</h3>
              <p className="paragraph mb-4">
                וופוריזר הוא מכשיר שמחמם צמח קנאביס לטמפרטורה מדויקת - מספיק חם
                כדי לשחרר את החומרים הפעילים, אבל לא מספיק כדי לשרוף. התוצאה היא
                אד נקי במקום עשן.
              </p>
            </div>

            {/* Card 2 */}
            <div className="gradient-border rounded-2xl p-7 flex flex-col items-center text-center">
              <div className="mb-6">
                <Image
                  src="/assets/icn/vaping-icon.png"
                  alt="vape icon"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="title-h3 mb-4">למה לאדות ולא לשרוף?</h3>
              <p className="paragraph mb-4">שריפה מגיעה ל-900 מעלות ומשמידה חלק גדול מהחומרים הפעילים תוך יצירת עשן.
                אידוי מתרחש בין 170 ל- 220 מעלות, ללא עשן וללא בערה.
              </p>
            </div>

            {/* Card 3 */}
            <div className="gradient-border rounded-2xl p-7 flex flex-col items-center text-center">
              <div className="mb-6">
                <Image
                  src="/assets/icn/coil-icon.png"
                  alt="vape icon"
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="title-h3 mb-4">סוגי אידוי</h3>
              <p className="paragraph mb-4">
                הולכת חום - המכשיר מחמם את הצמח ישירות דרך מגע. חימום מהיר, פשוט
                לשימוש. +Lanza · Aria קונביקציה - אוויר חם עובר דרך הצמח ומחמם
                אותו בצורה אחידה. תוצאה עמוקה יותר, טעם מלא יותר. Fog Pro ·
                Roffu
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
