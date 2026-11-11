import { assets, wedding } from "./config";
import { BananaTreeLeft, BananaTreeRight } from "./BananaPlant";
import {
  AnimatedFlower,
  AnimatedMangoLeaf,
  AnimatedMarigoldGarland,
  DriftingFoliage,
  FallingPetal,
  motionVars,
} from "./animated";

/** Faint temple watermark, centred behind all content. */
export function TempleWatermark() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden">
      <img
        src={assets.templeWatermark}
        alt=""
        loading="eager"
        className="h-[80vh] w-auto max-w-none opacity-[0.09] select-none pointer-events-none"
      />
    </div>
  );
}

/** ~9 independently swinging marigold strings, some with their own mango bunch. */
function TopGarlands() {
  const strings = [
    { id: "garland-1", left: "2%",  img: assets.garlandShort, height: "13vh", motion: { dur: 4.2, delay: 0.0, rot: 2.0 }, bunch: { dur: 4.3, delay: 0.1, rot: 1.8 } },
    { id: "garland-2", left: "13%", img: assets.garlandLong,  height: "19vh", motion: { dur: 5.0, delay: 0.5, rot: 2.6 }, bunch: { dur: 5.1, delay: 0.6, rot: 2.3 } },
    { id: "garland-3", left: "24%", img: assets.garlandShort, height: "12vh", motion: { dur: 3.8, delay: 1.2, rot: 1.8 }, bunch: { dur: 3.9, delay: 1.3, rot: 1.6 } },
    { id: "garland-4", left: "35%", img: assets.garlandLong,  height: "17vh", motion: { dur: 4.7, delay: 0.2, rot: 2.4 }, bunch: { dur: 4.8, delay: 0.3, rot: 2.1 } },
    { id: "garland-5", left: "46%", img: assets.garlandShort, height: "14vh", motion: { dur: 5.5, delay: 0.9, rot: 2.2 }, bunch: { dur: 5.4, delay: 1.0, rot: 1.9 } },
    { id: "garland-6", left: "57%", img: assets.garlandLong,  height: "20vh", motion: { dur: 4.4, delay: 1.6, rot: 2.7 }, bunch: { dur: 4.5, delay: 1.7, rot: 2.4 } },
    { id: "garland-7", left: "68%", img: assets.garlandShort, height: "12vh", motion: { dur: 3.9, delay: 0.7, rot: 1.7 }, bunch: { dur: 4.0, delay: 0.8, rot: 1.5 } },
    { id: "garland-8", left: "79%", img: assets.garlandLong,  height: "18vh", motion: { dur: 5.2, delay: 1.4, rot: 2.5 }, bunch: { dur: 5.3, delay: 1.5, rot: 2.2 } },
    { id: "garland-9", left: "92%", img: assets.garlandShort, height: "13vh", motion: { dur: 4.3, delay: 0.4, rot: 2.1 }, bunch: { dur: 4.1, delay: 0.5, rot: 1.7 } },
  ] as const;

  return (
    <div className="absolute inset-x-0 top-0 h-px">
      {strings.map((s) => (
        <div
          key={s.id}
          className="anim-swing pointer-events-none absolute top-0 flex -translate-x-1/2 flex-col items-center select-none"
          style={{
            ...motionVars(s.motion),
            left: s.left,
            transformOrigin: "50% 0%",
          }}
        >
          <AnimatedMarigoldGarland
            id={s.id}
            src={s.img}
            motion={{ ...s.motion }}
            style={{ height: s.height, width: "auto" }}
            className="!animate-none"
          />
          {s.bunch && (
            <AnimatedMangoLeaf
              id={`${s.id}-mango`}
              src={assets.mangoBunch}
              motion={{ ...s.bunch }}
              className={`!animate-none select-none ${
                s.img === assets.garlandLong ? "-mt-[3.8vh]" : "-mt-[3.2vh]"
              }`}
              style={{ width: "clamp(22px,4.5vw,42px)", height: "auto" }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/** Gentle foliage branches and pink buds along both edges. */
export function SideFoliage({ side }: { side: "left" | "right" }) {
  const mirror = side === "right";
  const items = [
    {
      id: `foliage-${side}-1`,
      src: assets.foliageBranch,
      top: "26%",
      width: "clamp(46px,10vw,110px)",
      motion: { dur: 7.2, delay: mirror ? 1.1 : 0.0, rot: 1.4, shift: 3 },
      kind: "foliage" as const,
      flip: false,
    },
    {
      id: `foliage-${side}-2`,
      src: assets.foliageBranch,
      top: "58%",
      width: "clamp(38px,8vw,92px)",
      motion: { dur: 8.0, delay: mirror ? 0.4 : 2.0, rot: 1.2, shift: 2 },
      kind: "foliage" as const,
      flip: true,
    },
    {
      id: `bud-${side}-1`,
      src: assets.pinkBud,
      top: "20%",
      width: "clamp(18px,4vw,38px)",
      motion: { dur: 6.0, delay: mirror ? 2.2 : 0.8, rot: 0.8 },
      kind: "flower" as const,
      flip: false,
    },
    {
      id: `bud-${side}-2`,
      src: assets.pinkBud,
      top: "46%",
      width: "clamp(15px,3.4vw,32px)",
      motion: { dur: 6.8, delay: mirror ? 0.9 : 1.7, rot: 0.7 },
      kind: "flower" as const,
      flip: true,
    },
    {
      id: `bud-${side}-3`,
      src: assets.pinkBud,
      top: "68%",
      width: "clamp(17px,3.8vw,36px)",
      motion: { dur: 6.4, delay: mirror ? 1.5 : 2.6, rot: 0.9 },
      kind: "flower" as const,
      flip: false,
    },
  ];

  return (
    <div
      className={`absolute top-[10vh] bottom-[16vh] w-[clamp(50px,12vw,130px)] ${side === "left" ? "left-0" : "right-0"
        }`}
      style={{ transform: mirror ? "scaleX(-1)" : undefined }}
    >
      {items.map((item) =>
        item.kind === "foliage" ? (
          <DriftingFoliage
            key={item.id}
            id={item.id}
            src={item.src}
            motion={{ ...item.motion, origin: "50% 0%" }}
            className="absolute"
            style={{
              top: item.top,
              width: item.width,
              height: "auto",
              ...(item.flip ? { transform: "scaleX(-1)" } : {}),
            }}
          />
        ) : (
          <AnimatedFlower
            key={item.id}
            id={item.id}
            src={item.src}
            motion={{ ...item.motion, origin: "50% 0%" }}
            className="absolute"
            style={{
              top: item.top,
              width: item.width,
              height: "auto",
              ...(item.flip ? { transform: "scaleX(-1)" } : {}),
            }}
          />
        ),
      )}
    </div>
  );
}

/** Bottom decor: compact brass kalash on mobile corners. */
function BottomDecor() {
  return (
    <div className="absolute inset-x-0 bottom-0 pointer-events-none md:hidden">
      <img
        src={assets.kalash}
        alt=""
        aria-hidden="true"
        loading="lazy"
        draggable={false}
        className="absolute bottom-0 left-0 h-auto w-[clamp(36px,9vw,56px)]"
      />
      <img
        src={assets.kalash}
        alt=""
        aria-hidden="true"
        loading="lazy"
        draggable={false}
        className="absolute bottom-0 right-0 h-auto w-[clamp(36px,9vw,56px)] scale-x-[-1]"
      />
    </div>
  );
}

/** A few slow floating petals. */
function Petals() {
  const petals = [
    { id: "petal-1", left: "8%", dur: 16, delay: 0, drift: "6vw", spin: 260 },
    { id: "petal-2", left: "22%", dur: 13, delay: 5, drift: "-5vw", spin: -300 },
    { id: "petal-3", left: "41%", dur: 18, delay: 9, drift: "7vw", spin: 220 },
    { id: "petal-4", left: "60%", dur: 14, delay: 2, drift: "-6vw", spin: -260 },
    { id: "petal-5", left: "74%", dur: 17, delay: 7, drift: "5vw", spin: 310 },
    { id: "petal-6", left: "90%", dur: 15, delay: 11, drift: "-7vw", spin: -240 },
  ];
  return (
    <>
      {petals.map((p) => (
        <FallingPetal
          key={p.id}
          id={p.id}
          src={assets.petal}
          dur={p.dur}
          delay={p.delay}
          drift={p.drift}
          spin={p.spin}
          className="absolute top-0"
          style={{ left: p.left, width: "clamp(14px,3vw,26px)", height: "auto" }}
        />
      ))}
    </>
  );
}

/**
 * The full traditional decoration frame: hanging garlands, both banana
 * plants, side foliage, bottom florals and drifting petals. Fixed to the
 * viewport so every section shares the same decorated environment.
 */
export function WeddingFrame() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 select-none overflow-hidden"
    >
      {/* Side banana trees (half screen): z-0 so central invitation content is never obstructed */}
      <div className="absolute inset-0 z-0">
        <BananaTreeLeft />
        <BananaTreeRight />
      </div>
      {/* Top garlands & falling petals: z-20 floating overhead */}
      <div className="absolute inset-0 z-20">
        <TopGarlands />
        <BottomDecor />
        <Petals />
      </div>
      <span className="sr-only">{wedding.heading}</span>
    </div>
  );
}
