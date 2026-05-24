export default async function MedusaTestPage() {
  const BASE = "https://b2bv1.medusajs.app";
  const KEY  = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY ?? "";
  const headers = { "Content-Type": "application/json", "x-publishable-api-key": KEY };

  let regionData: unknown = null;
  let productData: unknown = null;
  let error: string | null = null;

  try {
    // Step 1: get region
    const rRes = await fetch(`${BASE}/store/regions`, { cache: "no-store", headers });
    regionData = await rRes.json();

    // Step 2: get 1 product with price using region id
    const regions = (regionData as { regions: { id: string }[] }).regions;
    const regionId = regions?.[0]?.id;
    if (regionId) {
      const pRes = await fetch(
        `${BASE}/store/products?limit=1&region_id=${regionId}&fields=*variants.calculated_price`,
        { cache: "no-store", headers }
      );
      productData = await pRes.json();
    }
  } catch (e: unknown) {
    error = e instanceof Error ? `${e.message}\n${String(e.cause ?? "")}` : String(e);
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "monospace", background: "#111", color: "#eee", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: "1rem" }}>Medusa Connection Test</h1>
      {error && <pre style={{ color: "red" }}>ERROR: {error}</pre>}

      <h2 style={{ marginTop: "2rem", color: "#c6a87a" }}>Regions</h2>
      <pre style={{ fontSize: "13px", whiteSpace: "pre-wrap" }}>{JSON.stringify(regionData, null, 2)}</pre>

      <h2 style={{ marginTop: "2rem", color: "#c6a87a" }}>Product (with price)</h2>
      <pre style={{ fontSize: "13px", whiteSpace: "pre-wrap" }}>{JSON.stringify(productData, null, 2)}</pre>
    </main>
  );
}
