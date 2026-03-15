import type { Metadata } from "next";
import "./globals.css";
import { qtPalatine, powerr } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Uptown Gaming",
  description: "Community-driven gaming events, venue experiences, and bookings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${qtPalatine.variable} ${powerr.variable}`}>
      <body>{children}</body>
    </html>
  );
}