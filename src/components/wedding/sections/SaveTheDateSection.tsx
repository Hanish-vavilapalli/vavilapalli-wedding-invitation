import { wedding } from "../config";
import { Countdown } from "../Countdown";

import { Kicker, Ornament, SectionShell, Telugu } from "./shared";

/** SECTION 3 — Save the Date with live IST countdown. */
export function SaveTheDateSection() {
  return (
    <SectionShell id="save-the-date">
      <Kicker>Save the Date</Kicker>
      <h2 className="mt-3 text-3xl font-bold text-primary sm:text-5xl">
        {wedding.dateLong}
      </h2>
      <div className="mt-6 flex items-center justify-center gap-5 sm:gap-10">
        {wedding.dateBoxes.map((box, i) => (
          <div key={box.label} className="flex items-center gap-5 sm:gap-10">
            <div className="text-center">
              <div className="text-4xl sm:text-6xl font-bold text-primary tracking-wide">{box.value}</div>
              <div className="mt-1 text-xs sm:text-sm uppercase tracking-[0.25em] text-gold font-semibold">
                {box.label}
              </div>
            </div>
            {i < wedding.dateBoxes.length - 1 && (
              <span className="text-3xl sm:text-4xl text-gold/60 font-light select-none">/</span>
            )}
          </div>
        ))}
      </div>
      <Ornament />
      {/* Auspicious Muhurtham Time - Grand & Clearly Visible to All */}
      <div className="my-4 inline-flex flex-col items-center justify-center rounded-2xl border-2 border-gold/45 bg-gold/10 px-8 py-4 shadow-sm">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-gold">
          Auspicious Muhurtham
        </span>
        <span className="mt-1 text-3xl sm:text-5xl font-extrabold tracking-wide text-vermilion">
          {wedding.muhurtham}
        </span>
      </div>

      <dl className="mt-1 space-y-2 text-base sm:text-xl text-foreground">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-1">
          <div className="flex items-center gap-2">
            <dt className="font-bold text-primary">Nakshatram:</dt>
            <dd className="font-medium text-foreground">{wedding.nakshatra}</dd>
          </div>
          <span className="hidden sm:inline text-gold">❖</span>
          <div className="flex items-center gap-2">
            <dt className="font-bold text-primary">Lagnam:</dt>
            <dd className="font-medium text-foreground">{wedding.lagnam}</dd>
          </div>
        </div>
      </dl>
      <Telugu className="mt-4 text-base sm:text-xl font-bold text-primary">
        ముహూర్తం: ఉదయం {wedding.muhurtham} • సేతాభిష నక్షత్రం • ధనుర్ లగ్నం
      </Telugu>
      <div className="mt-6">
        <Countdown />
      </div>
    </SectionShell>
  );
}
