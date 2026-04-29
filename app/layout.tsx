import type { Metadata } from "next";
import { Squada_One, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const squadaOne = Squada_One({
  weight: "400",
  variable: "--font-squada-one",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Venture — Don't plan it. Venture it.",
  description:
    "Real-time campus meetups with verified students nearby. The spontaneity app fighting the Gen Z loneliness crisis, one IRL moment at a time.",
  openGraph: {
    title: "Venture — Don't plan it. Venture it.",
    description:
      "Real-time campus meetups with verified students nearby. Beta live in Chicago. .edu only.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${squadaOne.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-bg text-[#e8eaff] font-body antialiased">
        {children}
      </body>
    </html>
  );
}
