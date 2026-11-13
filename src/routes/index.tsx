import { createFileRoute } from "@tanstack/react-router";

import { MusicPlayer } from "@/components/wedding/MusicPlayer";
import { WelcomeScreen } from "@/components/wedding/WelcomeScreen";
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
        title: "Chi. Gireesh & Chi. La. Sow. Sri Varsha — Wedding Invitation",
      },
      {
        name: "description",
        content:
          "Traditional Telugu wedding invitation — Chi. Gireesh weds Chi. La. Sow. Sri Varsha, Wednesday 16 December 2026, Auspicious Muhurtham: 8:03 AM IST, Komiri Village, Vizianagaram District, Andhra Pradesh.",
      },
      { property: "og:site_name", content: "వావిలపల్లి వారి కళ్యాణ మహోత్సవం" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vavilapallikalyanotsavam.live/" },
      { property: "og:title", content: "Chi. Gireesh & Chi. La. Sow. Sri Varsha — Wedding Invitation" },
      {
        property: "og:description",
        content:
          "You are warmly invited — Wednesday, 16 December 2026, Auspicious Muhurtham: 8:03 AM, Komiri Village, Vizianagaram District.",
      },
      { property: "og:image", content: "https://vavilapallikalyanotsavam.live/og-image.jpg?v=3" },
      { property: "og:image:secure_url", content: "https://vavilapallikalyanotsavam.live/og-image.jpg?v=3" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "వావిలపల్లి వారి కళ్యాణ మహోత్సవం — Chi. Gireesh & Chi. La. Sow. Sri Varsha" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Chi. Gireesh & Chi. La. Sow. Sri Varsha — Wedding Invitation" },
      {
        name: "twitter:description",
        content:
          "You are warmly invited — Wednesday, 16 December 2026, Auspicious Muhurtham: 8:03 AM, Komiri Village, Vizianagaram District.",
      },
      { name: "twitter:image", content: "https://vavilapallikalyanotsavam.live/og-image.jpg?v=3" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="grain-overlay relative min-h-[100svh] w-full overflow-x-clip bg-background">
      {/* Royal welcome entrance doors — unlocks unmuted audio & reveals invitation */}
      <WelcomeScreen />
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
