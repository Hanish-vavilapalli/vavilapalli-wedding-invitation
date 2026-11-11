import { assets, wedding } from "../config";

import { Kicker, Ornament, SectionShell, Telugu } from "./shared";

/** SECTION 7 — Family invitation. */
export function FamilySection() {
  return (
    <SectionShell id="family">
      <Kicker>Invited With Love</Kicker>
      <img
        src={assets.girlPraying}
        alt="Girl welcoming in prayer"
        loading="lazy"
        className="mx-auto mt-4 h-auto w-40 sm:w-52 drop-shadow-md"
      />
      <div className="mt-5 space-y-2 text-base sm:text-lg max-w-xl mx-auto">
        <div>
          <p className="text-lg sm:text-2xl font-bold text-primary">
            {wedding.groom.father} & {wedding.groom.mother}
          </p>
          <p className="mt-1 text-xs sm:text-sm uppercase tracking-widest text-gold font-semibold">
            Parents of the Groom
          </p>
        </div>
        <Ornament />
        <div>
          <p className="text-lg sm:text-2xl font-bold text-primary">
            {wedding.bride.father} & {wedding.bride.mother}
          </p>
          <p className="mt-1 text-xs sm:text-sm uppercase tracking-widest text-gold font-semibold">
            Parents of the Bride
          </p>
        </div>
      </div>
      <Ornament />
      <Telugu className="text-base sm:text-xl leading-relaxed text-foreground font-medium max-w-lg mx-auto">
        మా కుమారుడి వివాహ మహోత్సవానికి మీరు సకుటుంబ సపరివార సమేతంగా విచ్చేసి
        వధూవరులను ఆశీర్వదించవలసి వినంతి.
      </Telugu>
      <p className="mt-3 text-base sm:text-lg italic text-muted-foreground max-w-lg mx-auto">
        We request the honour of your presence with your family to bless the
        bride and groom.
      </p>
    </SectionShell>
  );
}
