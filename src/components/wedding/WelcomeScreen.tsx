import { useEffect, useState } from "react";

import { assets, wedding } from "./config";

/**
 * Royal Welcome Screen & Door Opening Experience for Vavilapalli Kalyanotsavam.
 *
 * Flow:
 * 1. Initial State:
 *    - Full-screen Royal Deep Maroon & Antique Gold backdrop.
 *    - Twin Royal Palace Doors joined at the center with traditional gold borders.
 *    - Auspicious Lord Ganesha, sacred Telugu blessings, VAVILAPALLI FAMILY crest.
 *    - Pulsating golden "🪔 OPEN INVITATION 🪔" button.
 *    - Audio is silent until visitor interacts.
 *
 * 2. On "OPEN INVITATION" Tap:
 *    - Directly triggers the Shehnai wedding audio at full volume (100% compliant with iOS & Android browser policies).
 *    - Royal doors smoothly part open to the left and right in a grand cinematic sweep.
 *    - Celebratory flower petals shower downward.
 *    - Smoothly transitions to reveal the complete existing wedding invitation intact.
 */
export function WelcomeScreen() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  // Lock scroll while welcome screen is active
  useEffect(() => {
    if (!isInvitationOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isInvitationOpen]);

  const handleOpenInvitation = () => {
    // 1. Mark audio as active
    if (typeof window !== "undefined") {
      (window as unknown as { __weddingAudioActive?: boolean }).__weddingAudioActive = true;
    }

    // 2. Immediately play audio via user activation (unlocks Chrome / iOS Safari unmuted audio)
    const audio = document.getElementById("wedding-audio") as HTMLAudioElement | null;
    if (audio) {
      audio.currentTime = 0;
      audio.volume = 1.0;
      audio.play().catch(console.error);
    }

    // 3. Trigger cinematic door-opening transition
    setIsOpening(true);

    // 4. Unmount after doors have opened completely
    setTimeout(() => {
      setIsInvitationOpen(true);
    }, 1100);
  };

  if (isInvitationOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden pointer-events-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Vavilapalli Family Wedding Invitation Welcome Screen"
    >
      {/* ================= LEFT ROYAL DOOR ================= */}
      <div
        className={`absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-[#240407] via-[#36090F] to-[#200306] border-r-2 border-[#D4AF37]/60 shadow-[10px_0_30px_rgba(0,0,0,0.8)] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] z-20 ${
          isOpening ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        {/* Subtle patterned gold frame inside left door */}
        <div className="absolute inset-4 sm:inset-8 border border-[#D4AF37]/30 rounded-l-2xl pointer-events-none" />
        <div className="absolute top-6 left-6 size-6 border-t-2 border-l-2 border-[#D4AF37]/60 rounded-tl pointer-events-none" />
        <div className="absolute bottom-6 left-6 size-6 border-b-2 border-l-2 border-[#D4AF37]/60 rounded-bl pointer-events-none" />
        {/* Royal door gold motif accent */}
        <div className="absolute top-1/2 right-3 -translate-y-1/2 flex flex-col items-center gap-2 text-[#D4AF37]/50 select-none">
          <span className="text-base sm:text-xl">❖</span>
          <div className="h-16 sm:h-24 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/60 to-transparent" />
          <span className="text-base sm:text-xl">❖</span>
        </div>
      </div>

      {/* ================= RIGHT ROYAL DOOR ================= */}
      <div
        className={`absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-l from-[#240407] via-[#36090F] to-[#200306] border-l-2 border-[#D4AF37]/60 shadow-[-10px_0_30px_rgba(0,0,0,0.8)] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] z-20 ${
          isOpening ? "translate-x-full" : "translate-x-0"
        }`}
      >
        {/* Subtle patterned gold frame inside right door */}
        <div className="absolute inset-4 sm:inset-8 border border-[#D4AF37]/30 rounded-r-2xl pointer-events-none" />
        <div className="absolute top-6 right-6 size-6 border-t-2 border-r-2 border-[#D4AF37]/60 rounded-tr pointer-events-none" />
        <div className="absolute bottom-6 right-6 size-6 border-b-2 border-r-2 border-[#D4AF37]/60 rounded-br pointer-events-none" />
        {/* Royal door gold motif accent */}
        <div className="absolute top-1/2 left-3 -translate-y-1/2 flex flex-col items-center gap-2 text-[#D4AF37]/50 select-none">
          <span className="text-base sm:text-xl">❖</span>
          <div className="h-16 sm:h-24 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/60 to-transparent" />
          <span className="text-base sm:text-xl">❖</span>
        </div>
      </div>

      {/* ================= TOP FESTIVE GARLANDS ================= */}
      <div
        className={`absolute top-0 left-0 right-0 z-25 flex justify-center pointer-events-none transition-transform duration-700 ease-out ${
          isOpening ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="flex items-center gap-2 sm:gap-6 -mt-2">
          <img
            src={assets.garlandShort}
            alt=""
            className="w-20 sm:w-28 object-contain drop-shadow-md opacity-90"
            draggable={false}
          />
          <img
            src={assets.mangoBunch}
            alt=""
            className="w-16 sm:w-24 object-contain drop-shadow-md opacity-95"
            draggable={false}
          />
          <img
            src={assets.garlandShort}
            alt=""
            className="w-20 sm:w-28 object-contain drop-shadow-md opacity-90 scale-x-[-1]"
            draggable={false}
          />
        </div>
      </div>

      {/* ================= SHOWERING FLOWER PETALS (Active during door opening) ================= */}
      {isOpening && (
        <div className="absolute inset-0 z-35 pointer-events-none overflow-hidden">
          {[
            { id: "p1", left: "10%", delay: "0s", dur: "1.2s", size: "w-5" },
            { id: "p2", left: "25%", delay: "0.15s", dur: "1.4s", size: "w-6" },
            { id: "p3", left: "40%", delay: "0.05s", dur: "1.3s", size: "w-5" },
            { id: "p4", left: "55%", delay: "0.2s", dur: "1.5s", size: "w-7" },
            { id: "p5", left: "70%", delay: "0.1s", dur: "1.2s", size: "w-6" },
            { id: "p6", left: "85%", delay: "0.25s", dur: "1.4s", size: "w-5" },
            { id: "p7", left: "18%", delay: "0.3s", dur: "1.3s", size: "w-6" },
            { id: "p8", left: "82%", delay: "0.35s", dur: "1.5s", size: "w-5" },
          ].map((petal) => (
            <img
              key={petal.id}
              src={assets.petal}
              alt=""
              className={`absolute -top-10 ${petal.size} object-contain animate-[anim-petal-fall_${petal.dur}_ease-out_forwards]`}
              style={{
                left: petal.left,
                animationDelay: petal.delay,
              }}
              draggable={false}
            />
          ))}
        </div>
      )}

      {/* ================= CENTRAL ROYAL INVITATION CARD CREST ================= */}
      <div
        className={`relative z-30 flex min-h-screen w-full items-center justify-center p-4 transition-all duration-700 ease-out ${
          isOpening
            ? "scale-110 opacity-0 pointer-events-none"
            : "scale-100 opacity-100 pointer-events-auto"
        }`}
      >
        <div className="relative w-full max-w-md rounded-3xl border-2 border-[#D4AF37]/80 bg-[#280509]/90 px-6 py-7 sm:px-9 sm:py-8 text-center shadow-[0_0_50px_rgba(0,0,0,0.85)] backdrop-blur-md">
          {/* Ornate corner motifs */}
          <div className="absolute top-2.5 left-2.5 size-4 border-t-2 border-l-2 border-[#D4AF37] rounded-tl pointer-events-none" />
          <div className="absolute top-2.5 right-2.5 size-4 border-t-2 border-r-2 border-[#D4AF37] rounded-tr pointer-events-none" />
          <div className="absolute bottom-2.5 left-2.5 size-4 border-b-2 border-l-2 border-[#D4AF37] rounded-bl pointer-events-none" />
          <div className="absolute bottom-2.5 right-2.5 size-4 border-b-2 border-r-2 border-[#D4AF37] rounded-br pointer-events-none" />

          {/* Centered Lord Ganesha with gentle divine halo */}
          <div className="mx-auto flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-[#D4AF37]/20 blur-md" />
              <img
                src={assets.ganesha}
                alt="Lord Ganesha"
                className="relative size-20 sm:size-24 object-contain drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)] transition-transform duration-500 hover:scale-105"
                draggable={false}
              />
            </div>
          </div>

          {/* Sacred Telugu & Sanskrit Invocations */}
          <p className="mt-3.5 font-telugu text-xs sm:text-sm font-semibold tracking-wider text-[#E5C158]">
            ॥ {wedding.greetingTelugu} ॥
          </p>
          <p className="mt-1 font-telugu text-[0.7rem] sm:text-xs font-medium tracking-widest text-[#F3E5AB]">
            ❖ {wedding.blessingsTelugu} ❖
          </p>

          <div className="my-3 mx-auto flex items-center justify-center gap-2 text-[#D4AF37]/70">
            <div className="h-px w-10 sm:w-14 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-xs">❖</span>
            <div className="h-px w-10 sm:w-14 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          {/* Family Name */}
          <h2 className="font-heading font-serif text-lg sm:text-xl font-bold tracking-[0.25em] text-[#E5C158] uppercase">
            VAVILAPALLI FAMILY
          </h2>
          <p className="font-heading italic text-xs sm:text-sm text-[#F3E5AB]/90 mt-0.5">
            A Royal Wedding Invitation
          </p>

          {/* Telugu Kalyana Mahotsavam Title */}
          <p className="mt-2 font-telugu text-sm sm:text-base font-bold text-white tracking-wide">
            వావిలపల్లి వారి కళ్యాణ మహోత్సవం
          </p>

          {/* Couple Names */}
          <div className="mt-2 space-y-0.5">
            <p className="font-heading font-serif text-lg sm:text-xl font-bold text-[#FFF5E1] tracking-wide">
              {wedding.groom.name}
            </p>
            <p className="font-heading italic text-xs sm:text-sm font-medium text-[#E5C158]">
              weds
            </p>
            <p className="font-heading font-serif text-lg sm:text-xl font-bold text-[#FFF5E1] tracking-wide">
              {wedding.bride.name}
            </p>
          </div>

          {/* Date & Muhurtham Details */}
          <p className="mt-3 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#F3E5AB]/80">
            {wedding.dateLong}
          </p>
          <p className="text-[0.65rem] sm:text-[0.75rem] font-bold tracking-widest text-[#E5C158] mt-0.5">
            MUHURTHAM: {wedding.muhurtham} IST • KOMIRI
          </p>

          {/* ================= OPEN INVITATION BUTTON ================= */}
          <div className="mt-6 flex flex-col items-center">
            <button
              type="button"
              onClick={handleOpenInvitation}
              className="group relative inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#FFE082] bg-gradient-to-r from-[#B18A45] via-[#E5C158] to-[#B18A45] px-8 sm:px-10 py-3.5 sm:py-4 text-[#260803] font-bold shadow-[0_0_30px_rgba(229,193,88,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(229,193,88,0.85)] active:scale-95 cursor-pointer animate-pulse"
              aria-label="Open Wedding Invitation with Music"
            >
              <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-110">
                🪔
              </span>
              <span className="font-heading text-base sm:text-lg font-extrabold tracking-widest uppercase text-[#240803]">
                OPEN INVITATION
              </span>
              <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-110">
                🪔
              </span>
            </button>

            <p className="mt-3 font-telugu text-[0.75rem] sm:text-xs text-[#E5C158] font-medium tracking-wide">
              ఆహ్వాన పత్రికను తెరవండి • Tap to Enter with Music 🎵
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
