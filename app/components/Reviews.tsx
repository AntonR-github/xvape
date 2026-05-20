function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.5}
      className="w-4 h-4"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5" style={{ color: "#c6a87a" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} filled={i < count} />
      ))}
    </div>
  );
}

const reviews = [
  {
    id: "tvape",
    quote:
      "מכשיר כניסה מצוין למי שמעריך טעם וניידות מבלי לשלם סכומי עתק",
    reviewer: "TVAPE",
    linkLabel: "קישור לסקירה",
    href: "#",
    stars: 5,
  },
  {
    id: "reddit",
    quote:
      '"העובדה שניתן להחליף תאית 18650 היא משנה משחק (Game Changer). המכשיר עמיד מאוד."',
    reviewer: "Reddit (קהילת Vaporents)",
    linkLabel: "קישור לקהילה",
    href: "#",
    stars: 5,
  },
  {
    id: "vaping360",
    quote:
      '"ה-Fog Pro הוא קפיצת מדרגה משמעותית... האדים קרירים וטעימים והחימום עובד בצורה מושלמת"',
    reviewer: "Vaping360",
    linkLabel: "קישור לביקורת",
    href: "#",
    stars: 5,
  },
];

export default function Reviews() {
  return (
    <section className="bg-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <h2 className="text-4xl sm:text-5xl font-black text-black">
            מה הלקוחות שלנו אומרים
          </h2>
          <Stars />
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl px-7 py-8 flex flex-col gap-5 text-end"
              style={{ background: "#f2f2f2" }}
            >
              {/* Stars */}
              <div className="flex justify-end">
                <Stars count={review.stars} />
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#333333" }}>
                {review.quote}
              </p>

              {/* Reviewer */}
              <div className="flex flex-col gap-1">
                <span className="font-bold text-sm text-black">{review.reviewer}</span>
                <a
                  href={review.href}
                  className="text-xs transition-opacity hover:opacity-80"
                  style={{ color: "#999999" }}
                >
                  {review.linkLabel}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
