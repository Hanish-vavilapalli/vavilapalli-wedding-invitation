import { useState, useCallback, useMemo } from "react";

/**
 * Grand South Indian Movie Title Introduction:
 * "వావిలపల్లి వారి కళ్యాణ మహోత్సవం"
 *
 * Cinematic Sequence:
 * 1. Dark, warm cinematic background with a breathing golden volumetric spotlight and drifting gold ember particles.
 * 2. "వావిలపల్లి వారి" reveals first with an elegant cinematic fade and zoom (flanked by jasmine flowers, parrot, and shehnai musicians).
 * 3. "కళ్యాణ మహోత్సవం" reveals dramatically, letter-by-letter with a powerful smooth scale-up, 3D gold-embossed ruby relief, and a sweeping golden light beam.
 * 4. Subtle glowing gold particles, gentle swinging brass temple bells, and royal golden crest ornament.
 */

// Letter-by-letter syllables for "కళ్యాణ మహోత్సవం"
const WORD1_LETTERS = [
  { char: "క", id: "k1", delay: "2.0s" },
  { char: "ళ్యా", id: "lyaa", delay: "2.25s" },
  { char: "ణ", id: "na", delay: "2.5s" },
];

const WORD2_LETTERS = [
  { char: "మ", id: "ma", delay: "2.8s" },
  { char: "హో", id: "ho", delay: "3.05s" },
  { char: "త్స", id: "tsa", delay: "3.3s" },
  { char: "వం", id: "vam", delay: "3.55s" },
];

