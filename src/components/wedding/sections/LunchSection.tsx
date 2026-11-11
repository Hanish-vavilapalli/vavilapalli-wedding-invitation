import { assets, wedding } from "../config";

import { Kicker, Ornament, SectionShell, Telugu } from "./shared";

/** SECTION 6 — Lunch invitation on a decorated wedding-stage atmosphere. */
export function LunchSection() {
  return (
    <SectionShell id="lunch">
      <Kicker>{wedding.lunch.title}</Kicker>
      <img
        src={assets.weddingStage}
        alt="Decorated wedding stage with a traditional sofa"
        loading="lazy"
        className="mx-auto mt-4 h-auto w-56 sm:w-64 drop-shadow-sm"
      />
      <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">
        {wedding.lunch.date}
      </h2>
      {/* Lunch Time - Clearly Visible & Highlighted */}
      <div className="my-3 inline-block rounded-2xl border-2 border-gold/40 bg-gold/10 px-8 py-3 shadow-sm">
        <p className="text-2xl sm:text-4xl font-extrabold text-vermilion tracking-wide">
          {wedding.lunch.time}
        </p>
      </div>
      <p className="text-base sm:text-xl font-bold text-primary">{wedding.lunch.at}</p>
      <Ornament />
      <p className="text-base sm:text-lg leading-relaxed text-foreground/80 font-medium max-w-lg mx-auto">
        Join us for a traditional wedding feast served with love, immediately
        after the muhurtham.
      </p>
      <Telugu className="mt-3 text-base sm:text-xl font-semibold text-primary max-w-lg mx-auto">
        వివాహ భోజనానికి మీరు సకుటుంబ సపరివార సమేతంగా విచ్చేయవలసి వినంతి.
      </Telugu>
    </SectionShell>
  );
}
