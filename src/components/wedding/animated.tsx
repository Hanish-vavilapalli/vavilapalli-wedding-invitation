import type { CSSProperties } from "react";

/**
 * Independent per-element animation settings. Every animated decoration
 * receives its own Motion so no two elements share timing.
 */
export type Motion = {
  dur: number;
  delay: number;
  rot: number;
  skew?: number;
  origin?: string;
};

export function motionVars(m: Motion): CSSProperties {
  const vars: Record<string, string> = {
    "--dur": `${m.dur}s`,
    "--delay": `${m.delay}s`,
    "--rot": `${m.rot}deg`,
  };
  if (m.skew !== undefined) vars["--skew"] = `${m.skew}deg`;
  const style = vars as CSSProperties;
  if (m.origin) style.transformOrigin = m.origin;
  return style;
}

type AnimProps = {
  id: string;
  src: string;
  motion: Motion;
  className?: string;
  style?: CSSProperties;
};

function AnimImage({
  id,
  kind,
  animClass,
  src,
  motion,
  className = "",
  style,
}: AnimProps & { kind: string; animClass: string }) {
  return (
    <img
      data-anim-id={id}
      data-anim-kind={kind}
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      draggable={false}
      className={`${animClass} ${className}`}
      style={{ ...motionVars(motion), ...style }}
    />
  );
}

/** One banana leaf — its own image element with its own timing. */
export function AnimatedBananaLeaf(props: AnimProps) {
  return <AnimImage {...props} kind="banana-leaf" animClass="anim-sway" />;
}

/** One mango-leaf bunch — own image element with its own timing. */
export function AnimatedMangoLeaf(props: AnimProps) {
  return <AnimImage {...props} kind="mango-leaf" animClass="anim-sway" />;
}

/** One hanging marigold string — swings from its top attachment. */
export function AnimatedMarigoldGarland(props: AnimProps) {
  return <AnimImage {...props} kind="garland" animClass="anim-swing" />;
}

/** A single flower or bud — mostly stable, very gentle movement. */
export function AnimatedFlower(props: AnimProps) {
  return <AnimImage {...props} kind="flower" animClass="anim-sway" />;
}

/** A foliage branch — slow drift, barely perceptible. */
export function DriftingFoliage(props: AnimProps) {
  return <AnimImage {...props} kind="foliage" animClass="anim-drift" />;
}

/** A falling flower petal. Uses --drift / --spin instead of rot/skew. */
export function FallingPetal({
  id,
  src,
  dur,
  delay,
  drift,
  spin,
  className = "",
  style,
}: {
  id: string;
  src: string;
  dur: number;
  delay: number;
  drift: string;
  spin: number;
  className?: string;
  style?: CSSProperties;
}) {
  const vars: Record<string, string> = {
    "--dur": `${dur}s`,
    "--delay": `${delay}s`,
    "--drift": drift,
    "--spin": `${spin}deg`,
  };
  return (
    <img
      data-anim-id={id}
      data-anim-kind="petal"
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      draggable={false}
      className={`anim-petal ${className}`}
      style={{ ...vars, ...style } as CSSProperties}
    />
  );
}
