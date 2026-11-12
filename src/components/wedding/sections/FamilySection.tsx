import { assets, wedding } from "../config";

import { Kicker, Ornament, SectionShell, Telugu } from "./shared";

/** SECTION 7 — Family invitation. */
export function FamilySection() {
  return (
    <SectionShell id="family">
      <Kicker>Invited With Love</Kicker>
      <img
        src={assets.coupleGreeting}
        alt="Groom and Bride welcoming with folded hands"
        loading="lazy"
        className="mx-auto mt-4 h-auto w-72 sm:w-88 md:w-[400px] drop-shadow-md"
      />
      <div className="mt-5 space-y-4 text-base sm:text-lg max-w-xl mx-auto">
        <div className="rounded-2xl bg-gold/5 border border-gold/30 p-4 sm:p-5">
          <p className="text-xl sm:text-3xl font-black text-primary">
            {wedding.groom.father} & {wedding.groom.mother}
          </p>
          <p className="mt-1.5 text-xs sm:text-sm uppercase tracking-widest text-gold font-bold">
            Parents of the Groom
          </p>
        </div>
        <Ornament />
        <div className="rounded-2xl bg-gold/5 border border-gold/30 p-4 sm:p-5">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-gold font-bold mb-2">
            With Best Compliments • బంధుమిత్రుల అభినందనలు
          </p>
          <Telugu className="text-base sm:text-xl font-bold leading-relaxed text-primary">
            {wedding.complimentsTelugu}
          </Telugu>
        </div>
      </div>
      <Ornament />
      <Telugu className="text-lg sm:text-2xl leading-relaxed text-foreground font-black max-w-lg mx-auto">
        మా కుమారుడి వివాహ మహోత్సవానికి మీరు సకుటుంబ సమేతంగా విచ్చేసి
        వధూవరులను ఆశీర్వదించి ఆశీర్వచనాలు అందించవలసిందిగా మనస్ఫూర్తిగా
        కోరుకుంటున్నాము.
      </Telugu>
      <p className="mt-3 text-base sm:text-xl italic text-foreground/85 font-semibold max-w-lg mx-auto">
        We request the honour of your presence with your family to bless the
        bride and groom.
      </p>
    </SectionShell>
  );
}
