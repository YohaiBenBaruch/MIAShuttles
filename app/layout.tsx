import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Script from "next/script";
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
      <body dir="rtl">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18470605766"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18470605766');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
