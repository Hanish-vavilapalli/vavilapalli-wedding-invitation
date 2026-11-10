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
        className="mx-auto mt-4 h-auto w-32 sm:w-40 drop-shadow-sm"
      />
      <div className="mt-4 space-y-1 text-sm sm:text-base">
        <p className="font-semibold text-primary">
          {wedding.groom.father} & {wedding.groom.mother}
        </p>
        <p className="text-xs uppercase tracking-widest text-gold">
          Parents of the Groom
        </p>
        <Ornament />
        <p className="font-semibold text-primary">
          {wedding.bride.father} & {wedding.bride.mother}
        </p>
        <p className="text-xs uppercase tracking-widest text-gold">
          Parents of the Bride
        </p>
      </div>
      <Ornament />
      <Telugu className="text-sm leading-relaxed text-foreground max-w-md mx-auto">
        మా కుమారుడి వివాహ మహోత్సవానికి మీరు సకుటుంబ సపరివార సమేతంగా విచ్చేసి
        వధూవరులను ఆశీర్వదించవలసి వినంతి.
      </Telugu>
      <p className="mt-2 text-sm italic text-muted-foreground max-w-md mx-auto">
        We request the honour of your presence with your family to bless the
        bride and groom.
      </p>
    </SectionShell>
  );
}
