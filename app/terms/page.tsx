import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import HeroBar from "../components/HeroBar";

const trustBadges = [
  { icon: "/assets/icn/wdelivery.png", label: "משלוח מהיר", sub: "עד 5 ימי עסקים" },
  { icon: "/assets/icn/wheadshot.png", label: "שירות לקוחות", sub: "058-799-1234" },
  { icon: "/assets/icn/wshield.png", label: "רכישה מאובטחת", sub: "תשלום מאובן ומאובטח" },
];

export default function TermsPage() {
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
              <h1 className="title-h2-black text-right">הצהרת נגישות</h1>
              <div className="flex justify-right mt-4">
                <div className="w-84 h-px bg-black"></div>
              </div>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">1. כללי ומדיניות שימוש</h2>
              <p className="text-black text-lg">
                אתר האינטרנט מופעל ע"י חברת ביטובי מרקט לעסקים (להלן: "החברה"). השימוש והקנייה באתר כפופה לתנאי תקנון זה. כל רכישה באתר מהווה הסכמה מלאה ובלתי מסויגת לתנאי התקנון וכן הסכמה להתקשרות משפטית בין הצדדים.
              </p>
              <p className="text-black text-lg mt-4">
                כתובת משרדי החברה: המרכבה 25, חולון, ישראל. המבצע רכישה באתר מצהיר כי הוא מכיר את כללי התקנון ומסכים לתחולתם. לא תהיה לו או למי מטעמו כל טענה או תביעה כנגד ביטובי מרקט לעסקים, למעט טענות הנוגעות להפרת התחייבויות החברה המפורטות בתקנון זה.
              </p>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">2. תנאי סף לרכישה</h2>
              <p className="text-black text-lg">
                רשאי לרכוש באתר כל אדם שמלאו לו 18 שנים (או חברה הרשומה כדין בישראל), המחזיק בכתובת דואר אלקטרוני פעילה ובכרטיס אשראי תקף של אחת מחברות האשראי הפועלות בישראל.
              </p>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">3. מחירים, מע"מ ותשלום</h2>
              <ul className="list-disc list-inside space-y-2 pr-4">
                <li className="text-black text-xl">כל המחירים באתר מופיעים בשקלים חדשים.</li>
                <li className="text-black text-xl">אלא אם צוין אחרת במפורש, המחירים באתר כוללים מע"מ כחוק.</li>
                <li className="text-black text-xl">החברה רשאית לעדכן את מחירי המוצרים ותעריפי המשלוחים מעת לעת ללא צורך בהודעה מוקדמת.</li>
              </ul>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">4. אספקה, בדיקת משלוח ושירות לקוחות</h2>
              <ul className="list-disc list-inside space-y-2 pr-4">
                <li className="text-black text-xl">על הלקוח לבדוק את תכולת המשלוח עם קבלתו ולבצע השוואה להזמנה ולחשבונית.</li>
                <li className="text-black text-xl">במקרה של אי-התאמה במוצרים או חוסר שביעות רצון, על הלקוח להודיע למוקד שירות הלקוחות בתוך 24 שעות מרגע האספקה.</li>
                <li className="text-black text-xl">מוקד השירות יתאם עם הלקוח השלמה, החלפה, החזרה או זיכוי כספי בהתאם לדין ובכפוף למדיניות החברה.</li>
                <li className="text-black text-xl">תמונות המוצרים באתר הינן להמחשה בלבד וייתכנו שינויים קלים בין מראה המוצר בתמונה לבין המוצר בפועל.</li>
              </ul>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">5. ביטל עסקה והחזרת מוצרים</h2>
              <ul className="list-disc list-inside space-y-2 pr-4">
                <li className="text-black text-xl">הלקוח רשאי לבטל הזמנה בהתאם להוראות חוק הגנת הצרכן, התשמ"א – 1981 (להלן: "חוק הגנת הצרכן").</li>
                <li className="text-black text-xl">ניתן לבטל עסקה לרכישת מוצר עד 14 יום ממועד קבלתו, בתנאי שהמוצר יוחזר באריזתו המקורית ושלא נעשה בו שימוש.</li>
                <li className="text-black text-xl">ביטל הזמנה ייעשה בכתב בלבד: באמצעות האתר, הוואטסאפ או פנייה טלפונית למוקד.</li>
                <li className="text-black text-xl">החזרת המוצר תתבצע למשרדי החברה על חשבון הלקוח. במידה והלקוח יבקש איסוף על ידי החברה, הוא יישא בעלויות דמי המשלוח.</li>
              </ul>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">6. זכות החברה לבטל הזמנה</h2>
              <p className="text-black text-lg">
                ביטובי מרקט לעסקים רשאית לבטל הזמנה מכל סיבה שהיא (לרבות חוסר במלאי, טעות במחיר או תקלה טכנית), תוך עדכון הלקוח. החברה לא תהיה אחראית לכל נזק ישיר או עקיף שייגרם ללקוח כתוצאה מביטול זה.
              </p>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">7. פרטיות, מאגר מידע ודיוור ישיר (חוק הספאם)</h2>
              <ul className="list-disc list-inside space-y-2 pr-4">
                <li className="text-black text-xl">בעת הרישום לאתר או ביצוע רכישה, הלקוח מאשר לחברה לשמור את פרטיו במאגר המידע של החברה לצורך תפעול ההזמנות.</li>
                <li className="text-black text-xl">הלקוח נותן בזאת את הסכמתו המפורשת לקבל מהחברה דברי פרסומת, עדכונים, מבצעים ומידע שיווקי באמצעות דואר אלקטרוני, SMS או כל אמצעי תקשורת אחר.</li>
                <li className="text-black text-xl">הלקוח רשאי להודיע בכל עת על רצונו להסיר את עצמו מרשימת התפוצה באמצעות כפתור ה"הסר" בגוף ההודעה או פנייה לשירות הלקוחות.</li>
              </ul>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">8. הגבלת אחריות</h2>
              <ul className="list-disc list-inside space-y-2 pr-4">
                <li className="text-black text-xl">ביטובי מרקט לעסקים לא תהיה אחראית לאיחורים באספקה הנובעים מכוח עליון (מלחמה, מצב חירום, פגעי מזג אוויר, שביתות וכו') או מאירועים שאינם בשליטתה.</li>
                <li className="text-black text-xl">החברה אינה אחראית לנזקים הנובעים מתקלות טכניות בחומרה, תוכנה או בתקשורת האינטרנט.</li>
                <li className="text-black text-xl">בכל מקרה, חבות החברה לא תעלה על סכום המוצרים שהוזמנו ושולמו בפועל על ידי הלקוח.</li>
              </ul>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">9. הצהרה בריאותית (דיסקליימר)</h2>
              <p className="text-black text-lg">
                התכנים המופיעים באתר (במידה קיימים) אינם מהווים ייעוץ רפאוי או תחליף להתייעצות עם איש מקצוע. השימוש במוצרים הינו על אחריות הלקוח בלבד, ומומלץ להיוועץ ברופא לפני השימוש בתוספים או מוצרים ייעודיים.
              </p>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">10. קניין רוחני</h2>
              <p className="text-black text-lg">
                כל זכויות היוצרים והקניין הרוחני באתר, לרבות מבנה האתר, העיצוב הגרפי, הטקסטים, התמונות, סרטוני הווידאו והסימנים המסחריים, שייכים בלעדית לביטובי מרקט לעסקים. חל איסור מוחלט להעתיק, להפיץ או להשתמש בתכנים אלו ללא אישור מפורש בכתב.
              </p>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">11. סמכות שיפוט</h2>
              <p className="text-black text-lg">
                על תקנון זה יחולו חוקי מדינת ישראל בלבד. סמכות השיפוט הבלעדית בכל עניין הנוגע לשימוש באתר או לתקנון זה תהיה נתונה לבתי המשפט המוסמכים במחוז תל אביב-יפו או במחוז המרכז.
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