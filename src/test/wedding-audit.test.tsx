import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";

import { assets, ceremonies, wedding } from "@/components/wedding/config";
import { SideFoliage, WeddingFrame } from "@/components/wedding/WeddingFrame";
import { BananaPlantLeft, BananaPlantRight } from "@/components/wedding/BananaPlant";
import { AnimatedMangoLeaf } from "@/components/wedding/animated";

afterEach(cleanup);

/** Resolve an imported asset URL back to its on-disk file. */
function assetFile(url: string): string {
  if (url.startsWith("file:")) return fileURLToPath(url);
  const stripped = url.replace(/^\/+/, "").split("?")[0] ?? url;
  return path.resolve(process.cwd(), stripped);
}

function collectAssetUrls(value: unknown): string[] {
  if (typeof value === "string") return value.match(/\.(png|jpe?g|webp)$/i) ? [value] : [];
  if (Array.isArray(value)) return value.flatMap(collectAssetUrls);
  if (value && typeof value === "object") return Object.values(value).flatMap(collectAssetUrls);
  return [];
}

/** WebP alpha presence: VP8X alpha flag, or the VP8L alpha_is_used bit. */
function webpHasAlpha(file: string): boolean {
  const buf = fs.readFileSync(file);
  expect(buf.subarray(0, 4).toString("ascii")).toBe("RIFF");
  expect(buf.subarray(8, 12).toString("ascii")).toBe("WEBP");
  const chunk = buf.subarray(12, 16).toString("ascii");
  if (chunk === "VP8X") return (buf.readUInt8(20) & 0x10) !== 0;
  if (chunk === "VP8L") return (buf.readUInt8(21) & 0x02) !== 0;
  if (chunk === "VP8 ") return false; // simple lossy WebP: no alpha channel
  throw new Error(`unknown webp chunk in ${file}: ${chunk}`);
}

/** Unique (duration, delay, rotation) tuples for a kind of animated element. */
function timingTuples(container: HTMLElement, kind: string) {
  return Array.from(container.querySelectorAll(`[data-anim-kind="${kind}"]`)).map((el) => {
    const style = (el as HTMLElement).getAttribute("style") ?? "";
    const dur = style.match(/--dur:\s*([\d.]+)s/)?.[1];
    const delay = style.match(/--delay:\s*(-?[\d.]+)s/)?.[1];
    const rot = style.match(/--rot:\s*(-?[\d.]+)deg/)?.[1];
    return { id: el.getAttribute("data-anim-id"), dur, delay, rot, key: `${dur}|${delay}|${rot}` };
  });
}

describe("Wedding PNG asset audit", () => {
  it("every referenced asset exists on disk as a transparent (alpha) WebP", () => {
    const urls = collectAssetUrls({ ...assets, ceremonies });
    expect(urls.length).toBeGreaterThanOrEqual(29);
    for (const url of urls) {
      const file = assetFile(url);
      expect(fs.existsSync(file), `missing asset: ${url}`).toBe(true);
      expect(webpHasAlpha(file), `no alpha channel: ${url}`).toBe(true);
    }
  });

  it("both banana plants have 6 separately animated leaf image elements", () => {
    const { container } = render(
      <>
        <BananaPlantLeft />
        <BananaPlantRight />
      </>,
    );
    const left = container.querySelector('[data-plant-side="left"]');
    const right = container.querySelector('[data-plant-side="right"]');
    expect(left?.querySelectorAll('img[data-anim-kind="banana-leaf"]')).toHaveLength(6);
    expect(right?.querySelectorAll('img[data-anim-kind="banana-leaf"]')).toHaveLength(6);
    // No shared composite: each leaf is its own <img>, no other imgs in the plant.
    expect(left?.querySelectorAll("img")).toHaveLength(6);
    expect(right?.querySelectorAll("img")).toHaveLength(6);
  });

  it("every animated leaf has a unique id and independent timing", () => {
    const { container } = render(
      <>
        <WeddingFrame />
        <BananaPlantLeft />
        <BananaPlantRight />
        <SideFoliage side="left" />
        <SideFoliage side="right" />
      </>,
    );
    for (const kind of ["banana-leaf", "mango-leaf", "garland", "flower", "foliage"]) {
      const elements = timingTuples(container, kind);
      expect(elements.length, kind).toBeGreaterThan(0);
      const ids = elements.map((e) => e.id);
      expect(new Set(ids).size, kind).toBe(ids.length);
      // Independent controls: no two elements share duration + delay + rotation
      const keys = elements.map((e) => e.key);
      expect(new Set(keys).size, `${kind} shares timing: ${keys.sort()}`).toBe(keys.length);
    }
  });

  it("has at least 9 independently swinging marigold strings", () => {
    const { container } = render(<WeddingFrame />);
    const garlands = timingTuples(container, "garland");
    expect(garlands.length).toBeGreaterThanOrEqual(9);
    expect(new Set(garlands.map((g) => g.key)).size).toBe(garlands.length);
  });

  it("left and right banana plants use different timing patterns", () => {
    const { container } = render(
      <>
        <BananaPlantLeft />
        <BananaPlantRight />
      </>,
    );
    const timing = (side: string) =>
      Array.from(
        container.querySelectorAll(`[data-plant-side="${side}"] [data-anim-kind="banana-leaf"]`),
      ).map((el) => (el as HTMLElement).getAttribute("style"));
    expect(timing("left")).not.toEqual(timing("right"));
  });

  it("wedding facts match the invitation exactly", () => {
    expect(wedding.groom.name).toBe("Chi. Gireesh");
    expect(wedding.groom.shortName).toBe("Gireesh");
    expect(wedding.bride.name).toBe("Chi. La. Sow. Sri Varsha");
    expect(wedding.bride.shortName).toBe("Varsha");
    expect(wedding.heading).toBe("Vavilapalli Family's Wedding Invitation");
    expect(wedding.groom.father).toBe("Sri Vavilapalli Applaswami Naidu");
    expect(wedding.groom.mother).toBe("Smt. Chinnammadu");
    expect(wedding.bride.father).toBe("Sri Pogiri Laxmana Naidu");
    expect(wedding.bride.mother).toBe("Smt. Usha Rani");
    expect(wedding.dateLong).toBe("Wednesday, 16 December 2026");
    expect(wedding.muhurtham).toBe("8:03 AM");
    expect(wedding.muhurthamISO).toBe("2026-12-16T08:03:00+05:30");
    expect(wedding.nakshatra).toBe("Shatabhisha Nakshatra");
    expect(wedding.lagnam).toBe("Dhanur Lagnam");
    expect(wedding.venue.line2).toBe("Komiri Village,");
    expect(wedding.lunch.time).toBe("12:00 Noon Onwards");
    expect(wedding.lunch.at).toBe("At the Wedding Venue.");
    expect(wedding.complimentsTelugu).toContain("వావిలపల్లి బ్రదర్స్ మరియు బంధుమిత్రుల అభినందనలతో");
    expect(wedding.dateBoxes.map((b) => b.value)).toEqual(["16", "12", "26"]);
    expect(ceremonies.map((c) => c.en)).toEqual([
      "Gowri Pooja",
      "Jilakarra Bellam",
      "Mangalya Dharanam",
      "Saptapadi",
      "Varamala",
      "Talambralu",
      "Kanyadaanam",
    ]);
  });
});
