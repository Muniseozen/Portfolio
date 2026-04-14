import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Munise Haruyama | PM & Frontend Developer",
  description:
    "PM/UX Designer & Frontend Developer. Specializing in web applications, mobile apps, and UI/UX design.",
  openGraph: {
    title: "Munise Haruyama | PM & Frontend Developer",
    description:
      "PM/UX Designer & Frontend Developer. Specializing in web applications, mobile apps, and UI/UX design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
