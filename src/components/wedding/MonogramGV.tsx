import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface MonogramGVProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

/**
 * Modern luxury wedding monogram logo: {GV}
 * (Gireesh & Sri Varsha)
 */
export function MonogramGV({ size = "md", className, ...props }: MonogramGVProps) {
  const sizeClasses = {
    sm: "size-10 text-sm",
    md: "size-14 text-lg",
    lg: "size-20 text-2xl",
  };

  return (
    <div
      aria-label="Gireesh and Sri Varsha Monogram {GV}"
      className={cn(
        "relative inline-flex items-center justify-center select-none rounded-full transition-transform hover:scale-105",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {/* Outer subtle glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-tr from-amber-500/20 via-yellow-400/30 to-amber-600/20 blur-sm"
      />

      {/* Circular border with luxury gold gradient */}
      <div
        className="relative flex size-full items-center justify-center rounded-full border border-amber-400/80 bg-gradient-to-b from-[#3B1208] via-[#2A0C05] to-[#190603] shadow-[0_4px_14px_rgba(180,83,9,0.3)]"
      >
        {/* Subtle inner decorative dash ring */}
        <div className="absolute inset-[3px] rounded-full border border-amber-300/30 border-dashed" />

        {/* Monogram typography */}
        <div className="relative z-10 flex items-center font-serif font-bold tracking-tight text-amber-200">
          <span className="font-sans font-light text-amber-400/80 -mr-0.5">{`{`}</span>
          <span className="bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-sm font-semibold">
            G
          </span>
          <span className="text-[0.6em] text-amber-400/60 mx-0.5">·</span>
          <span className="bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-sm font-semibold">
            V
          </span>
          <span className="font-sans font-light text-amber-400/80 -ml-0.5">{`}`}</span>
        </div>
      </div>
    </div>
  );
}

