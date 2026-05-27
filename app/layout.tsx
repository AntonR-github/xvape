import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import AgeVerificationPopup from "./components/AgeVerificationPopup";
import CartToast from "./components/CartToast";

export const metadata: Metadata = {
  title: "XVape | מוצרי וייפינג פרמיום",
  description:
    "החנות המובילה למוצרי וייפינג פרמיום בישראל. מגוון רחב של מכשירים, נוזלים ואביזרים.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "XVape",
  url: "https://xvape.co.il",
  logo: "https://xvape.co.il/assets/logo.svg",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "XVape",
  url: "https://xvape.co.il",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white antialiased font-sans">
        <CartProvider>
          <AgeVerificationPopup>
            {children}
            <CartToast />
          </AgeVerificationPopup>
        </CartProvider>
      </body>
    </html>
  );
}