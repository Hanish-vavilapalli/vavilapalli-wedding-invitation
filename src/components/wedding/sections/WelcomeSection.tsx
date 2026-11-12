import { assets, wedding } from "../config";

import { Kicker, Ornament, Telugu } from "./shared";

/** SECTION 1 — Traditional opening with Lord Ganesha. */
export function WelcomeSection() {
  return (
    <section
      id="welcome"
      className="relative flex w-full flex-col items-center justify-center px-4 pt-24 pb-10 sm:pt-32 sm:pb-14 text-center"
    >
      <img
        src={assets.ganesha}
        alt="Lord Ganesha"
        loading="eager"
        className="h-auto w-24 sm:w-28 drop-shadow-[0_8px_16px_oklch(0.4_0.08_65/0.25)]"
      />
      <Telugu className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-wider text-primary">
        {wedding.greetingTelugu}
      </Telugu>
      <Ornament />
      {/* Grand Cinematic Movie Title Card Image: వావిలపల్లి వారి కళ్యాణ మహోత్సవం */}
      <div className="relative my-4 sm:my-6 flex w-full max-w-xl items-center justify-center select-none overflow-visible">
        {/* Gentle divine golden aura glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute size-64 sm:size-80 rounded-full opacity-35 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.5) 0%, rgba(217,119,6,0.2) 45%, transparent 70%)",
          }}
        />
        <img
          src={assets.titleCinematic}
          alt="వావిలపల్లి వారి కళ్యాణ మహోత్సవం"
          loading="eager"
          className="anim-cinematic-title relative z-10 h-auto w-full max-w-[380px] sm:max-w-[500px] md:max-w-[560px] object-contain filter drop-shadow-[0_14px_28px_rgba(180,83,9,0.22)]"
        />
      </div>
      <Kicker>{wedding.heading}</Kicker>
      <h1 className="mt-4 flex flex-col items-center justify-center gap-1.5 text-4xl sm:text-6xl font-black tracking-wide text-primary">
        <span>{wedding.groom.name}</span>
        <span className="font-serif italic text-gold text-2xl sm:text-3xl font-normal tracking-widest lowercase">
          weds
        </span>
        <span>{wedding.bride.name}</span>
      </h1>
      <p className="mt-4 max-w-lg text-lg sm:text-2xl leading-relaxed text-foreground font-semibold">
        Together with our families, we joyfully invite you to bless us on our
        wedding day.
      </p>
      <div className="anim-scroll-hint mt-8 flex flex-col items-center gap-1.5 text-gold font-bold">
        <span className="text-sm sm:text-base uppercase tracking-[0.25em]">Scroll to Explore</span>
        <span aria-hidden="true" className="text-2xl">
          ⌄
        </span>
      </div>
    </section>
  );
}
