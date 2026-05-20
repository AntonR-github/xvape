import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

export const metadata: Metadata = {
  title: "XVape | מוצרי וייפינג פרמיום",
  description:
    "החנות המובילה למוצרי וייפינג פרמיום בישראל. מגוון רחב של מכשירים, נוזלים ואביזרים.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="h-full">
      <body className="min-h-full flex flex-col bg-black text-white antialiased font-sans">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
