import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  href: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    id: "beginners-guide",
    title: "המדריך למתחיל — איך מתחילים לאדות?",
    excerpt: "כל מה שצריך לדעת כדי להתחיל נכון – מבחירת המכשיר ועד חוויית שימוש חלקה ונעימה.",
    href: "/blog/beginners-guide",
    image: "/assets/img/blog1.png",
  },
  {
    id: "cleaning-guide",
    title: "איך לנקות את הווופוריזר שלך?",
    excerpt: "שמירה על ניקיון המכשיר מבטיחה טעם נקי, ביצועים טובים יותר ואורך חיים ארוך יותר.",
    href: "/blog/cleaning-guide",
    image: "/assets/img/blog2.png",
  },
  {
    id: "conduction-vs-convection",
    title: "מה ההבדל בין הולכת חום לקונבקציה?",
    excerpt: "הולכת חום מחממת במגע ישיר, בעוד קונבקציה מחממת בעזרת זרימת אוויר חם לחימום אחיד ונקי יותר.",
    href: "/blog/conduction-vs-convection",
    image: "/assets/img/blog3.jpg",
  },
];

function ArrowLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
  );
}

export default function Blog() {
  return (
    <section className="bg-black py-20">
      <div className="site-container px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <h2 className="title-h2">מהבלוג שלנו</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={post.href}
              className="group flex flex-col rounded-2xl overflow-hidden hover:opacity-90 transition-opacity"
              style={{ background: "#111111" }}
            >
              <div className="relative w-full h-96 shrink-0">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-3 text-start px-5 py-6">
                <h3 className="title-h3 text-white">{post.title}</h3>
                <p className="paragraph" style={{ color: "#eeeeee", opacity: 0.5 }}>{post.excerpt}</p>
                <div
                  className="flex items-center justify-start gap-1.5 text-base font-semibold mt-1 group-hover:opacity-80 transition-opacity"
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
