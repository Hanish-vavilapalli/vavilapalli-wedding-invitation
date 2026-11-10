import { wedding } from "../config";
import { Countdown } from "../Countdown";

import { Kicker, Ornament, SectionShell, Telugu } from "./shared";

/** SECTION 3 — Save the Date with live IST countdown. */
export function SaveTheDateSection() {
  return (
    <SectionShell id="save-the-date">
      <Kicker>Save the Date</Kicker>
      <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
        {wedding.dateLong}
      </h2>
      <div className="mt-5 flex items-center justify-center gap-4 sm:gap-8">
        {wedding.dateBoxes.map((box, i) => (
          <div key={box.label} className="flex items-center gap-4 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-5xl font-semibold text-primary tracking-wide">{box.value}</div>
              <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold">
                {box.label}
              </div>
            </div>
            {i < wedding.dateBoxes.length - 1 && (
              <span className="text-2xl sm:text-3xl text-gold/60 font-light select-none">/</span>
            )}
          </div>
        ))}
      </div>
      <Ornament />
      <dl className="space-y-1.5 text-sm sm:text-base text-muted-foreground">
        <div className="flex justify-center gap-2">
          <dt className="font-semibold text-primary">Muhurtham:</dt>
          <dd className="font-medium text-foreground">{wedding.muhurtham}</dd>
        </div>
        <div className="flex justify-center gap-2">
          <dt className="font-semibold text-primary">Nakshatram:</dt>
          <dd className="font-medium text-foreground">{wedding.nakshatra}</dd>
        </div>
        <div className="flex justify-center gap-2">
          <dt className="font-semibold text-primary">Lagnam:</dt>
          <dd className="font-medium text-foreground">{wedding.lagnam}</dd>
        </div>
      </dl>
      <Telugu className="mt-3 text-xs sm:text-sm text-foreground">
        ముహూర్తం: ఉదయం {wedding.muhurtham} • సేతాభిష నక్షత్రం • ధనుర్ లగ్నం
      </Telugu>
      <div className="mt-6">
        <Countdown />
      </div>
    </SectionShell>
  );
}
