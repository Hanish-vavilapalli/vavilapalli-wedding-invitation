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
        className="mx-auto mt-4 h-auto w-52 sm:w-60 drop-shadow-sm"
      />
      <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">
        {wedding.venue.line1}
      </h2>
      <address className="mt-3 not-italic text-base sm:text-xl font-medium leading-relaxed text-foreground/90">
        {wedding.venue.line2}
        <br />
        {wedding.venue.line3}
        <br />
        {wedding.venue.line4}
      </address>
      <Ornament />
      {/* Date & Muhurtham Time - Prominent & Highly Visible */}
      <div className="my-3 rounded-2xl bg-gold/10 border border-gold/40 px-6 py-3.5 max-w-md mx-auto shadow-sm">
        <p className="text-base sm:text-xl font-bold text-primary">
          {wedding.dateLong}
        </p>
        <p className="mt-1 text-lg sm:text-2xl font-extrabold text-vermilion">
          Muhurtham: {wedding.muhurtham}
        </p>
      </div>
      <Telugu className="mt-2 text-base sm:text-xl font-semibold text-primary">
        కోమిరి గ్రామం, విజయనగరం జిల్లా, ఆంధ్రప్రదేశ్
      </Telugu>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground shadow-sm transition-all hover:bg-deep hover:shadow-md"
      >
        ➤ Get Directions
      </a>
    </SectionShell>
  );
}
