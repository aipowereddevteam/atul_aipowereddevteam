import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atul Nagose | Full Stack Systems Architect",
  description: "Senior Engineer specializing in High-Scale IoT, AWS Infrastructure, and Real-Time Logistics Systems.",
  keywords: ["Next.js Developer", "AWS Architect", "Freelance React Developer", "IoT Specialist"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Atul Nagose",
    "jobTitle": "Senior Software Engineer",
    "knowsAbout": ["AWS EC2", "Redis Caching", "GraphQL", "Real-time Systems"],
    "url": "https://your-domain.com"
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
