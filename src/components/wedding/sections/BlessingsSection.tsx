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
      <Telugu className="mt-4 text-xl font-medium text-vermilion sm:text-2xl">
        {wedding.blessingsTelugu}
      </Telugu>
      <Ornament />
      <Kicker>Thank You for Being Part of Our Happiness</Kicker>
      <h2 className="mt-3 text-3xl font-semibold tracking-wide text-primary sm:text-5xl">
        Gireesh <span className="text-vermilion">❤</span> Sri Varsha
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Share this invitation with your family and friends.
      </p>
      <div className="mt-4">
        <ShareInvitation />
      </div>
      <Ornament />
      <p className="text-xs uppercase tracking-[0.3em] text-gold">
        {wedding.heading}
      </p>
    </SectionShell>
  );
}
