"use client";

import { useState, useEffect, useCallback, useRef } from "react";

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={filled ? 0 : 1.5} className="w-5 h-5">
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
    quote: "מכשיר כניסה מצוין למי שמעריך טעם וניידות מבלי לשלם סכומי עתק",
    reviewer: "TVAPE",
    linkLabel: "קישור לסקירה",
    href: "#",
    stars: 5,
  },
  {
    id: "reddit",
    quote: "העובדה שניתן להחליף תאית 18650 היא משנה משחק (Game Changer). המכשיר עמיד מאוד.",
    reviewer: "Reddit (קהילת Vaporents)",
    linkLabel: "קישור לקהילה",
    href: "#",
    stars: 5,
  },
  {
    id: "vaping360",
    quote: "ה-Fog Pro הוא קפיצת מדרגה משמעותית... האדים קרירים וטעימים והחימום עובד בצורה מושלמת",
    reviewer: "Vaping360",
    linkLabel: "קישור לביקורת",
    href: "#",
    stars: 5,
  },
  {
    id: "youtube",
    quote: "איכות בנייה מדהימה, ממשק פשוט וידידותי — בדיוק מה שחיפשתי. ממליץ בחום לכל מתחיל.",
    reviewer: "YouTube — ביקורת משתמש",
    linkLabel: "קישור לסרטון",
    href: "#",
    stars: 5,
  },
];

export default function Reviews() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => setActive((i) => (i + 1) % reviews.length), []);
  const prev = useCallback(() => setActive((i) => (i - 1 + reviews.length) % reviews.length), []);

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(next, 4000);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, [next]);

  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(next, 4000);
  }, [next]);

  const goTo = (i: number) => { setActive(i); resetAutoplay(); };

  // Swipe
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next(); else prev();
      resetAutoplay();
    }
  };

  const prevIndex = (active - 1 + reviews.length) % reviews.length;
  const nextIndex = (active + 1) % reviews.length;

  // Position: 0 = center, 1 = right, -1 = left, 2 = far right (hidden), -2 = far left (hidden)
  function getPosition(i: number): number {
    if (i === active) return 0;
    if (i === prevIndex) return 1;
    if (i === nextIndex) return -1;
    return 2; // offscreen
  }

  return (
    <section className="bg-black py-16 sm:py-20 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3 mb-10 sm:mb-14 px-6">
        <h2 className="title-h2">מה הלקוחות שלנו אומרים</h2>
        <Stars />
      </div>

      {/* Cards — 3 visible: prev (right), active (center), next (left) */}
      <div
        className="relative mx-auto"
        style={{ maxWidth: "700px", height: "260px" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {reviews.map((review, i) => {
          const pos = getPosition(i);
          const isVisible = pos >= -1 && pos <= 1;
          const translateX =
            pos === 0 ? "0%" :
            pos === -1 ? "-85%" :
            pos === 1 ? "85%" :
            "150%"; // offscreen right for hidden cards

          return (
            <div
              key={review.id}
              onClick={() => pos !== 0 && isVisible && goTo(i)}
              className="absolute inset-x-0 mx-auto"
              style={{
                width: "min(75%, 480px)",
                transform: `translateX(${translateX}) scale(${pos === 0 ? 1 : 0.9})`,
                opacity: pos === 0 ? 1 : isVisible ? 0.4 : 0,
                zIndex: pos === 0 ? 2 : 1,
                transition: "transform 0.5s ease, opacity 0.4s ease",
                pointerEvents: isVisible ? "auto" : "none",
                cursor: pos !== 0 ? "pointer" : "default",
              }}
            >
              <div
                className="flex flex-col gap-5 text-center items-center"
                style={{
                  background: "#1a1a1a",
                  borderRadius: "20px",
                  padding: "32px 24px",
                  direction: "rtl",
                }}
              >
                <Stars count={review.stars} />
                <p className="text-base sm:text-lg leading-relaxed font-medium" style={{ color: "#cccccc" }}>
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-base text-white">{review.reviewer}</span>
                  <a
                    href={review.href}
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{ color: "#999" }}
                  >
                    {review.linkLabel}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full border-none cursor-pointer"
            style={{
              width: i === active ? "24px" : "8px",
              height: "8px",
              background: i === active ? "#c6a87a" : "#444444",
              transition: "all 0.3s ease",
            }}
            aria-label={`עבור לביקורת ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