export function CinematicTitle() {
  const [animKey, setAnimKey] = useState(0);

  const triggerReplay = useCallback(() => {
    setAnimKey((prev) => prev + 1);
  }, []);

  // 26 procedural golden dust particles
  const particles = useMemo(() => {
    return Array.from({ length: 26 }, (_, i) => ({
      id: i,
      left: `${(i * 19 + 7) % 94}%`,
      top: `${(i * 23 + 15) % 80}%`,
      size: 2 + (i % 3) * 1.8,
      dur: `${3.8 + (i % 4) * 1.2}s`,
      delay: `${(i * 0.28) % 3.5}s`,
      opacity: 0.35 + (i % 3) * 0.2,
    }));
  }, []);

  return (
    <div
      className="relative mx-auto my-6 w-full max-w-2xl px-2 select-none"
      onClick={triggerReplay}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          triggerReplay();
        }
      }}
      title="Click anywhere to replay the cinematic title intro"
    >
      {/* Semantic text for accessibility and search engines */}
      <div className="sr-only">
        <h2>వావిలపల్లి వారి</h2>
        <h1>కళ్యాణ మహోత్సవం</h1>
      </div>

      {/* ======================================================== */}
      {/* 1. DARK, WARM CINEMATIC THEATER BACKDROP               */}
      {/* ======================================================== */}
      <div
        key={animKey}
        className="anim-cinematic-bg relative flex w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-amber-900/40 bg-gradient-to-b from-[#100703] via-[#1e0e05] to-[#120703] px-3 py-10 shadow-[0_24px_55px_-12px_rgba(0,0,0,0.7)] sm:px-8 sm:py-14"
      >
        {/* Soft Golden Volumetric Spotlight in center */}
        <div
          aria-hidden="true"
          className="anim-title-spotlight pointer-events-none absolute inset-0 flex items-center justify-center opacity-85"
          style={{
            background:
              "radial-gradient(circle at 50% 48%, rgba(245,158,11,0.32) 0%, rgba(217,119,6,0.14) 45%, rgba(16,7,3,0) 75%)",
          }}
        />

        {/* Slowly Rotating Divine Golden Halo Rays */}
        <div
          aria-hidden="true"
          className="anim-title-rays pointer-events-none absolute -top-12 size-80 sm:size-[420px] rounded-full opacity-60 blur-2xl"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.45) 0%, rgba(217,119,6,0.2) 42%, rgba(180,83,9,0) 72%)",
          }}
        />

        {/* Shimmering Floating Golden Ember Particles */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          {particles.map((p) => (
            <div
              key={p.id}
              className="anim-gold-particle absolute rounded-full bg-gradient-to-t from-amber-400 to-yellow-200"
              style={{
                left: p.left,
                top: p.top,
                width: `${p.size}px`,
                height: `${p.size}px`,
                boxShadow: "0 0 6px 1px rgba(245,158,11,0.85)",
                ["--particle-dur" as string]: p.dur,
                ["--particle-delay" as string]: p.delay,
              }}
            />
          ))}
        </div>

        {/* ======================================================== */}
        {/* 2. REVEAL 1: "వావిలపల్లి వారి" (Fade and Slow Zoom)       */}
        {/* ======================================================== */}
        <div className="anim-movie-line1-fadezoom relative z-10 flex w-full flex-col items-center justify-center">
          <svg
            viewBox="0 0 880 180"
            className="h-auto w-full max-w-[340px] sm:max-w-[480px] md:max-w-[540px] drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
            style={{ overflow: "visible" }}
          >
            <defs>
              <linearGradient id="brushGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="25%" stopColor="#fcd34d" />
                <stop offset="50%" stopColor="#d97706" />
                <stop offset="75%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>

              <filter id="ribbonShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.5" />
              </filter>
            </defs>

            {/* Arched Golden Brush Ribbon */}
            <path
              d="M 180,120 Q 440,65 700,118 Q 440,92 180,120 Z"
              fill="url(#brushGold)"
              filter="url(#ribbonShadow)"
              opacity="0.95"
            />
            <path
              d="M 200,125 Q 440,78 680,122 C 650,152 440,110 200,125 Z"
              fill="url(#brushGold)"
              opacity="0.32"
            />

            {/* Left Accent: White Jasmine Flowers Cluster with Green Leaves */}
            <g transform="translate(125, 65) scale(0.92)">
              <path d="M 38,50 C 10,22 25,70 38,50 Z" fill="#2d6a36" />
              <path d="M 42,55 C 18,80 72,66 42,55 Z" fill="#387a42" />
              <path d="M 56,40 C 38,12 76,22 56,40 Z" fill="#2d6a36" />
              <circle cx="48" cy="46" r="9.5" fill="#ffffff" stroke="#fef08a" strokeWidth="1.2" />
              <circle cx="36" cy="38" r="7.5" fill="#fefce8" stroke="#fef08a" strokeWidth="1" />
              <circle cx="60" cy="40" r="7.5" fill="#fefce8" stroke="#fef08a" strokeWidth="1" />
              <circle cx="40" cy="54" r="7.5" fill="#fefce8" stroke="#fef08a" strokeWidth="1" />
              <circle cx="56" cy="54" r="7.5" fill="#fefce8" stroke="#fef08a" strokeWidth="1" />
              <circle cx="48" cy="46" r="4" fill="#eab308" />
              <circle cx="36" cy="38" r="3" fill="#eab308" />
              <circle cx="60" cy="40" r="3" fill="#eab308" />
            </g>

            {/* Right Accent: Green Parrot perched on the banner */}
            <g transform="translate(670, 42) scale(0.7)">
              <path d="M 30,76 Q 40,125 48,145 Q 36,130 26,80 Z" fill="#15803d" />
              <path d="M 26,80 Q 32,132 38,158 Q 28,125 22,86 Z" fill="#dc2626" />
              <ellipse cx="30" cy="62" rx="13" ry="22" fill="#22c55e" />
              <path d="M 22,50 Q 38,72 28,90 Q 16,72 22,50 Z" fill="#16a34a" />
              <circle cx="28" cy="36" r="11" fill="#22c55e" />
              <path d="M 18,36 Q 10,38 14,45 Q 20,44 20,38 Z" fill="#ef4444" />
              <circle cx="26" cy="34" r="2.2" fill="#000000" />
              <circle cx="26.5" cy="33.5" r="0.7" fill="#ffffff" />
            </g>

            {/* Far Right: Traditional Shehnai & Mridangam Musicians */}
            <g transform="translate(740, 70) scale(0.72)" opacity="0.9">
              <circle cx="35" cy="28" r="6.5" fill="#92400e" />
              <path d="M 32,36 L 26,75 L 44,75 L 38,36 Z" fill="#b45309" />
              <path d="M 30,40 L 10,48 L 8,54 L 30,44 Z" fill="#ca8a04" stroke="#78350f" strokeWidth="0.8" />
              <circle cx="64" cy="34" r="6.5" fill="#92400e" />
              <path d="M 59,42 L 53,78 L 75,78 L 69,42 Z" fill="#b45309" />
              <ellipse cx="59" cy="58" rx="13" ry="6.5" fill="#ca8a04" stroke="#78350f" strokeWidth="1" />
            </g>

            {/* REAL TEXT: "వావిలపల్లి వారి" in bold calligraphic deep green */}
            <text
              x="440"
              y="108"
              textAnchor="middle"
              className="select-none font-bold font-telugu"
              style={{
                fontFamily: "'Noto Serif Telugu', 'Ramabhadra', serif",
                fontSize: "36px",
                fontWeight: 900,
                fill: "#143f1c",
                letterSpacing: "0.08em",
                filter:
                  "drop-shadow(0 1px 1px rgba(254, 240, 138, 0.9)) drop-shadow(0 3px 6px rgba(0,0,0,0.6))",
              }}
            >
              వావిలపల్లి వారి
            </text>
          </svg>
        </div>

        {/* ======================================================== */}
        {/* 3. REVEAL 2: "కళ్యాణ మహోత్సవం" (Letter-by-Letter Reveal)*/}
        {/* ======================================================== */}
        <div className="relative z-20 mt-3 flex w-full flex-col items-center justify-center py-2">
          {/* Subtle hanging brass bells on the left */}
          <div
            aria-hidden="true"
            className="anim-bell-swing pointer-events-none absolute -top-4 left-2 sm:left-6 md:left-10"
          >
            <svg viewBox="0 0 60 90" className="h-16 w-11 sm:h-20 sm:w-14">
              <defs>
                <linearGradient id="bellGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="45%" stopColor="#f59e0b" />
                  <stop offset="85%" stopColor="#b45309" />
                </linearGradient>
              </defs>
              <line x1="20" y1="0" x2="20" y2="40" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="3 2" />
              <line x1="36" y1="0" x2="36" y2="30" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="3 2" />
              <path
                d="M 12,40 C 12,30 28,30 28,40 L 32,56 C 34,64 6,64 8,56 Z"
                fill="url(#bellGoldGrad)"
                stroke="#78350f"
                strokeWidth="1.2"
              />
              <circle cx="20" cy="64" r="3.2" fill="#92400e" />
              <path
                d="M 29,30 C 29,22 41,22 41,30 L 44,44 C 46,50 24,50 26,44 Z"
                fill="url(#bellGoldGrad)"
                stroke="#78350f"
                strokeWidth="1"
              />
              <circle cx="35" cy="50" r="2.5" fill="#92400e" />
            </svg>
          </div>

          {/* REAL TEXT: "కళ్యాణ మహోత్సవం" Letter-by-Letter 3D Gold & Ruby */}
          <div className="relative flex flex-wrap items-center justify-center text-4xl sm:text-6xl md:text-7xl font-black font-telugu select-none">
            {/* Word 1: కళ్యాణ */}
            <div className="flex items-center">
              {WORD1_LETTERS.map((item) => (
                <span
                  key={item.id}
                  className="kalyanam-char px-0.5"
                  style={{ ["--letter-delay" as string]: item.delay }}
                >
                  {item.char}
                </span>
              ))}
            </div>

            {/* Graceful gap between the two words */}
            <span className="inline-block w-3 sm:w-6 md:w-8" />

            {/* Word 2: మహోత్సవం */}
            <div className="flex items-center">
              {WORD2_LETTERS.map((item) => (
                <span
                  key={item.id}
                  className="kalyanam-char px-0.5"
                  style={{ ["--letter-delay" as string]: item.delay }}
                >
                  {item.char}
                </span>
              ))}
            </div>

            {/* Golden light sweep across the text */}
            <div
              aria-hidden="true"
              className="anim-title-sweep pointer-events-none absolute inset-0 -skew-x-12"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 30%, rgba(254,240,138,0.55) 50%, rgba(255,255,255,0.85) 53%, rgba(254,240,138,0.55) 56%, transparent 72%)",
              }}
            />
          </div>

          {/* Underline Flowing Golden Flourish Ribbon */}
          <div className="mt-2 w-full max-w-md sm:max-w-lg px-6">
            <svg viewBox="0 0 600 50" className="h-auto w-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
              <defs>
                <linearGradient id="flowGold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#b45309" stopOpacity="0" />
                  <stop offset="15%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#fef08a" />
                  <stop offset="85%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#b45309" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M 50,15 C 180,35 420,35 550,15 C 450,28 200,28 50,15 Z"
                fill="url(#flowGold)"
                opacity="0.9"
              />
              <path
                d="M 120,22 Q 300,38 480,22"
                stroke="url(#flowGold)"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Royal Golden Filigree Crest Ornament below */}
          <div className="mt-1 flex items-center justify-center">
            <svg viewBox="0 0 200 45" className="h-6 w-36 sm:h-8 sm:w-48 text-amber-400">
              <path
                d="M 10,12 C 45,30 65,8 100,28 C 135,8 155,30 190,12 C 165,30 135,22 100,42 C 65,22 35,30 10,12 Z"
                fill="url(#flowGold)"
              />
              <circle cx="100" cy="28" r="4.5" fill="#fef08a" stroke="#b45309" strokeWidth="1" />
              <circle cx="65" cy="18" r="3" fill="#fde047" />
              <circle cx="135" cy="18" r="3" fill="#fde047" />
            </svg>
          </div>

          {/* Twinkling Golden Star Glints (✦, ✧) */}
          <div aria-hidden="true" className="pointer-events-none">
            <span
              className="anim-sparkle absolute -top-1 left-12 sm:left-24 text-amber-300 text-lg sm:text-xl"
              style={{ ["--sparkle-dur" as string]: "2.2s", ["--sparkle-delay" as string]: "0.4s" }}
            >
              ✦
            </span>
            <span
              className="anim-sparkle absolute top-2 right-12 sm:right-24 text-yellow-200 text-base sm:text-lg"
              style={{ ["--sparkle-dur" as string]: "2.7s", ["--sparkle-delay" as string]: "1.1s" }}
            >
              ✧
            </span>
            <span
              className="anim-sparkle absolute bottom-2 left-20 sm:left-36 text-yellow-400 text-base sm:text-lg"
              style={{ ["--sparkle-dur" as string]: "2.5s", ["--sparkle-delay" as string]: "0.7s" }}
            >
              ✦
            </span>
            <span
              className="anim-sparkle absolute bottom-1 right-20 sm:right-36 text-amber-300 text-lg sm:text-xl"
              style={{ ["--sparkle-dur" as string]: "3.0s", ["--sparkle-delay" as string]: "1.6s" }}
            >
              ✧
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 4. CINEMATIC REPLAY CONTROLLER & TAGLINE                 */}
        {/* ======================================================== */}
        <div className="relative z-20 mt-4 flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/40 px-4 py-1.5 text-[10px] font-semibold tracking-[0.25em] text-amber-300 uppercase shadow-sm transition-all hover:border-amber-400/60 hover:bg-amber-900/60 sm:text-xs">
          <span className="text-amber-400">▶</span>
          <span>Click to Replay Movie Title Card</span>
        </div>
      </div>
    </div>
  );
}
