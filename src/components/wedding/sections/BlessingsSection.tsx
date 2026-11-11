import { assets, wedding } from "../config";
import { ShareInvitation } from "../ShareInvitation";

import { Kicker, Ornament, SectionShell, Telugu } from "./shared";

/** SECTION 8 — Final blessings and share. */
export function BlessingsSection() {
  return (
    <SectionShell id="blessings">
      <img
        src={assets.elephantCouple}
        alt="Royal wedding couple on a decorated elephant"
        loading="lazy"
        className="mx-auto h-auto w-52 sm:w-60 drop-shadow-sm"
      />
      <Telugu className="mt-4 text-2xl font-bold text-vermilion sm:text-4xl tracking-wide">
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
