import Image from "next/image";
import Link from "next/link";
import type { StoreProduct } from "../lib/medusa";
import AddToCartButton from "./AddToCartButton";

// Re-export StoreProduct as Product so other files keep working
export type Product = StoreProduct;

// Fallback mock data (used by Compare page and anywhere not yet wired to Medusa)
export const products: Product[] = [
 
  {
    id: "prod_lanza",
    handle: "lanza",
    name: "Lanza",
    badge: "Best Value",
    material: "אלומיניום",
    price: 320,
    variantId: "",
    thumbnail: "/assets/img/lanza.jpeg",
    images: ["/assets/img/lanza.jpeg"],
    description: "המכשיר שמשנה את חוקי המשחק",
    features: ["₪299" ,"חום", "תפרחת", "1000mAh", "נורית חיווי", "שנה אחת"],
    cardFeatures: ["חום", "תפרחת", "1000mAh", "נורית חיווי"],
    variants: [],
    options: [{ id: "opt_badge", title: "Attribute", value: "Best Value" }],
  },
  {
    id: "prod_aria",
    handle: "aria",
    name: "Aria+",
    badge: "Most Popular",
    material: "אלומיניום",
    price: 250,
    variantId: "",
    thumbnail: "/assets/img/aria.jpeg",
    images: ["/assets/img/aria.jpeg"],
    description: "ביצועי פרמיום בהישג יד",
    features: ["₪499" ,"הולכת חום", "תפרחת + מיצויים", "2600mAh", "מסך LED", "שנה אחת"],
    cardFeatures: ["הולכת חום", "תפרחת + מיצויים", "2600mAh", "מסך LED"],
    variants: [],
    options: [{ id: "opt_badge", title: "Attribute", value: "Most Popular" }],
  },
  {
    id: "prod_fog_pro",
    handle: "fog-pro",
    name: "Fog Pro",
    badge: "Pro Choice",
    material: "אלומיניום",
    price: 320,
    variantId: "",
     thumbnail: "/assets/img/fogpro.jpeg",
    images: ["/assets/img/fogpro.jpeg"],
    description: "הד ליון חזק בביצועים. מדויק בטעם.",
    features: ["₪549" ,"קונבקציה (Convection)", "תפרחת", "3200mAh נשלפת", "OLED", "שנה אחת"],
    cardFeatures: ["קונבקציה (Convection)", "תפרחת", "3200mAh נשלפת", "OLED"],
    variants: [],
    options: [{ id: "opt_badge", title: "Attribute", value: "Most Popular" }],
  },
  {
    id: "prod_roffu",
    handle: "roffu",
    name: "Roffu",
    badge: "Most Popular",
    material: "אלומיניום",
    price: 300,
    variantId: "",
     thumbnail: "/assets/img/roffu.jpeg",
    images: ["/assets/img/roffu.jpeg"],
    description: "פסגת האידוי. טכנולוגיית חיסום חכמה.",
    features: ["₪649" ,"קונבקציה (Convection)", "שולחני", "3200mAh נשלפת", "OLED צבעוני", "שנה אחת"],
    cardFeatures: ["קונבקציה (Convection)", "שולחני", "3200mAh נשלפת", "OLED צבעוני"],
    variants: [],
    options: [{ id: "opt_badge", title: "Attribute", value: "Most Popular" }],
  },
];

const FALLBACK_IMG = "/assets/img/product-test-img.jpeg";


export default function ProductCard({ product }: { product: Product }) {
  const slug = product.handle || product.id;
  const imgSrc = product.thumbnail ?? product.images?.[0] ?? FALLBACK_IMG;

  // Extract badge from options (Medusa product options)
  // Medusa options have title = attribute name (e.g., "Attribute"), value = the actual text
  const badgeOption = product.options?.find(opt => opt.title?.toLowerCase() === "attribute");
  const badgeText = product.badge || badgeOption?.value;

  return (
    <div
      className="relative rounded-3xl flex flex-col overflow-hidden"
      style={{ background: "#f2f2f2" }}
    >
      {/* Product image + badge + name — clickable */}
      <Link href={`/shop/${slug}`} className="relative overflow-hidden rounded-3xl m-3 block" style={{ background: "#ffffff", height: "340px" }}>
        {badgeText && (
          <span
            className="absolute top-3 inset-s-3 text-lg font-medium text-white px-3 py-1 rounded-lg z-10"
            style={{ background: "#1a1a1a" }}
          >
            {badgeText}
          </span>
        )}
        <Image
          src={imgSrc}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-full object-contain p-4 product-image"
        />
        <h3 className="absolute bottom-3 inset-s-4 text-4xl font-light text-black">{product.name}</h3>
      </Link>

      {/* Info — clickable */}
      <Link href={`/shop/${slug}`} className="flex flex-col gap-2 px-5 pb-5 flex-1 text-start text-black">
        <p className="text-2xl sm:text-xl leading-tight font-light">
          {product.description}
        </p>
        {product.material && (
          <span
            className="inline-flex self-start px-3 py-1 rounded-full text-base font-medium"
            style={{ background: "var(--color-gold)", color: "#1a1a1a" }}
          >
            {product.material}
          </span>
        )}


        {/* Variant colors */}
        {product.variants.length > 1 && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {product.variants.map((v) => (
              <span
                key={v.id}
                className="px-2.5 py-0.5 rounded-full text-xs font-medium border"
                style={{ borderColor: "#d0d0d0", color: "#555" }}
              >
                {v.title}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="mt-auto pt-3 text-center">
          <span className="text-3xl font-normal text-black">₪{product.price}</span>
        </div>
      </Link>

      {/* Add to cart button */}
      <AddToCartButton
        id={product.variantId || product.id}
        name={product.name}
        price={product.price}
        variantId={product.variantId}
        image={product.thumbnail ?? product.images?.[0] ?? undefined}
        description={product.description}
        material={product.material}
        fullWidth
      />
    </div>
  );
}
