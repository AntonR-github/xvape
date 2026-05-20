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

export default function Hero() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-black overflow-hidden min-h-full mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-full">

            {/* Text — first child = right side in RTL */}
            <div className="flex flex-col items-end text-start justify-start pt-2 pb-24 pe-28 order-first">
              <h1 className="mb-5">
                הפתרון המתקדם
                <br />
                לבערה הישירה
              </h1>
              <p className="text-2xl mb-10 max-w-lg" style={{ color: "white" }}>
                טכנולוגיית אידוי חכמה שמוציאה יותר בכל שאיפה
              </p>
              <div className="flex items-center gap-3 flex-wrap justify-end w-full">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold text-black text-sm transition-opacity hover:opacity-85"
                  style={{ background: "#c6a87a" }}
                >
                  כנס לחנות
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  href="/compare"
                  className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-sm text-white border transition-colors hover:bg-white/5"
                  style={{ borderColor: "rgba(255,255,255,0.3)" }}
                >
                  השוואת מודלים
                </Link>
              </div>
            </div>

            {/* Image — second child = left side in RTL */}
            <div className="relative flex items-end justify-center overflow-hidden">
              {/* Sparkle stars */}
              <Sparkle className="absolute top-20 end-8 w-5 h-5 text-white opacity-60" />
              <Sparkle className="absolute top-1/3 start-6 w-3.5 h-3.5 text-white opacity-35" />
              <Sparkle className="absolute bottom-1/3 end-16 w-2.5 h-2.5 text-white opacity-25" />
              <Sparkle className="absolute bottom-16 start-1/3 w-4 h-4 text-white opacity-40" />

              {/* Bottom glow */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 blur-3xl rounded-full"
                style={{ background: "rgba(198,168,122,0.2)" }}
              />

              {/* Hero image — fills the column height */}
              <Image
                src="/assets/img/hp.png"
                alt="מכשיר וייפינג"
                width={640}
                height={800}
                className="relative z-10 object-contain object-bottom drop-shadow-2xl max-h-screen w-auto"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Tech section ── */}
      <section className="bg-black py-20 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white text-end mb-12">
            הטכנולוגיה שמשנה את הצריכה
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div
              className="rounded-2xl p-7 border flex flex-col items-end text-end"
              style={{ background: "#121212", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="mb-4 opacity-60">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#c6a87a" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">סוגי אידוי</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#eeeeee", opacity: 0.5 }}>
                הכר את ההבדל בין אידוי מלא, חלקי ועמוק — ואיך כל אחד משפיע על החוויה, הטעם והיעילות שלך.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="rounded-2xl p-7 border flex flex-col items-end text-end"
              style={{ background: "#121212", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="mb-4 opacity-60">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#c6a87a" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">למה לדאות ולא לשרוף?</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#eeeeee", opacity: 0.5 }}>
                שריפה מגיעה ל-900 מעלות ומשמידה חלק גדול מהחומרים הפעילים. אידוי עובד בין 170–220 מעלות — יעיל יותר וחף מבלי שאיפה.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="rounded-2xl p-7 border flex flex-col items-end text-end"
              style={{ background: "#121212", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="mb-4 opacity-60">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#c6a87a" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">מה זה וופרייזר</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#eeeeee", opacity: 0.5 }}>
                וופרייזר הוא מכשיר שמחמם את הצמח מבקרים לטמפרטורה מדויקת — משחרר את החומרים הפעילים, אבל לא מפסק את החשיפה הרעה לעשן.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
