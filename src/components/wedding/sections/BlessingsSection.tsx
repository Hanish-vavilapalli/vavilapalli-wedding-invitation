import { wedding } from "../config";
import { ShareInvitation } from "../ShareInvitation";
import { WeddingVideoPlayer } from "../WeddingVideoPlayer";

import { Kicker, Ornament, SectionShell, Telugu } from "./shared";

/** SECTION 8 — Final blessings and share. */
export function BlessingsSection() {
  return (
    <SectionShell id="blessings">
      <Kicker>Wedding Invitation Video</Kicker>
      <WeddingVideoPlayer />
      <Telugu className="mt-8 text-2xl font-bold text-vermilion sm:text-4xl tracking-wide">
        {wedding.blessingsTelugu}
      </Telugu>
      <Ornament />
      <Kicker>Thank You for Being Part of Our Happiness</Kicker>
      <h2 className="mt-3 text-4xl font-bold tracking-wide text-primary sm:text-6xl">
        Gireesh <span className="font-serif italic text-gold text-3xl sm:text-5xl mx-2 font-normal">&</span> Sri Varsha
      </h2>
      <p className="mt-3 text-base sm:text-xl font-medium text-foreground/80">
        Share this invitation with your family and friends.
      </p>
      <div className="mt-5">
        <ShareInvitation />
      </div>
      <Ornament />
      <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold font-bold">
        {wedding.heading}
      </p>
    </SectionShell>
  );
}
