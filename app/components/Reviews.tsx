"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={filled ? 0 : 1.5} className="w-6 h-6">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1" style={{ color: "#c6a87a" }}>
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
    quote: '"העובדה שניתן להחליף תאית 18650 היא משנה משחק (Game Changer). המכשיר עמיד מאוד."',
    reviewer: "Reddit (קהילת Vaporents)",
    linkLabel: "קישור לקהילה",
    href: "#",
    stars: 5,
  },
  {
    id: "vaping360",
    quote: '"ה-Fog Pro הוא קפיצת מדרגה משמעותית... האדים קרירים וטעימים והחימום עובד בצורה מושלמת"',
    reviewer: "Vaping360",
    linkLabel: "קישור לביקורת",
    href: "#",
    stars: 5,
  },
  {
    id: "youtube",
    quote: '"איכות בנייה מדהימה, ממשק פשוט וידידותי — בדיוק מה שחיפשתי. ממליץ בחום לכל מתחיל."',
    reviewer: "YouTube — ביקורת משתמש",
    linkLabel: "קישור לסרטון",
    href: "#",
    stars: 5,
  },
];

export default function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: false },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  // Assign both our DOM ref and Embla's ref to the same element
  const combinedRef = useCallback(
    (el: HTMLDivElement | null) => {
      viewportRef.current = el;
      (emblaRef as (el: HTMLDivElement | null) => void)(el);
    },
    [emblaRef]
  );

  // Reveal after Embla positions slides — direct DOM mutation, no state, no lint error
  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!emblaApi || !el) return;
    el.style.transition = "opacity 0.4s ease";
    el.style.opacity = "1";
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("scroll", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("scroll", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <section className="bg-white py-20 overflow-hidden">

      {/* Header */}
      <div className="site-container px-6 lg:px-12 mb-14">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="title-h2-black">מה הלקוחות שלנו אומרים</h2>
          <Stars />
        </div>
      </div>

      {/* Embla viewport */}
      <div
        ref={combinedRef}
        style={{ overflow: "hidden", direction: "rtl", touchAction: "pan-y pinch-zoom", opacity: 0 }}
      >
        <div style={{ display: "flex", willChange: "transform", userSelect: "none" }}>
          {reviews.map((review, i) => (
            <div
              key={review.id}
              style={{ flex: "0 0 clamp(280px, 80%, 560px)", minWidth: 0, paddingLeft: "10px", paddingRight: "10px" }}
            >
              <div
                style={{
                  direction: "rtl",
                  background: "#f2f2f2",
                  borderRadius: "16px",
                  padding: "40px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  opacity: i === selectedIndex ? 1 : 0.45,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Stars count={review.stars} />
                <p className="text-lg leading-relaxed" style={{ color: "#333333" }}>{review.quote}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span className="font-bold text-base text-black">{review.reviewer}</span>
                  <a href={review.href} className="text-sm hover:opacity-80 transition-opacity" style={{ color: "#999999" }}>
                    {review.linkLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            style={{
              width: i === selectedIndex ? "24px" : "8px",
              height: "8px",
              borderRadius: "9999px",
              background: i === selectedIndex ? "#c6a87a" : "#d0d0d0",
              transition: "all 0.3s",
              border: "none",
              cursor: "pointer",
            }}
            aria-label={`עבור לביקורת ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
