import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import AskAI from "@/components/AskAI";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Md Rabbi Miah | Software Engineer · Full-Stack Developer",
  description:
    "Personal portfolio of Md Rabbi Miah - Software Engineer, Full-Stack Developer, and Problem Solver.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="dark"
      data-theme="dark"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} min-h-full flex flex-col relative antialiased`}
      >
        {children}
        <AskAI />
      </body>
    </html>
  );
}