import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "מיה הסעות - הסעות פרטיות לכל יעד",
  description:
    "מיה הסעות - הסעות פרטיות אמינות לכל יעד: שדה תעופה, אירועים, עובדים ונסיעות מותאמות אישית. זמינים 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={rubik.variable}>
      <body dir="rtl">{/* deploy sync */}{children}</body>
    </html>
  );
}
