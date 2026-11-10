import { createFileRoute } from "@tanstack/react-router";

import { MusicPlayer } from "@/components/wedding/MusicPlayer";
import { WeddingFrame } from "@/components/wedding/WeddingFrame";
import { TempleWatermark } from "@/components/wedding/WeddingFrame";
import { BlessingsSection } from "@/components/wedding/sections/BlessingsSection";
import { CeremonySection } from "@/components/wedding/sections/CeremonySection";
import { CoupleSection } from "@/components/wedding/sections/CoupleSection";
import { FamilySection } from "@/components/wedding/sections/FamilySection";
import { LunchSection } from "@/components/wedding/sections/LunchSection";
import { SaveTheDateSection } from "@/components/wedding/sections/SaveTheDateSection";
import { VenueSection } from "@/components/wedding/sections/VenueSection";
import { WelcomeSection } from "@/components/wedding/sections/WelcomeSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Gireesh & Sri Varsha — Wedding Invitation",
      },
      {
        name: "description",
        content:
          "Traditional Telugu wedding invitation — Gireesh weds Sri Varsha, Wednesday 16 December 2026, Muhurtham 8:03 AM IST, Komiri Village, Vizianagaram District, Andhra Pradesh.",
      },
      { property: "og:title", content: "Gireesh & Sri Varsha — Wedding Invitation" },
      {
        property: "og:description",
        content:
          "You are warmly invited — Wednesday, 16 December 2026, Muhurtham 8:03 AM, Komiri Village, Vizianagaram District.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="grain-overlay relative min-h-[100svh] w-full overflow-x-clip bg-background">
      {/* Faint temple watermark behind all content */}
      <TempleWatermark />
      {/* Fixed traditional decoration frame shared by every section */}
      <WeddingFrame />
      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-12 md:px-16 pb-36 sm:pb-48">
        <WelcomeSection />
        <CoupleSection />
        <SaveTheDateSection />
        <CeremonySection />
        <VenueSection />
        <LunchSection />
        <FamilySection />
        <BlessingsSection />
      </div>
      <MusicPlayer />
    </main>
  );
}
