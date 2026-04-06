import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orbit — X Growth for SaaS Founders",
  description:
    "560K impressions in 10 days. Zero followers. Zero ad spend. AI-powered X growth management for SaaS founders.",
  openGraph: {
    title: "Orbit — X Growth for SaaS Founders",
    description:
      "560K impressions in 10 days. Zero followers. Zero ad spend. AI-powered X growth management for SaaS founders.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
