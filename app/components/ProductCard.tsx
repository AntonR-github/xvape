import Image from "next/image";
import Link from "next/link";
import type { StoreProduct } from "../lib/medusa";

// Re-export StoreProduct as Product so other files keep working
export type Product = StoreProduct;

// Fallback mock data (used by Compare page and anywhere not yet wired to Medusa)
export const products: Product[] = [
  {
    id: "prod_roffu",
    handle: "roffu",
    name: "Roffu",
    badge: "Most Popular",
    price: 649,
    variantId: "",
    thumbnail: null,
    images: [],
    description: "פסגת האידוי. טכנולוגיית חיסום חכמה.",
    features: ["קירור ספירלה מובנה", "אפליקציית שליטה מלאה", "מסך OLED צבעוני"],
  },
  {
    id: "prod_fog_pro",
    handle: "fog-pro",
    name: "Fog Pro",
    badge: "Pro Choice",
    price: 549,
    variantId: "",
    thumbnail: null,
    images: [],
    description: "הד ליון חזק בביצועים. מדויק בטעם.",
    features: ["מצב טורבו עוצמתי", "טולה נשלפת ונוחה", "חימום מהיר תוך 20 שניות"],
  },
  {
    id: "prod_aria",
    handle: "aria",
    name: "Aria+",
    badge: "Most Popular",
    price: 499,
    variantId: "",
    thumbnail: null,
    images: [],
    description: "ביצועי פרמיום בהישג יד",
    features: ["פייה זכוכית מובנית", "חיסום מהיר ואחיד", "ביצועי פרמיום בהישג יד"],
  },
  {
    id: "prod_lanza",
    handle: "lanza",
    name: "Lanza",
    badge: "Best Value",
    price: 299,
    variantId: "",
    thumbnail: null,
    images: [],
    description: "המכשיר שמשנה את חוקי המשחק",
    features: ["למתחילים", "המכשיר שמשנה את חוקי המשחק", "פשטות ונוחות יזמינות"],
  },
];

const FALLBACK_IMG = "/assets/img/product-test-img.jpeg";

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
  const slug = product.handle || product.id;
  const imgSrc = product.thumbnail ?? product.images?.[0] ?? FALLBACK_IMG;

  return (
    <div
      className="relative rounded-3xl flex flex-col overflow-hidden"
      style={{ background: "#f2f2f2" }}
    >
      {/* Product image + badge + name — clickable */}
      <Link href={`/shop/${slug}`} className="relative overflow-hidden rounded-3xl m-3 block" style={{ background: "#ffffff", height: "340px" }}>
        {product.badge && (
          <span
            className="absolute top-3 inset-s-3 text-lg font-medium text-white px-3 py-1 rounded-lg z-10"
            style={{ background: "#1a1a1a" }}
          >
            {product.badge}
          </span>
        )}
        <Image
          src={imgSrc}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-full object-contain p-4"
        />
        <h3 className="absolute bottom-3 inset-s-4 text-4xl font-light text-black">{product.name}</h3>
      </Link>

      {/* Info — clickable */}
      <Link href={`/shop/${slug}`} className="flex flex-col gap-2 px-5 pb-5 flex-1 text-start">
        <p className="paragraph-black">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mt-auto pt-3">
          <span className="text-4xl font-normal text-black">₪{product.price}</span>
        </div>
      </Link>

      {/* Add button */}
      <div className="absolute bottom-5 inset-e-5">
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 transition-opacity hover:opacity-80"
          style={{ background: "#1a1a1a" }}
          aria-label={`הוסף ${product.name} לעגלה`}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
}
