import { assets } from "./config";
import { AnimatedBananaLeaf, type Motion } from "./animated";

/**
 * Two banana plants built from 6 individually animated leaf PNGs each.
 * Left and right use different leaf stacks, durations, delays and rotation
 * ranges so the two plants move with distinct patterns.
 */

type LeafSpec = {
  id: string;
  src: string;
  top: string;
  width: string;
  left: string;
  origin: string;
  motion: Motion;
};

const LEFT_LEAVES: LeafSpec[] = [
  { id: "leaf-l-1", src: assets.bananaLeaf1, top: "0%", width: "94%", left: "-4%", origin: "10% 92%", motion: { dur: 5.4, delay: 0.0, rot: 2.4, skew: 1.2 } },
  { id: "leaf-l-2", src: assets.bananaLeaf2, top: "11%", width: "76%", left: "2%", origin: "12% 90%", motion: { dur: 4.3, delay: 0.7, rot: 3.1, skew: 1.8 } },
  { id: "leaf-l-3", src: assets.bananaLeaf1, top: "24%", width: "100%", left: "-6%", origin: "8% 94%", motion: { dur: 6.1, delay: 1.3, rot: 2.0, skew: 1.0 } },
  { id: "leaf-l-4", src: assets.bananaLeaf3, top: "40%", width: "60%", left: "6%", origin: "14% 88%", motion: { dur: 3.8, delay: 0.4, rot: 4.0, skew: 2.2 } },
  { id: "leaf-l-5", src: assets.bananaLeaf2, top: "54%", width: "84%", left: "-2%", origin: "10% 92%", motion: { dur: 4.9, delay: 1.8, rot: 2.7, skew: 1.5 } },
  { id: "leaf-l-6", src: assets.bananaLeaf3, top: "70%", width: "64%", left: "4%", origin: "12% 90%", motion: { dur: 4.5, delay: 1.0, rot: 3.4, skew: 2.0 } },
];

const RIGHT_LEAVES: LeafSpec[] = [
  { id: "leaf-r-1", src: assets.bananaLeaf2, top: "2%", width: "94%", left: "4%", origin: "90% 92%", motion: { dur: 5.8, delay: 0.5, rot: 2.2, skew: 1.3 } },
  { id: "leaf-r-2", src: assets.bananaLeaf1, top: "14%", width: "78%", left: "-2%", origin: "88% 90%", motion: { dur: 4.1, delay: 1.2, rot: 3.3, skew: 1.9 } },
  { id: "leaf-r-3", src: assets.bananaLeaf2, top: "27%", width: "100%", left: "0%", origin: "92% 94%", motion: { dur: 6.4, delay: 0.0, rot: 1.9, skew: 0.9 } },
  { id: "leaf-r-4", src: assets.bananaLeaf3, top: "43%", width: "56%", left: "8%", origin: "86% 88%", motion: { dur: 3.6, delay: 0.9, rot: 4.2, skew: 2.4 } },
  { id: "leaf-r-5", src: assets.bananaLeaf1, top: "56%", width: "82%", left: "2%", origin: "90% 92%", motion: { dur: 5.1, delay: 2.1, rot: 2.9, skew: 1.6 } },
  { id: "leaf-r-6", src: assets.bananaLeaf3, top: "72%", width: "60%", left: "6%", origin: "88% 90%", motion: { dur: 4.7, delay: 0.3, rot: 3.6, skew: 2.1 } },
];

function Plant({ side, leaves }: { side: "left" | "right"; leaves: LeafSpec[] }) {
  return (
    <div
      data-plant-side={side}
      className={`absolute top-[16vh] bottom-0 w-[clamp(44px,13vw,180px)] ${side === "left" ? "left-0" : "right-0"
        }`}
      style={{ transform: side === "right" ? "scaleX(-1)" : undefined }}
    >
      {leaves.map((leaf) => (
        <AnimatedBananaLeaf
          key={leaf.id}
          id={leaf.id}
          src={leaf.src}
          motion={leaf.motion}
          className="absolute"
          style={{
            top: leaf.top,
            left: leaf.left,
            width: leaf.width,
            height: "auto",
            transformOrigin: leaf.origin,
          }}
        />
      ))}
    </div>
  );
}

export function BananaPlantLeft() {
  return <Plant side="left" leaves={LEFT_LEAVES} />;
}

export function BananaPlantRight() {
  return <Plant side="right" leaves={RIGHT_LEAVES} />;
}

/**
 * Traditional South Indian Wedding Banana Trees (అరటి చెట్లు)
 * Slender, elegant corner framing: leaves arch upward without blocking center content.
 * Leaves plenty of open space in the middle so text and ceremonies are never covered.
 * Left tree faces inward; Right tree mirrored to face inward ("dont put same direction").
 * Animated with realistic living tree wind sway physics.
 */
export function BananaTreeLeft() {
  return (
    <div
      aria-hidden="true"
      className="anim-tree-sway pointer-events-none fixed bottom-0 left-0 select-none overflow-visible z-0 block"
      style={{
        transformOrigin: "bottom left",
        ["--tree-dur" as string]: "8.5s",
        ["--tree-delay" as string]: "0s",
        ["--tree-rot" as string]: "1.4deg",
      }}
    >
      <img
        data-anim-id="banana-tree-left"
        data-anim-kind="banana-tree"
        src={assets.bananaTree}
        alt=""
        loading="lazy"
        draggable={false}
        className="h-[clamp(220px,38vh,560px)] sm:h-[clamp(320px,50vh,560px)] w-auto object-contain object-bottom filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
        style={{
          ["--dur" as string]: "8.5s",
          ["--delay" as string]: "0s",
          ["--rot" as string]: "1.4deg",
        }}
      />
    </div>
  );
}

export function BananaTreeRight() {
  return (
    <div
      aria-hidden="true"
      className="anim-tree-sway pointer-events-none fixed bottom-0 right-0 select-none overflow-visible z-0 block"
      style={{
        transformOrigin: "bottom right",
        ["--tree-dur" as string]: "9.3s",
        ["--tree-delay" as string]: "1.4s",
        ["--tree-rot" as string]: "-1.5deg",
      }}
    >
      <img
        data-anim-id="banana-tree-right"
        data-anim-kind="banana-tree"
        src={assets.bananaTree}
        alt=""
        loading="lazy"
        draggable={false}
        className="h-[clamp(220px,38vh,560px)] sm:h-[clamp(320px,50vh,560px)] w-auto object-contain object-bottom filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
        style={{
          transform: "scaleX(-1)",
          ["--dur" as string]: "9.3s",
          ["--delay" as string]: "1.4s",
          ["--rot" as string]: "-1.5deg",
        }}
      />
    </div>
  );
}
