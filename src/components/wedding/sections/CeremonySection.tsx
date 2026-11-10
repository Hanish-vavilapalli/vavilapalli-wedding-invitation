import { ceremonies } from "../config";

import { Kicker, Ornament, SectionShell, Telugu } from "./shared";

/** SECTION 4 — The seven traditional wedding rituals. */
export function CeremonySection() {
  return (
    <SectionShell id="ceremonies">
      <Kicker>Wedding Ceremonies</Kicker>
      <Telugu className="mt-2 text-base text-primary font-medium">మాంగల్య స్నేహ సంబంధాలు</Telugu>
      <Ornament />
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 max-w-lg mx-auto">
        {ceremonies.map((c) => (
          <figure
            key={c.id}
            data-ceremony={c.id}
            className="p-2 text-center transition-transform hover:scale-[1.02] last:col-span-2 sm:last:col-span-1"
          >
            <img
              src={c.img}
              alt={c.en}
              loading="lazy"
              className="mx-auto aspect-square h-auto w-full max-w-[130px] object-contain drop-shadow-sm"
            />
            <figcaption className="mt-2">
              <Telugu className="text-sm font-semibold text-primary">{c.te}</Telugu>
              <p className="text-xs text-muted-foreground">{c.en}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionShell>
  );
}
