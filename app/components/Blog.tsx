import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  href: string;
}

const posts: BlogPost[] = [
  {
    id: "beginners-guide",
    title: "המדריך למתחיל — איך מתחילים לאדות?",
    excerpt:
      "כל מה שצריך לדעת כדי להתחיל נכון – מבחירת המכשיר ועד חוויית שימוש חלקה ונעימה.",
    href: "/blog/beginners-guide",
  },
  {
    id: "cleaning-guide",
    title: "איך לנקות את הווופוריזר שלך?",
    excerpt:
      "שמירה על ניקיון המכשיר מבטיחה טעם נקי, ביצועים טובים יותר ואורך חיים ארוך יותר.",
    href: "/blog/cleaning-guide",
  },
  {
    id: "conduction-vs-convection",
    title: "מה ההבדל בין הולכת חום לקונבקציה?",
    excerpt:
      "הולכת חום מחממת במגע ישיר, בעוד קונבקציה מחממת בעזרת זרימת אוויר חם לחימום אחיד ונקי יותר.",
    href: "/blog/conduction-vs-convection",
  },
];

function ArrowLeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
  );
}

export default function Blog() {
  return (
    <section className="bg-black py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-black text-white text-center mb-12">
          מהבלוג שלנו
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={post.href}
              className="group flex flex-col gap-5 rounded-2xl overflow-hidden transition-opacity hover:opacity-90"
              style={{ background: "#111111" }}
            >
              {/* Image placeholder */}
              <div
                className="w-full h-52 shrink-0 flex items-center justify-center"
                style={{ background: "#1e1e1e" }}
              >
                <span className="text-xs" style={{ color: "#eeeeee", opacity: 0.2 }}>
                  תמונת מאמר
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3 text-end px-5 pb-6">
                <h3 className="font-bold text-white text-base leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#eeeeee", opacity: 0.5 }}>
                  {post.excerpt}
                </p>
                <div
                  className="flex items-center justify-end gap-1.5 text-sm font-semibold mt-1 transition-colors group-hover:opacity-80"
                  style={{ color: "#c6a87a" }}
                >
                  קרא עוד
                  <ArrowLeftIcon />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
