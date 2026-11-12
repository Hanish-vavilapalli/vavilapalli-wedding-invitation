import { assets, wedding } from "../config";
import { ShareInvitation } from "../ShareInvitation";

import { Kicker, Ornament, SectionShell, Telugu } from "./shared";

/** SECTION 8 — Final blessings and share. */
export function BlessingsSection() {
  return (
    <SectionShell id="blessings">
      <img
        src={assets.elephantCouple}
        alt="Royal wedding couple on an animated elephant"
        loading="lazy"
        className="mx-auto h-auto w-72 sm:w-96 md:w-[420px] drop-shadow-md"
      />
      <Telugu className="mt-6 text-3xl font-black text-vermilion sm:text-5xl tracking-wide">
        {wedding.blessingsTelugu}
      </Telugu>
      <Ornament />
      <Kicker>Thank You for Being Part of Our Happiness</Kicker>
      <h2 className="mt-3 text-5xl font-black tracking-wide text-primary sm:text-6xl">
        {wedding.groom.name} <span className="font-serif italic text-gold text-4xl sm:text-5xl mx-2 font-normal">&</span> {wedding.bride.name}
      </h2>
      <p className="mt-3 text-lg sm:text-2xl font-bold text-foreground">
        Share this invitation with your family and friends.
      </p>
      <div className="mt-5">
        <ShareInvitation />
      </div>
      <Ornament />
      <p className="text-sm sm:text-base uppercase tracking-[0.25em] text-gold font-black">
        {wedding.heading}
      </p>
    </SectionShell>
  );
}
