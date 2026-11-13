import { useEffect, useState } from "react";

import { assets, wedding } from "./config";

/**
 * Royal entrance screen / wedding card envelope.
 * When visitors open the invitation link, they see this auspicious welcome screen.
 * Tapping "OPEN INVITATION" satisfies the browser user-gesture requirement,
 * immediately blasts the auspicious Shehnai wedding music at full volume,
 * smoothly reveals the complete invitation card, and begins infinite non-stop playback.
 */
export function OpenInvitationGate() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOpen = () => {
    // 1. Immediately trigger the audio with direct user gesture
    const audio = document.getElementById("wedding-audio") as HTMLAudioElement | null;
    if (audio) {
      audio.currentTime = 0;
      audio.volume = 1.0;
      audio.play().catch(() => {});
    }

    // 2. Smooth reveal animation
    setIsExiting(true);
    setTimeout(() => {
      setIsOpen(true);
    }, 700);
  };

  if (isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md transition-all duration-700 ease-in-out ${
        isExiting ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Wedding Invitation Envelope"
    >
      <div className="relative w-full max-w-md rounded-3xl border-2 border-gold/70 bg-card p-6 sm:p-8 text-center shadow-2xl">
        {/* Traditional gold corner flourishes */}
        <div className="absolute top-2.5 left-2.5 size-4 border-t-2 border-l-2 border-gold/60 rounded-tl" />
        <div className="absolute top-2.5 right-2.5 size-4 border-t-2 border-r-2 border-gold/60 rounded-tr" />
        <div className="absolute bottom-2.5 left-2.5 size-4 border-b-2 border-l-2 border-gold/60 rounded-bl" />
        <div className="absolute bottom-2.5 right-2.5 size-4 border-b-2 border-r-2 border-gold/60 rounded-br" />

        {/* Lord Ganesha Auspicious Icon */}
        <div className="mx-auto flex justify-center">
          <img
            src={assets.ganesha}
            alt="Lord Ganesha"
            className="size-20 sm:size-24 object-contain drop-shadow-md transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Traditional Sanskrit / Telugu Invocations */}
        <p className="mt-3 font-telugu text-xs sm:text-sm font-semibold tracking-wider text-gold">
          ॥ {wedding.greetingTelugu} ॥
        </p>
        <p className="mt-1 font-telugu text-[0.7rem] sm:text-xs font-medium tracking-widest text-primary">
          ❖ {wedding.blessingsTelugu} ❖
        </p>

        <div className="my-3.5 mx-auto flex items-center justify-center gap-2 text-gold/60">
          <div className="h-px w-12 bg-gold/50" />
          <span className="text-xs">❖</span>
          <div className="h-px w-12 bg-gold/50" />
        </div>

        {/* Family Header */}
        <p className="font-telugu text-sm sm:text-base font-bold text-primary">
          వావిలపల్లి వారి కళ్యాణ మహోత్సవం
        </p>

        {/* Couple Names */}
        <div className="mt-2 space-y-0.5">
          <p className="font-heading font-serif text-lg sm:text-xl font-bold text-primary tracking-wide">
            {wedding.groom.name}
          </p>
          <p className="font-heading italic text-gold text-sm font-medium">weds</p>
          <p className="font-heading font-serif text-lg sm:text-xl font-bold text-primary tracking-wide">
            {wedding.bride.name}
          </p>
        </div>

        {/* Date & Muhurtham */}
        <p className="mt-3 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {wedding.dateLong}
        </p>
        <p className="text-[0.65rem] sm:text-[0.75rem] font-bold text-gold tracking-widest mt-0.5">
          MUHURTHAM: {wedding.muhurtham} IST
        </p>

        {/* Big Regal CTA Button */}
        <div className="mt-6 flex flex-col items-center">
          <button
            type="button"
            onClick={handleOpen}
            className="group relative inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-gold bg-primary px-8 py-3 text-primary-foreground shadow-[0_0_20px_rgba(177,138,69,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(177,138,69,0.55)] active:scale-95 cursor-pointer"
            aria-label="Open Wedding Invitation with Music"
          >
            <span className="text-lg">🪔</span>
            <span className="font-heading text-base sm:text-lg font-bold tracking-wider uppercase">
              OPEN INVITATION
            </span>
            <span className="text-lg">🪔</span>
          </button>

          <p className="mt-3 font-telugu text-[0.75rem] text-gold font-medium">
            ఆహ్వాన పత్రికను తెరవండి • Tap to Open with Music 🎵
          </p>
        </div>
      </div>
    </div>
  );
}
