import type { ReactNode } from "react";

import { Reveal } from "../Reveal";

/** Small gold ornamental divider. */
export function Ornament() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center gap-3 py-2">
      <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-gold/70" />
      <span className="text-gold text-xs sm:text-sm">❖</span>
      <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-gold/70" />
    </div>
  );
}

/** Shared shell for continuous invitation sections: fully unboxed, natural scroll flow. */
export function SectionShell({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative w-full py-10 sm:py-14 flex flex-col items-center justify-center text-center ${className}`}
    >
      <Reveal className="w-full max-w-xl text-center">
        {children}
      </Reveal>
    </section>
  );
}

/** Section heading, gold small caps style. */
export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold sm:text-xs">
      {children}
    </p>
  );
}

/** Telugu text in the dedicated Telugu serif. */
export function Telugu({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`font-telugu leading-relaxed text-primary/95 ${className}`}>{children}</p>;
}
