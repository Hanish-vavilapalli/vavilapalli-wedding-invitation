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
      <h2 className="mt-4 text-2xl font-semibold text-primary sm:text-3xl">
        {wedding.lunch.date}
      </h2>
      <p className="mt-1 text-lg font-medium text-gold">{wedding.lunch.time}</p>
      <p className="text-sm text-muted-foreground">{wedding.lunch.at}</p>
      <Ornament />
      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base max-w-md mx-auto">
        Join us for a traditional wedding feast served with love, immediately
        after the muhurtham.
      </p>
      <Telugu className="mt-2 text-sm text-foreground max-w-md mx-auto">
        వివాహ భోజనానికి మీరు సకుటుంబ సపరివార సమేతంగా విచ్చేయవలసి వినంతి.
      </Telugu>
    </SectionShell>
  );
}
