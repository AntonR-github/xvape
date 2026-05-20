export interface Product {
  id: string;
  name: string;
  badge: string;
  price: number;
  description: string;
  feature: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "roffu",
    name: "Roffu",
    badge: "Most Popular",
    price: 649,
    description: "פסגת האידוי. טכנולוגיית חיסום חכמה.",
    feature: "קירור ספירלה ואספר צבעוני",
    features: ["קירור ספירלה מובנה", "אפליקציית שליטה מלאה", "מסך OLED צבעוני"],
  },
  {
    id: "fog-pro",
    name: "Fog Pro",
    badge: "Pro Choice",
    price: 549,
    description: "הד ליון חזק בביצועים. מדויק בטעם.",
    feature: "עוצמות טורבו וטולה נשלפת",
    features: ["מצב טורבו עוצמתי", "טולה נשלפת ונוחה", "חימום מהיר תוך 20 שניות"],
  },
  {
    id: "aria",
    name: "Aria+",
    badge: "Most Popular",
    price: 499,
    description: "ביצועי פרמיום בהישג יד",
    feature: "פייה זכוכית וחיסום מהיר",
    features: ["פייה זכוכית מובנית", "חיסום מהיר ואחיד", "ביצועי פרמיום בהישג יד"],
  },
  {
    id: "lanza",
    name: "Lanza",
    badge: "Best Value",
    price: 299,
    description: "המכשיר שמשנה את חוקי המשחק",
    feature: "פשטות ונוחות יזמינות",
    features: ["למתחילים", "המכשיר שמשנה את חוקי המשחק", "פשטות ונוחות יזמינות"],
  },
];

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className="relative rounded-3xl flex flex-col overflow-hidden"
      style={{ background: "#f2f2f2" }}
    >
      {/* Badge */}
      <span
        className="absolute top-4 inset-s-4 text-xs font-semibold text-white px-3 py-1 rounded-full z-10"
        style={{ background: "#1a1a1a" }}
      >
        {product.badge}
      </span>

      {/* Product image */}
      <div className="flex items-center justify-center h-64 px-8 pt-10 pb-4">
        <div
          className="w-full h-full rounded-xl flex items-center justify-center"
          style={{ background: "#e4e4e4" }}
        >
          <span className="text-xs" style={{ color: "#aaaaaa" }}>
            תמונת מוצר
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 px-5 pb-5 flex-1 text-end">
        <h3 className="text-lg font-bold text-black">{product.name}</h3>
        <p className="text-xs leading-relaxed" style={{ color: "#777777" }}>
          {product.description}
        </p>

        {/* Feature tag */}
        <span
          className="self-end text-xs font-medium px-3 py-1 rounded-full mt-1"
          style={{ background: "rgba(198,168,122,0.18)", color: "#9a7a4a" }}
        >
          {product.feature}
        </span>

        {/* Price + add button */}
        <div className="flex items-center justify-between mt-auto pt-3">
          <button
            className="w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0 transition-opacity hover:opacity-80"
            style={{ background: "#1a1a1a" }}
            aria-label={`הוסף ${product.name} לעגלה`}
          >
            <PlusIcon />
          </button>
          <span className="text-xl font-black text-black">₪{product.price}</span>
        </div>
      </div>
    </div>
  );
}
