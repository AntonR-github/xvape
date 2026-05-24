// ─── Medusa v2 Store API client ───────────────────────────────────────────────

const BASE_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL ?? "https://b2bv1.medusajs.app";
const PUB_KEY  = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY ?? "";

async function medusaFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      "x-publishable-api-key": PUB_KEY,
    },
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Medusa ${res.status}: ${text}`);
  }
  return res.json() as Promise<T>;
}

// ─── Raw Medusa v2 types ──────────────────────────────────────────────────────

interface RawImage   { id: string; url: string }
interface RawVariant { id: string; title: string; calculated_price?: { calculated_amount: number; currency_code: string } }
interface RawProduct {
  id: string;
  title: string;
  subtitle: string | null;
  description: string | null;
  handle: string;
  thumbnail: string | null;
  images: RawImage[];
  variants: RawVariant[];
}

interface RawRegion { id: string; currency_code: string }

// ─── Normalised shape used in the storefront ─────────────────────────────────

export interface StoreProduct {
  id: string;
  handle: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  variantId: string;
  thumbnail: string | null;
  images: string[];
  badge: string;
  features: string[];
}

// ─── Adapter ─────────────────────────────────────────────────────────────────

function adapt(p: RawProduct): StoreProduct {
  const variant  = p.variants?.[0];
  const amount   = variant?.calculated_price?.calculated_amount ?? 0;

  return {
    id:          p.id,
    handle:      p.handle,
    name:        p.title,
    subtitle:    p.subtitle ?? "",
    description: p.description ?? "",
    price:       Math.round(amount / 100),
    variantId:   variant?.id ?? "",
    thumbnail:   p.thumbnail,
    images:      p.images?.map((i) => i.url) ?? [],
    badge:       p.subtitle ?? "",
    features:    [],
  };
}

// ─── Get default region id ────────────────────────────────────────────────────

let cachedRegionId: string | null = null;

async function getRegionId(): Promise<string> {
  if (cachedRegionId) return cachedRegionId;
  const data = await medusaFetch<{ regions: RawRegion[] }>("/store/regions");
  cachedRegionId = data.regions?.[0]?.id ?? "";
  return cachedRegionId;
}

// ─── Public API ───────────────────────────────────────────────────────────────

export async function getProducts(limit = 100, offset = 0): Promise<{ products: StoreProduct[]; count: number }> {
  const regionId = await getRegionId();
  const data = await medusaFetch<{ products: RawProduct[]; count: number }>(
    `/store/products?limit=${limit}&offset=${offset}&region_id=${regionId}&fields=*variants.calculated_price`
  );
  return {
    products: data.products.map(adapt),
    count:    data.count,
  };
}

export async function getProduct(idOrHandle: string): Promise<StoreProduct | null> {
  const regionId = await getRegionId();
  const fields = "&fields=*variants.calculated_price";

  // Try by id
  try {
    const data = await medusaFetch<{ product: RawProduct }>(
      `/store/products/${idOrHandle}?region_id=${regionId}${fields}`
    );
    return adapt(data.product);
  } catch {
    // Try by handle
    try {
      const data = await medusaFetch<{ products: RawProduct[] }>(
        `/store/products?handle=${idOrHandle}&region_id=${regionId}${fields}`
      );
      if (data.products.length > 0) return adapt(data.products[0]);
    } catch {
      // ignore
    }
    return null;
  }
}
