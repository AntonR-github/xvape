import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import HeroBar from "../components/HeroBar";

const trustBadges = [
  { icon: "/assets/icn/wdelivery.png", label: "משלוח מהיר", sub: "עד 5 ימי עסקים" },
  { icon: "/assets/icn/wheadshot.png", label: "שירות לקוחות", sub: "058-799-1234" },
  { icon: "/assets/icn/wshield.png", label: "רכישה מאובטחת", sub: "תשלום מוצפן ומאובטח" },
];

export default function PrivacyPolicyPage() {
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
              <h1 className="title-h2-black text-right">מדיניות הפרטיות</h1>
              <div className="flex justify-right mt-4">
                <div className="w-84 h-px bg-black"></div>
              </div>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">א. הקדמה</h2>
              <p className="text-black text-lg">
                הפרטיות של המבקרים באתר XVAPE.CO.IL חשובה לנו מאוד, ואנחנו מחויבים לשמרה. המדיניות זו מסבירה מה נעשה עם הפרטים האישיים שלכם. ההסכמה לשימוש שלנו בעוגיות (Cookies) בהתאם לתנאים של מדיניות זו בזמן הביקור הראשון באתר, מאפשרת לנו להשתמש בעוגיות בכל פעם שאתם מבקרים באתר.
              </p>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">ב. איסוף פרטים אישיים</h2>
              <p className="text-black text-lg mb-4">
                ייתכן שהסוגים הבאים של פרטים אישיים ייאספו, יאוחסנו, ויעשה בהם שימוש:
              </p>
              <ol className="list-decimal list-inside space-y-2 pr-4 text-black">
                <li className="text-black text-xl">מידע על המחשב שלכם, כולל כתובת ה-IP, מיקומכם הגאוגרפי, סוג הדפדפן ומערכת ההפעלה.</li>
                <li className="text-black text-xl">מידע על הביקורים והשימוש שלכם באתר, כולל מקור ההפניה, אורך הביקור, צפיות בעמודים, ונתיבי המעבר באתר.</li>
                <li className="text-black text-xl">מידע שהזנתם בזמן ההרשמה או יצירת פרופיל (שם, דוא"ל, כתובת, טלפון, ופרטי תעסוקה).</li>
                <li className="text-black text-xl">מידע הקשר לרכישות: שם, כתובת, מספר טלפון, כתובת דואר אלקטרוני, ופרטי כרטיס אשראי.</li>
                <li className="text-black text-xl">מידע שאתם מפרסמים באתר בכוונה לפרסמו באינטרנט (תגובות, חוות דעת).</li>
                <li className="text-black text-xl">כל סוג אחר של פרטים אישיים שאתם שולחים אלינו מרצונכם.</li>
              </ol>
            </div>

            <div>
              <h2 className="title-h2-black mb-4 text-black">ג. שימוש בפרטים האישיים שלכם</h2>
              <p className="text-black text-lg mb-4">בפרטים אישיים שנמסרו לנו ייעשה שימוש למטרות הבאות:</p>
              <ul className="list-disc list-inside space-y-2 pr-4">
                <li className="text-black text-xl">ניהול האתר והעסק, והתאמה אישית של האתר עבורכם.</li>
                <li className="text-black text-xl">אספקת סחורות ושירותים שרכשתם באתר.</li>
                <li className="text-black text-xl">שליחת חשבוניות, הצהרות, ותזכורות תשלום.</li>
                <li className="text-black text-xl">שליחת הודעות מסחריות שאינן שיווקיות (כגון עדכוני הזמנה).</li>
                <li className="text-black text-xl">שליחת ניוזלטרים ומסרים שיווקיים (בכפוף להסכמתכם, ועם אפשרות הסרה בכל עת).</li>
                <li className="text-black text-xl">שמירה על האתר מאובטח ומניעת הונאות.</li>
                <li className="text-black text-xl">אימות היענות לתנאי השירות של האתר.</li>
              </ul>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">ד. חשיפת פרטים אישיים</h2>
              <p className="text-black text-lg mb-4">
                אנחנו עשויים למסור את הפרטים האישיים שלכם לעובדים, מנהלים, ספקים או קבלני משנה שלנו במידה סבירה וכנדרש למטרות המצוינות במדיניות זו. כמו כן, נמסור מידע:
              </p>
              <ol className="list-decimal list-inside space-y-2 pr-4">
                <li className="text-black text-xl">לפי מה שנדרש מאתנו על פי חוק או בהקשר של הליך משפטי.</li>
                <li className="text-black text-xl">על מנת לבסס, להפעיל, או להגן על זכויותינו המשפטיות.</li>
                <li className="text-black text-xl">לרוכש פוטנציאלי של העסק שלנו.</li>
              </ol>
              <p className="text-black text-lg mt-4">
                אנו מתחייבים לא למסור את הפרטים האישיים שלכם לצד ג' לצורך השיווק הישיר שלו ללא הסכמתכם המפורשת.
              </p>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">ה. העברות נתונים בינלאומיות</h2>
              <p className="text-black text-lg">
                מידע שאנחנו אוספים עשוי להיות מאוחסן ומעובד במדינות בהן אנו או ספקי השירות שלנו פועלים (לדוגמה: שרתי ענן בארה"ב או אירופה). אתם מביעים הסכמה להעברות אלו.
              </p>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">ו. שמירת פרטים אישיים</h2>
              <ol className="list-decimal list-inside space-y-2 pr-4">
                <li className="text-black text-xl">פרטים אישיים שאנחנו מעבדים לא יישמרו יותר מכמה שנדרש עבור המטרה שלשמה נאספו.</li>
                <li className="text-black text-xl">אנו נשמור מסמכים המכילים נתונים אישיים לפי הנדרש על פי חוק, או אם לדעתנו המסמכים רלוונטיים להליך משפטי קיים או פוטנציאלי.</li>
              </ol>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">ז. אבטחת הפרטים האישיים שלכם</h2>
              <ol className="list-decimal list-inside space-y-2 pr-4">
                <li className="text-black text-xl">אנחנו ננקוט משנה זהירות ארגוני וטכני סביר על מנת למנוע אובדן או שימוש לרעה במידע.</li>
                <li className="text-black text-xl">המידע יאוחסן בשרתים מאובטחים המוגנים בסיסמה ובחומת אש.</li>
                <li className="text-black text-xl">העברות כספיות באתר מוגנות באמצעות טכנולוגיית הצפנה (SSL).</li>
                <li className="text-black text-xl">אתם אחראים על שמירת הסיסמה שלכם חסויה.</li>
              </ol>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">ח. תיקונים</h2>
              <p className="text-black text-lg">
                אנחנו עשויים לעדכן מדיניות זו מעת לעת. עליכם לבדוק את העמוד מדי פעם כדי לוודא שאתם מבינים כל שינוי.
              </p>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">ט. הזכויות שלכם</h2>
              <p className="text-black text-lg">
                אתם יכולים להורות לנו לספק לכם כל פרט מפרטיכם האישיים שאנו מחזיקים. אספקת פרטים אלה תהיה כפופה להצגת ראיות הולמות לזהותכם (כגון צילום תעודת זהות). ניתן להורות לנו בכל עת לא לעבד את המידע לצורכי שיווק.
              </p>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">י. אתרי צד ג'</h2>
              <p className="text-black text-lg">
                האתר כולל קישורים לאתרי צד ג'. אין לנו שליטה על מדיניות הפרטיות של אתרים אלו ואיננו אחראים עליהם.
              </p>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">יא. עוגיות (Cookies)</h2>
              <p className="text-black text-lg mb-4">
                האתר שלנו משתמש בעוגיות "עיקשות" ובעוגיות "פעולה". אנו משתמשים ב-Google Analytics וב-Google Adwords כדי לזהות מחשב בעת ביקור, לעקוב אחר המשתמשים, לשפר את נוחות השימוש ולנתח את ביצועי האתר.
              </p>
              <ul className="list-disc list-inside space-y-2 pr-4">
                <li className="text-black text-xl">באפשרותכם לחסום או למחוק עוגיות דרך הגדרות הדפדפן שלכם (כרום, פיירפוקס, אקספלורר וכו').</li>
                <li className="text-black text-xl">לתשומת לבכם: חסימת עוגיות עלולה לפגוע בחוויית הגלישה וביכולת לבצע רכישות באתר.</li>
              </ul>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">ליצירת קשר בנושאי פרטיות:</h2>
              <p className="text-black text-lg">
                ניתן לפנות אלינו בכתובת המרכבה 25, חולון, או דרך אמצעי ההתקשרות המופיעים באתר.
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