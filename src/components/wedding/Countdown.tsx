import { useEffect, useState } from "react";

import { wedding } from "./config";

type Left = { days: number; hours: number; minutes: number; seconds: number } | null;

function computeLeft(target: number): Left {
  const diff = target - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
] as const;

/** Live countdown to the muhurtham instant, accurate in IST. */
export function Countdown() {
  const target = new Date(wedding.muhurthamISO).getTime();
  // null until mounted: avoids an SSR/client hydration mismatch on the clock.
  const [left, setLeft] = useState<Left>(null);

  useEffect(() => {
    setLeft(computeLeft(target));
    const timer = setInterval(() => setLeft(computeLeft(target)), 1000);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-7 py-3">
      {UNITS.map((unit, i) => (
        <div key={unit.key} className="flex items-center gap-3 sm:gap-7">
          <div className="text-center px-1.5">
            <div
              data-countdown={unit.key}
              className="text-4xl font-black tabular-nums text-primary sm:text-6xl"
            >
              {left === null ? "–" : String(left[unit.key]).padStart(2, "0")}
            </div>
            <div className="mt-1 text-sm uppercase tracking-[0.2em] text-gold sm:text-base font-bold">
              {unit.label}
            </div>
          </div>
          {i < UNITS.length - 1 && (
            <span className="text-gold/60 font-serif text-3xl sm:text-4xl -mt-5 select-none">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
