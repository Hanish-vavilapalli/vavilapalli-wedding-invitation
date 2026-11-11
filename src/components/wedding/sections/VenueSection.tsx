import { assets, wedding } from "../config";

import { Kicker, Ornament, SectionShell, Telugu } from "./shared";

/** SECTION 5 — Venue with a functional Get Directions button. */
export function VenueSection() {
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    wedding.mapsQuery,
  )}`;

  return (
    <SectionShell id="venue">
      <Kicker>{wedding.venue.title}</Kicker>
      <img
        src={assets.templeMain}
        alt="Traditional South Indian temple"
        loading="lazy"
        className="mx-auto mt-4 h-auto w-72 sm:w-96 md:w-[420px] drop-shadow-md"
      />
      <h2 className="mt-4 text-4xl font-extrabold text-primary sm:text-5xl">
        {wedding.venue.line1}
      </h2>
      <address className="mt-3 not-italic text-lg sm:text-2xl font-bold leading-relaxed text-foreground">
        {wedding.venue.line2}
        <br />
        {wedding.venue.line3}
        <br />
        {wedding.venue.line4}
      </address>
      <Ornament />
      {/* Date & Muhurtham Time - Prominent & Highly Visible */}
      <div className="my-3 rounded-2xl bg-gold/15 border-2 border-gold/50 px-8 py-4 max-w-md mx-auto shadow-md">
        <p className="text-lg sm:text-2xl font-black text-primary">
          {wedding.dateLong}
        </p>
        <p className="mt-1 text-2xl sm:text-4xl font-black text-vermilion">
          Muhurtham: {wedding.muhurtham}
        </p>
      </div>
      <Telugu className="mt-3 text-lg sm:text-2xl font-extrabold text-primary">
        కోమిరి గ్రామం, విజయనగరం జిల్లా, ఆంధ్రప్రదేశ్
      </Telugu>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-primary px-9 py-4 text-lg font-black text-primary-foreground shadow-md transition-all hover:bg-deep hover:scale-105 active:scale-95"
      >
        ➤ Get Directions
      </a>
    </SectionShell>
  );
}
