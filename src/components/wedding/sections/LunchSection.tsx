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
        className="mx-auto mt-4 h-auto w-72 sm:w-96 md:w-[420px] drop-shadow-md"
      />
      <h2 className="mt-4 text-4xl font-extrabold text-primary sm:text-5xl">
        {wedding.lunch.date}
      </h2>
      {/* Lunch Time - Clearly Visible & Highlighted */}
      <div className="my-3 inline-block rounded-2xl border-2 border-gold/60 bg-gold/15 px-9 py-4 shadow-md">
        <p className="text-3xl sm:text-5xl font-black text-vermilion tracking-wide">
          {wedding.lunch.time}
        </p>
      </div>
      <p className="text-xl sm:text-3xl font-extrabold text-primary">{wedding.lunch.at}</p>
      <Ornament />
      <p className="text-lg sm:text-2xl leading-relaxed text-foreground font-semibold max-w-lg mx-auto">
        Join us for a traditional wedding feast, served with love, following
        the wedding ceremony.
      </p>
      <Telugu className="mt-3 text-lg sm:text-2xl font-black text-primary max-w-lg mx-auto">
        వివాహ భోజనానికి మీరు సకుటుంబ సమేతంగా విచ్చేయవలసిందిగా వినతి.
      </Telugu>
    </SectionShell>
  );
}
