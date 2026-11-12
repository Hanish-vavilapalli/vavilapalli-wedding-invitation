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
    <div className="w-full max-w-sm sm:max-w-xl mx-auto px-1 py-3">
      <div className="flex items-center justify-center gap-1.5 min-[360px]:gap-2.5 min-[420px]:gap-4 sm:gap-7">
        {UNITS.map((unit, i) => (
          <div
            key={unit.key}
            className="flex items-center gap-1.5 min-[360px]:gap-2.5 min-[420px]:gap-4 sm:gap-7"
          >
            <div className="text-center min-w-[50px] min-[360px]:min-w-[58px] sm:min-w-[76px]">
              <div
                data-countdown={unit.key}
                className="text-2xl min-[360px]:text-3xl min-[420px]:text-4xl sm:text-6xl font-black tabular-nums text-primary tracking-tight"
              >
                {left === null ? "–" : String(left[unit.key]).padStart(2, "0")}
              </div>
              <div className="mt-1 text-[10px] min-[360px]:text-xs sm:text-base uppercase tracking-wider text-gold font-bold">
                {unit.label}
              </div>
            </div>
            {i < UNITS.length - 1 && (
              <span
                className="text-gold/60 font-serif text-lg min-[360px]:text-xl sm:text-4xl -mt-4 sm:-mt-5 select-none"
                aria-hidden="true"
              >
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
