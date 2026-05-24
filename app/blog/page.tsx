import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  featured?: boolean;
}

const blogImages = [
  "/assets/img/blog1.png",
  "/assets/img/blog2.png",
  "/assets/img/blog3.jpg",
];

const posts: Post[] = [
  {
    id: "full-guide-herbs",
    title: "המדריך המלא לאידוי צמחי מרפא: מציאת השלווה הפנימית",
    excerpt:
      "גלו כיצד טכנולוגיה מודרנית פוגשת מסורות עתיקות כדי לייצר חוויית רוגע משולמת בחיי היומיום.",
    date: "15 בינואר, 2024",
    image: blogImages[0],
    featured: true,
  },
  {
    id: "portable-comparison",
    title: "כלב הנסתרות: השוואת מכשירי האידוי הניידים",
    excerpt:
      "סקירה מעמיקה של המכשירים הניידים המובילים בשוק — ביצועים, עיצוב ומחיר פנים אל פנים.",
    date: "28 בינואר, 2024",
    image: blogImages[1],
  },
  {
    id: "conduction-vs-convection",
    title: "מה ההבדל בין הולכת חום לקונבקציה?",
    excerpt:
      "הולכת חום מחממת במגע ישיר, בעוד קונבקציה עובדת עם זרימת אוויר חם לחימום אחיד ונקי יותר.",
    date: "5 בפברואר, 2024",
    image: blogImages[2],
  },
  {
    id: "beginners-guide",
    title: "המדריך למתחיל — איך מתחילים לאדות?",
    excerpt:
      "כל מה שצריך לדעת כדי להתחיל נכון — מבחירת המכשיר ועד חוויית שימוש חלקה ונעימה.",
    date: "19 בינואר, 2024",
    image: blogImages[0],
  },
  {
    id: "vaping-outdoors",
    title: "אידוי בטבע: המדריך לטייל",
    excerpt:
      "מדריך מקיף לאידוי בחוצות — בחירת הציוד הנכון, תחזוקה בשטח ושמירה על חוויה מיטבית.",
    date: "9 בפברואר, 2024",
    image: blogImages[1],
  },
  {
    id: "flavor-guide",
    title: "הכרת הנפות: פרופיל טעם וארומה",
    excerpt:
      "דריכה לעולם הטעמים והארומות של צמחי מרפא — כיצד לזהות, להשוות ולמצוא את האהוב עליכם.",
    date: "12 בדצמבר, 2024",
    image: blogImages[2],
  },
  {
    id: "cleaning-guide",
    title: "איך לנקות את הווופוריזר שלך?",
    excerpt:
      "שמירה על ניקיון המכשיר מבטיחה טעם נקי, ביצועים טובים יותר ואורך חיים ארוך יותר.",
    date: "26 בפברואר, 2024",
    image: blogImages[0],
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
        <div className="site-container">

          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="title-h2 mb-4">
              הבלוג שלנו
            </h2>
            <p className="text-2xl font-light">
              מגזין סגנון חיים, בריאות ורוגע. גלו את האיזון המושלם.
            </p>
          </div>

          {/* Featured post */}
          <div
            className="rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 mb-8"
            style={{ background: "#111111" }}
          >
            {/* Image — first in DOM = right side in RTL */}
            <div className="relative min-h-80 lg:min-h-96">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text — second in DOM = left side in RTL */}
            <div className="flex flex-col items-start text-start justify-center p-8 gap-4">
              <span className="text-lg" style={{ color: "#c6a87a" }}>
                {featured.date}
              </span>
              <h2 className="text-4xl font-regular text-white leading-snug">
                {featured.title}
              </h2>
              <p className="text-xl font-light leading-relaxed">
                {featured.excerpt}
              </p>
              <Link
                href={`/blog/${featured.id}`}
                className="inline-flex items-center gap-1.5 text-lg font-semibold mt-2 transition-opacity hover:opacity-75"
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
              className="w-10 h-10 rounded-full flex items-center justify-center border text-base transition-colors hover:bg-white/5"
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
                className="w-10 h-10 rounded-full flex items-center justify-center text-base transition-colors hover:bg-white/5"
                style={{ color: "#eeeeee", opacity: 0.5 }}
              >
                {n}
              </button>
            ))}
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center text-base font-bold"
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
      <div className="relative h-72 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-start text-start gap-2 p-5">
        <span className="text-lg" style={{ color: "#c6a87a" }}>
          {post.date}
        </span>
        <h3 className="font-regular text-white text-3xl leading-snug">
          {post.title}
        </h3>
        <p className="text-lg font-regular leading-relaxed">
          {post.excerpt}
        </p>
        <div
          className="inline-flex items-center gap-1.5 text-base font-semibold mt-1"
          style={{ color: "#c6a87a" }}
        >
          קרא עוד
          <ArrowLeftIcon />
        </div>
      </div>
    </Link>
  );
}
