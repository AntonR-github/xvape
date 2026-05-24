"use client";

import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "warranty",
    question: "מה כוללת האחריות?",
    answer:
      "כל המכשירים מגיעים עם אחריות יצרן של 12 חודשים הכוללת תקלות ייצור. האחריות אינה מכסה נזק פיזי או שימוש לא תקין. לפרטים נוספים ניתן לפנות לשירות הלקוחות שלנו.",
  },
  {
    id: "spare-parts",
    question: "האם ניתן להשיג חלקי חילוף?",
    answer:
      "כן, אנו מחזיקים במלאי חלקי חילוף מקוריים לרוב הדגמים — כולל פיות, מסנני רשת, מכלי הרבה ועוד. ניתן להזמין ישירות דרך האתר או בחנויות המורשות.",
  },
  {
    id: "hebrew-instructions",
    question: "האם יש הוראות בעברית?",
    answer:
      "כל המוצרים שנמכרים באתר מגיעים עם מדריך שימוש בעברית. בנוסף, באתר שלנו תמצאו מדריכי וידאו ומאמרים מפורטים לכל דגם.",
  },
  {
    id: "cleaning",
    question: "איך מנקים את המכשיר?",
    answer:
      "מומלץ לנקות את תא הצמח לאחר כל שימוש בעזרת מברשת הניקיון המצורפת. לניקוי עמוק השתמשו בצמר גפן עם אלכוהול איזופרופיל 91%. הימנעו ממים ישירים על האלקטרוניקה.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="bg-black py-20 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <h2 className="title-h2 text-center mb-12">
          שאלות נפוצות
        </h2>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border overflow-hidden transition-colors"
                style={{
                  background: "#121212",
                  borderColor: isOpen
                    ? "rgba(198,168,122,0.35)"
                    : "rgba(255,255,255,0.08)",
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-start gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-regular text-white text-xl flex-1 text-start">
                    {faq.question}
                  </span>

                    <span
                    className="text-3xl font-regular leading-none shrink-0 transition-transform duration-300"
                    style={{
                      color: "#c6a87a",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-6 pb-5 text-start">
                    <p className="text-lg font-regular leading-relaxed text-white">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
