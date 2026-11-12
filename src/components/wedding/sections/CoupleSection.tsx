import { assets, wedding } from "../config";

import { Kicker, Ornament, SectionShell, Telugu } from "./shared";

/** SECTION 2 — Couple introduction with parents. */
export function CoupleSection() {
  return (
    <SectionShell id="couple">
      <Kicker>With the Blessings of Our Families</Kicker>
      <img
        src={assets.coupleVarmala}
        alt="Traditional wedding couple exchanging garlands"
        loading="lazy"
        className="mx-auto mt-4 h-auto w-64 sm:w-80 md:w-[380px] drop-shadow-md"
      />
      <h2 className="mt-4 text-4xl sm:text-6xl font-black text-primary">
        {wedding.groom.shortName}
      </h2>
      <p className="my-2 font-serif italic text-gold text-2xl sm:text-3xl tracking-widest lowercase font-normal">
        weds
      </p>
      <h2 className="text-4xl sm:text-6xl font-black text-primary">
        {wedding.bride.shortName}
      </h2>
      <Ornament />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-base sm:text-lg max-w-lg mx-auto py-2">
        <div className="space-y-1 rounded-2xl bg-gold/5 border border-gold/30 p-4 sm:p-2 sm:bg-transparent sm:border-0">
          <p className="font-extrabold text-primary text-lg sm:text-2xl">{wedding.groom.father}</p>
          <p className="text-foreground font-semibold text-base sm:text-xl">{wedding.groom.mother}</p>
          <p className="mt-1 text-xs uppercase tracking-widest text-gold font-bold sm:text-sm">Groom's Parents</p>
        </div>
        <div className="space-y-1 rounded-2xl bg-gold/5 border border-gold/30 p-4 sm:p-2 sm:bg-transparent sm:border-0">
          <p className="font-extrabold text-primary text-lg sm:text-2xl">{wedding.bride.father}</p>
          <p className="text-foreground font-semibold text-base sm:text-xl">{wedding.bride.mother}</p>
          <p className="mt-1 text-xs uppercase tracking-widest text-gold font-bold sm:text-sm">Bride's Parents</p>
        </div>
      </div>
      <Ornament />
      <Telugu className="text-lg sm:text-2xl leading-relaxed text-foreground font-bold max-w-lg mx-auto">
        మీ కుటుంబ సభ్యుల సమక్షంలో మా వివాహానికి విచ్చేసి ఆశీర్వదించాలని మనస్ఫూర్తిగా ఆహ్వానిస్తున్నాము.
      </Telugu>
      <p className="mt-3 text-base sm:text-xl italic text-foreground/85 font-medium max-w-lg mx-auto">
        We warmly invite you and your family to attend our wedding and bless
        the couple.
      </p>
    </SectionShell>
  );
}
