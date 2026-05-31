import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import HeroBar from "../components/HeroBar";

const trustBadges = [
  { icon: "/assets/icn/wdelivery.png", label: "משלוח מהיר", sub: "עד 5 ימי עסקים" },
  { icon: "/assets/icn/wheadshot.png", label: "שירות לקוחות", sub: "058-799-1234" },
  { icon: "/assets/icn/wshield.png", label: "רכישה מאובטחת", sub: "תשלום מאובן ומאובטח" },
];

export default function ShippingPage() {
  return (
    <>
      <Navbar />

      {/* Hero Bar */}
      <HeroBar
        title="הפתרון המתקדם לבערה הישירה"
        subtitle="טכנולוגיית אידוי חכמה שמוציאה יותר בכל שאיפה"
        imageSrc="/assets/img/hprod.jpg"
      />

      <main className="flex-1 bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
        <div className="site-container max-w-4xl mx-auto">
          <div className="privacy-content space-y-8">

                   {/* Page Title */}
            <div className="site-container max-w-4xl mx-auto mt-12 mb-8">
              <h1 className="title-h2-black text-right">מדיניות המשלוחים</h1>
              <div className="flex justify-right mt-4">
                <div className="w-84 h-px bg-black"></div>
              </div>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">מהירות הטיפול בהזמנה</h2>
              <p className="text-black text-lg">
                הזמנות עד השעה 14:00: כל הזמנה שתתקבל עד השעה 14:00 ביום עסקים רגיל (א'-ה'), תארז ותימסר באותו היום לחברת השליחויות ותיקלט במחסן ההפצה שלה.
              </p>
              <p className="text-black text-lg mt-4">
                מעקב אחר משלוח: ברגע שהחבילה נקלטת אצל חברת השליחויות, תקבלו הודעת SMS למספר הטלפון שהזנתם, עם קישור למעקב בזמן אמת אחר מיקום המשלוח.
              </p>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">זמני אספקה</h2>
              <p className="text-black text-lg">
                השאיפה שלנו: ברוב המקרים, המשלוח ייצא עוד באותו הערב לאזור החלוקה הקרוב אליכם ויימסר לכם כבר ביום העסקים למחרת.
              </p>
              <p className="text-black text-lg mt-4">
                התחייבות: אנו מתחייבים לאספקת המוצרים עד 3 ימי עסקים (ימי עסקים אינם כוללים את יום ההזמנה, ימי שישי, שבת, ערבי חג וחג).
              </p>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">שירות ובירורים</h2>
              <p className="text-black text-lg">
                במידה וההזמנה לא הגיעה אליכם בתוך 3 ימי עסקים, או אם יש לכם שאלה בנוגע למשלוח, צוות שירות הלקוחות שלנו זמין עבורכם:
              </p>
              <ul className="list-disc list-inside space-y-2 pr-4 mt-4">
                <li className="text-black text-xl">טלפון/וואטסאפ: 054-719-9390</li>
                <li className="text-black text-xl">שעות פעילות: א'-ה' בין השעות 9:00-15:00</li>
              </ul>
              <p className="subtitle text-lg mt-4">
                לישובים מרוחקים (רמת הגולן, אילת, יישובי הערבה ומעבר לקו הירוק), ייתכנו עיכובים קלים מעבר ל-3 ימי עסקים.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Branding element */}
      <div className="text-center pb-10 mt-6">
        <p className="text-white text-xl">B2B MARKET LTD</p>
        <p className="text-white font-bold text-3xl sm:text-3xl mb-2">יבואנית בלעדית של</p>
        <div className="flex items-center justify-center gap-2">
          <img
            src="/assets/logo.svg"
            alt="לוגו"
            className="h-6 sm:h-6 w-auto"
          />
          <p className="text-white font-bold text-3xl sm:text-3xl">בישראל</p>
        </div>
      </div>

      {/* Trust badges */}
      <div className="border-t py-14 px-4 bg-black">
        <div className="flex flex-col sm:flex-row justify-center text-center items-center gap-8 sm:gap-52">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex flex-col items-center gap-2 w-50">
              <Image src={badge.icon} alt={badge.label} width={62} height={62} className="w-12 h-12 sm:w-16 sm:h-16" />
              <span className="text-lg sm:text-2xl font-semibold text-white">{badge.label}</span>
              <span className="text-base sm:text-2xl font-light text-white">{badge.sub}</span>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}