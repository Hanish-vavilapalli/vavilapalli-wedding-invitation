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
        className="mx-auto mt-4 h-auto w-52 sm:w-64 drop-shadow-sm"
      />
      <h2 className="mt-4 text-3xl sm:text-5xl font-semibold text-primary">
        {wedding.groom.name}
      </h2>
      <p className="my-1.5 font-serif italic text-gold text-sm sm:text-base tracking-[0.25em] uppercase">
        weds
      </p>
      <h2 className="text-3xl sm:text-5xl font-semibold text-primary">
        {wedding.bride.name}
      </h2>
      <Ornament />
      <div className="grid grid-cols-2 gap-4 text-sm sm:text-base max-w-lg mx-auto py-1">
        <div>
          <p className="font-semibold text-primary">{wedding.groom.father}</p>
          <p className="text-muted-foreground">{wedding.groom.mother}</p>
          <p className="mt-1 text-[10px] uppercase tracking-widest text-gold sm:text-[11px]">Groom's Parents</p>
        </div>
        <div>
          <p className="font-semibold text-primary">{wedding.bride.father}</p>
          <p className="text-muted-foreground">{wedding.bride.mother}</p>
          <p className="mt-1 text-[10px] uppercase tracking-widest text-gold sm:text-[11px]">Bride's Parents</p>
        </div>
      </div>
      <Ornament />
      <Telugu className="text-sm sm:text-base leading-relaxed text-foreground max-w-md mx-auto">
        మీ కుటుంబ సభ్యుల సమక్షంలో మా వివాహానికి విచ్చేసి ఆశీర్వదించాలని మనస్ఫూర్తిగా ఆహ్వానిస్తున్నాము.
      </Telugu>
      <p className="mt-2 text-sm italic text-muted-foreground max-w-md mx-auto">
        We warmly invite you and your family to attend our wedding and bless
        the couple.
      </p>
    </SectionShell>
  );
}
