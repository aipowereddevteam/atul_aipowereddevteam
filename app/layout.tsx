import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Powered Dev | AI Automation & Development Services",
  description: "Transform your business with AI-powered automation, web development, and mobile apps. Specialized AI solutions for modern businesses in India.",
  keywords: ["AI Automation", "Web Development", "Mobile App Development", "AI Solutions India", "Business Automation"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI Powered Dev Team",
    "description": "AI Development & Automation Specialists",
    "knowsAbout": ["AI Automation", "Web Development", "Mobile Apps", "Business Intelligence"],
    "url": "https://aipowereddev.in"
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning={true}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
