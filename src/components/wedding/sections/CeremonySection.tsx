import { ceremonies } from "../config";

import { Kicker, Ornament, SectionShell, Telugu } from "./shared";

/** SECTION 4 — The seven traditional wedding rituals. */
export function CeremonySection() {
  return (
    <SectionShell id="ceremonies">
      <Kicker>Wedding Ceremonies</Kicker>
      <Telugu className="mt-2 text-lg sm:text-2xl text-primary font-bold">మాంగల్య స్నేహ సంబంధాలు</Telugu>
      <Ornament />
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 max-w-xl mx-auto">
        {ceremonies.map((c) => (
          <figure
            key={c.id}
            data-ceremony={c.id}
            className="p-3 text-center transition-transform hover:scale-[1.02] last:col-span-2 sm:last:col-span-1"
          >
            <img
              src={c.img}
              alt={c.en}
              loading="lazy"
              className="mx-auto aspect-square h-auto w-full max-w-[140px] sm:max-w-[160px] object-contain drop-shadow-sm"
            />
            <figcaption className="mt-2.5">
              <Telugu className="text-base sm:text-xl font-bold text-primary">{c.te}</Telugu>
              <p className="mt-0.5 text-xs sm:text-sm font-semibold tracking-wide text-muted-foreground">{c.en}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionShell>
  );
}
