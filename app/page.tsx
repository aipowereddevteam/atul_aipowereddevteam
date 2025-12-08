"use client";

import StarField from "@/components/3d/StarField";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustGrid } from "@/components/sections/TrustGrid";
import { MarketGap } from "@/components/sections/MarketGap";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { RecentlyWork } from "@/components/sections/RecentlyWork";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { ScaleTeam } from "@/components/sections/ScaleTeam";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-blue-500/30">
      <StarField />
      <Navbar />

      <Hero />
      <TrustGrid />
      <MarketGap />
      <RecentlyWork />
      <SuccessStories />
      <Services />
      <Testimonials />
      <ScaleTeam />
      <Contact />

      <Footer />
    </main>
  );
}
