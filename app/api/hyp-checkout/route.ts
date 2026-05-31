import { NextRequest, NextResponse } from "next/server";

export interface HypCheckoutBody {
  amount: number;        // total in ILS
  orderId: string;       // your internal order ID
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
  };
}

export async function POST(req: NextRequest) {
  const masof  = process.env.HYP_MASOF;
  const key    = process.env.HYP_KEY;
  const passP  = process.env.HYP_PASSP;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  if (!masof || !key || !passP) {
    return NextResponse.json(
      { error: "Hyp Pay credentials not configured. Set HYP_MASOF, HYP_KEY, HYP_PASSP in .env.local" },
      { status: 500 }
    );
  }

  const body: HypCheckoutBody = await req.json();
  const { amount, orderId, customer } = body;

  // Build the APISign request
  const params = new URLSearchParams({
    action:      "APISign",
    What:        "SIGN",
    Sign:        "True",
    KEY:         key,
    PassP:       passP,
    Masof:       masof,
    Amount:      String(amount),
    Coin:        "1",           // ILS
    Order:       orderId,
    PageLang:    "HEB",
    sendemail:   "True",
    MoreData:    "True",
    ClientName:  customer.firstName,
    ClientLName: customer.lastName,
    email:       customer.email,
    cell:        customer.phone,
    street:      customer.address,
    city:        customer.city,
    // Success/failure URLs — also configure these in your Hyp terminal dashboard
    SuccessUrl:  `${siteUrl}/payment/success`,
    ErrorUrl:    `${siteUrl}/payment/failure`,
  });

  let signedParams: string;
  try {
    const resp = await fetch(`https://pay.hyp.co.il/p/?${params.toString()}`);
    signedParams = await resp.text();
  } catch (err) {
    console.error("Hyp APISign request failed:", err);
    return NextResponse.json({ error: "Failed to connect to Hyp Pay" }, { status: 502 });
  }

  // Hyp returns URL-encoded query params — check for error
  if (signedParams.includes("CCode=") && !signedParams.includes("action=pay")) {
    return NextResponse.json({ error: "Hyp Pay returned an error", details: signedParams }, { status: 400 });
  }

  const paymentUrl = `https://pay.hyp.co.il/p/?${signedParams}`;
  return NextResponse.json({ paymentUrl });
}
