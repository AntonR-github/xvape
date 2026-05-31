import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import HeroBar from "../components/HeroBar";

const trustBadges = [
  { icon: "/assets/icn/wheadshot.png", label: "שירות לקוחות", sub: "058-799-1234" },
  { icon: "/assets/icn/wdelivery.png", label: "משלוח מהיר", sub: "עד 5 ימי עסקים" },
  { icon: "/assets/icn/wshield.png", label: "רכישה מאובטחת", sub: "תשלום מאובן ומאובטח" },
];

export default function AccessibilityPage() {
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
              <h2 className="title-h2-black mb-4">מאמצינו לנגישות</h2>
              <p className="text-black text-lg">
                רואה בחשיבות עליונה את מתן השירות השוויוני לכלל לקוחותיה, ובכלל זה לאנשים עם מוגבלויות. אנו פועלים מתוך אמונה כי לכל אדם מגיעה הזכות לחיות בעצמאות, בכבוד ובשוויון.
              </p>
              <p className="text-black text-lg mt-4">
                מטרתנו בהצהרה זו היא לייעל את השימוש באתר ולשפר את חוויית הגלישה עבור כלל האוכלוסייה, תוך עמידה בדרישות החוק.
              </p>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">התאמות הנגישות באתר</h2>
              <p className="text-black text-lg">
                התאמת הנגישות באתר בוצעה בהתאם לתקנה 35 בתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג 2013, לרמה AA, ובכפוף לשינויים והתאמות שבוצעו במסמך התקן הישראלי (ת"י 5568). האתר נבדק ונמצא תואם לדפדפנים המובילים: כרום (Chrome), פיירפוקס (FireFox), ספארי (Safari), אדג' (Edge) ומוזילה.
              </p>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">אמצעי הנגישות הקיימים באתר</h2>
              <ul className="list-disc list-inside space-y-2 pr-4">
                <li className="text-black text-xl">תאימות דפדפנים: תמיכה מלאה בכל הדפדפנים התקניים המקובלים.</li>
                <li className="text-black text-xl">שפה ותוכן: תכני האתר נכתבו בשפה ברורה ופשוטה תוך שימוש בפונטים קריאים.</li>
                <li className="text-black text-xl">מבניות: האתר בנוי בצורה היררכית הכוללת כותרות, פסקאות ורשימות להתמצאות קלה.</li>
                <li className="text-black text-xl">ניווט פשוט: התפריטים זמינים, ברורים וקבועים.</li>
                <li className="text-black text-xl">קישורים: כל הקישורים באתר מוגדרים בצורה ברורה ומסבירים לאן הגולש מועבר.</li>
                <li className="text-black text-xl">דילוג לתוכן: קיימים קישורים בתחילת הדף המאפשרים דילוג ישיר לתוכן המרכזי עבור משתמשי מקלדת.</li>
                <li className="text-black text-xl">תמיכה בטכנולוגיות מסייעות: הוספת תיאור טקסטואלי (Alt Text) לתמונות ואייקונים והטמעת חוקי ARIA לשיפור הדיוק בקוראי מסך.</li>
                <li className="text-black text-xl">רספונסיביות: התאמה מלאה לרזולוציות שונות (מחשב, טאבלט וסמארטפון).</li>
                <li className="text-black text-xl">שליטה במדיה: הוספת כפתורי עצרה והפעלה לגלריות סרטונים ותכנים נעים.</li>
              </ul>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">הנחיות להפעלה ושימוש</h2>
              <ul className="list-disc list-inside space-y-2 pr-4">
                <li className="text-black text-xl">שינוי תצוגה: ניתן להגדיל או להקטין את תצוגת האתר (Zoom) על ידי לחיצה על מקש ה-"CTRL" בשילוב גלגלת העכבר או המקשים "+" ו-"-". כל לחיצה משנה את התצוגה ב-10%.</li>
                <li className="text-black text-xl">גודל גופן: ניתן לשנות את גודל הגופן ישירות דרך תפריט הנגישות המוטמע באתר.</li>
                <li className="text-black text-xl">ניווט מקלדת: גולשים ללא עכבר יכולים לנווט באתר באמצעות מקש ה-"TAB" (מעבר בין רכיבים) ומקש ה-"Enter" (להפעלת קישורים וכפתורים).</li>
                <li className="text-black text-xl">מניעת הבהובים: האתר אינו כולל תכנים מהבהבים או רוטטים העלולים לגרום לאי-נוחות.</li>
              </ul>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">התאמה למוגבלי ראייה ושמיעה</h2>
              <p className="text-black text-lg">
                האתר מותאם לעבודה עם מגדילי ראות בסיסיים, תוכנות זיהוי קולי וחבילות הנגישות המובנות של מערכות ההפעלה (Windows/Mac/Android/iOS).
              </p>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">סייגים לנגישות</h2>
              <p className="text-black text-lg">
                אנו עושים מאמצים כבירים לוודא שכלל דפי האתר יהיו מונגשים. עם זאת, ייתכן וקיימים דפים או חלקים ספציפיים שטרם הונגשו במלואם, או שטרם נמצא עבורם פתרון טכנולוגי מתאים. כמו כן, מודעות חיצוניות או תכנים המוזנים על ידי צד ג' (כגון מפרסמים) עשויים שלא להיות מונגשים בצורה מלאה.
              </p>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">נתקלתם בבעיה? אנחנו כאן לסייע!</h2>
              <p className="text-black text-lg">
                אם במהלך הגלישה נתקלתם בקושי בנושא נגישות, נשמח לקבל מכם משוב כדי שנוכל לתקן ולשפר.
              </p>
            </div>

            <div>
              <h2 className="title-h2-black mb-4">פרטי אחראי נגישות בחברה:</h2>
              <ul className="list-disc list-inside space-y-2 pr-4">
                <li className="text-black text-xl">שם: רועי מזרחי</li>
                <li className="text-black text-xl">אימייל: realleafherbs@gmail.com</li>
              </ul>
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