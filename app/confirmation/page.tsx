import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CheckCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-20 h-20">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" />
    </svg>
  );
}

export default function ConfirmationPage() {
  const orderNumber = `XV-${Math.floor(10000 + Math.random() * 90000)}`;

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-black">
        <section className="relative overflow-hidden min-h-[80vh] flex items-center justify-center px-6 py-20">

          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px]"
              style={{ background: "rgba(198,168,122,0.1)" }}
            />
          </div>

          {/* Sparkles */}
          <Sparkle className="absolute top-20 left-1/4 w-4 h-4 text-white opacity-30" />
          <Sparkle className="absolute top-1/3 right-16 w-3 h-3 text-white opacity-20" />
          <Sparkle className="absolute bottom-1/3 left-16 w-2.5 h-2.5 text-white opacity-25" />
          <Sparkle className="absolute bottom-20 right-1/4 w-3.5 h-3.5 text-white opacity-20" />

          <div className="relative flex flex-col items-center text-center gap-6 max-w-md">

            {/* Icon */}
            <div style={{ color: "#c6a87a" }}>
              <CheckCircleIcon />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl font-black text-white">
              ההזמנה התקבלה!
            </h1>

            {/* Order number */}
            <p className="text-base" style={{ color: "#eeeeee", opacity: 0.55 }}>
              מספר הזמנה:
              <span className="font-bold ms-2" style={{ color: "#c6a87a" }}>
                {orderNumber}
              </span>
            </p>

            {/* Message */}
            <p className="text-sm leading-relaxed" style={{ color: "#eeeeee", opacity: 0.5 }}>
              תודה על קנייתך! אישור הזמנה נשלח לאימייל שלך.
              <br />
              ההזמנה תגיע אליך תוך 3–5 ימי עסקים.
            </p>

            {/* Divider */}
            <div className="w-16 h-px my-2" style={{ background: "rgba(198,168,122,0.3)" }} />

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/shop"
                className="px-8 py-3 rounded-full text-sm font-bold text-black transition-opacity hover:opacity-85"
                style={{ background: "#c6a87a" }}
              >
                חזרה לחנות
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full text-sm font-semibold border transition-colors hover:bg-white/5"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "#eeeeee" }}
              >
                מעקב הזמנה
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
