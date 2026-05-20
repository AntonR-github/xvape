import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  featured?: boolean;
}

const posts: Post[] = [
  {
    id: "full-guide-herbs",
    title: "המדריך המלא לאידוי צמחי מרפא: מציאת השלווה הפנימית",
    excerpt:
      "גלו כיצד טכנולוגיה מודרנית פוגשת מסורות עתיקות כדי לייצר חוויית רוגע משולמת בחיי היומיום.",
    date: "15 בינואר, 2024",
    featured: true,
  },
  {
    id: "portable-comparison",
    title: "כלב הנסתרות: השוואת מכשירי האידוי הניידים",
    excerpt:
      "סקירה מעמיקה של המכשירים הניידים המובילים בשוק — ביצועים, עיצוב ומחיר פנים אל פנים.",
    date: "28 בינואר, 2024",
  },
  {
    id: "conduction-vs-convection",
    title: "מה ההבדל בין הולכת חום לקונבקציה?",
    excerpt:
      "הולכת חום מחממת במגע ישיר, בעוד קונבקציה עובדת עם זרימת אוויר חם לחימום אחיד ונקי יותר.",
    date: "5 בפברואר, 2024",
  },
  {
    id: "beginners-guide",
    title: "המדריך למתחיל — איך מתחילים לאדות?",
    excerpt:
      "כל מה שצריך לדעת כדי להתחיל נכון — מבחירת המכשיר ועד חוויית שימוש חלקה ונעימה.",
    date: "19 בינואר, 2024",
  },
  {
    id: "vaping-outdoors",
    title: "אידוי בטבע: המדריך לטייל",
    excerpt:
      "מדריך מקיף לאידוי בחוצות — בחירת הציוד הנכון, תחזוקה בשטח ושמירה על חוויה מיטבית.",
    date: "9 בפברואר, 2024",
  },
  {
    id: "flavor-guide",
    title: "הכרת הנפות: פרופיל טעם וארומה",
    excerpt:
      "דריכה לעולם הטעמים והארומות של צמחי מרפא — כיצד לזהות, להשוות ולמצוא את האהוב עליכם.",
    date: "12 בדצמבר, 2024",
  },
  {
    id: "cleaning-guide",
    title: "איך לנקות את הווופוריזר שלך?",
    excerpt:
      "שמירה על ניקיון המכשיר מבטיחה טעם נקי, ביצועים טובים יותר ואורך חיים ארוך יותר.",
    date: "26 בפברואר, 2024",
  },
];

function ArrowLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
  );
}

const featured = posts.find((p) => p.featured)!;
const regularPosts = posts.filter((p) => !p.featured);
const row1 = regularPosts.slice(0, 3);
const row2 = regularPosts.slice(3, 6);

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-black py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              הבלוג שלנו
            </h1>
            <p className="text-base" style={{ color: "#eeeeee", opacity: 0.5 }}>
              מגזין סגנון חיים, בריאות ורוגע. גלו את האיזון המושלם.
            </p>
          </div>

          {/* Featured post */}
          <div
            className="rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 mb-8"
            style={{ background: "#111111" }}
          >
            {/* Image — first in DOM = right side in RTL */}
            <div
              className="h-64 lg:h-auto flex items-center justify-center"
              style={{ background: "#1e1e1e" }}
            >
              <span className="text-xs" style={{ color: "#eeeeee", opacity: 0.2 }}>
                תמונת מאמר
              </span>
            </div>

            {/* Text — second in DOM = left side in RTL */}
            <div className="flex flex-col items-end text-end justify-center p-8 gap-4">
              <span className="text-xs" style={{ color: "#eeeeee", opacity: 0.4 }}>
                {featured.date}
              </span>
              <h2 className="text-2xl font-black text-white leading-snug">
                {featured.title}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#eeeeee", opacity: 0.55 }}>
                {featured.excerpt}
              </p>
              <Link
                href={`/blog/${featured.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold mt-2 transition-opacity hover:opacity-75"
                style={{ color: "#c6a87a" }}
              >
                קרא עוד
                <ArrowLeftIcon />
              </Link>
            </div>
          </div>

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
            {row1.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Row 2 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
            {row2.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2">
            <button
              className="w-8 h-8 rounded-full flex items-center justify-center border text-sm transition-colors hover:bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "#eeeeee" }}
              aria-label="עמוד הבא"
            >
              ‹
            </button>
            <span className="text-sm px-2" style={{ color: "#eeeeee", opacity: 0.4 }}>
              ...
            </span>
            {[3, 2].map((n) => (
              <button
                key={n}
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors hover:bg-white/5"
                style={{ color: "#eeeeee", opacity: 0.5 }}
              >
                {n}
              </button>
            ))}
            <button
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              style={{ background: "#c6a87a", color: "#000000" }}
            >
              1
            </button>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="group flex flex-col rounded-2xl overflow-hidden transition-opacity hover:opacity-90"
      style={{ background: "#111111" }}
    >
      {/* Image */}
      <div className="h-44 flex items-center justify-center" style={{ background: "#1e1e1e" }}>
        <span className="text-xs" style={{ color: "#eeeeee", opacity: 0.2 }}>
          תמונת מאמר
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col items-end text-end gap-2 p-5">
        <span className="text-xs" style={{ color: "#eeeeee", opacity: 0.4 }}>
          {post.date}
        </span>
        <h3 className="font-bold text-white text-sm leading-snug">
          {post.title}
        </h3>
        <p className="text-xs leading-relaxed" style={{ color: "#eeeeee", opacity: 0.5 }}>
          {post.excerpt}
        </p>
        <div
          className="inline-flex items-center gap-1.5 text-xs font-semibold mt-1"
          style={{ color: "#c6a87a" }}
        >
          קרא עוד
          <ArrowLeftIcon />
        </div>
      </div>
    </Link>
  );
}
