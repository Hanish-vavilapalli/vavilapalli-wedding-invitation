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
      <h2 className="mt-4 text-2xl font-semibold text-primary sm:text-3xl">
        {wedding.venue.line1}
      </h2>
      <address className="mt-2 not-italic text-sm leading-relaxed text-muted-foreground sm:text-base">
        {wedding.venue.line2}
        <br />
        {wedding.venue.line3}
        <br />
        {wedding.venue.line4}
      </address>
      <Ornament />
      <p className="text-sm font-medium text-primary">
        {wedding.dateLong} • Muhurtham {wedding.muhurtham}
      </p>
      <Telugu className="mt-1 text-sm text-foreground">
        కోమిరి గ్రామం, విజయనగరం జిల్లా, ఆంధ్రప్రదేశ్
      </Telugu>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-primary px-7 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-deep hover:shadow-md"
      >
        ➤ Get Directions
      </a>
    </SectionShell>
  );
}
