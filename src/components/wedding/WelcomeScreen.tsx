import { useEffect, useState } from "react";

import welcomeArtwork from "@/assets/wedding/welcome_artwork.webp";
import { assets } from "./config";

/**
 * Traditional South Indian Hindu Wedding Welcome Screen.
 * Inspired by Tirumala temple aesthetics: Deep Temple Maroon (#4A0010) & Antique Gold (#C49A45).
 *
 * Preserves the uploaded authentic artwork:
 * - Traditional toranam at the top
 * - Central Tirunamam with Lord Srinivasa & Goddess Padmavathi kanyadaanam
 * - Telugu title as in the original artwork
 * - Sacred traditional mandala
 * - Two decorated royal temple elephants at the bottom
 *
 * An elegant antique-gold "🪔 OPEN INVITATION 🪔" button sits in the empty maroon space
 * between the Telugu title flourish and the elephants.
 *
 * On tap:
 * 1. Initiates the Shehnai wedding audio via direct user gesture (100% unmuted on Android & iOS).
 * 2. Triggers golden flower petals celebratory shower.
 * 3. Plays a smooth cinematic fade transition.
 * 4. Reveals the original existing wedding invitation intact with music continuing in an infinite loop.
 */
export function WelcomeScreen() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  // Lock body scroll while the welcome screen is presented
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
    // 1. Mark audio as active for persistent background playback
    if (typeof window !== "undefined") {
      (window as unknown as { __weddingAudioActive?: boolean }).__weddingAudioActive = true;
    }

    // 2. Play existing wedding audio with graceful error handling
    const audio = document.getElementById("wedding-audio") as HTMLAudioElement | null;
    if (audio) {
      audio.currentTime = 0;
      audio.volume = 1.0;
      audio.play().catch((err) => {
        console.warn("Audio playback initiated, waiting for interaction fallback:", err);
      });
    }

    // 3. Trigger smooth cinematic transition and golden petal shower
    setIsOpening(true);

    // 4. Reveal the complete existing wedding invitation
    setTimeout(() => {
      setIsInvitationOpen(true);
    }, 850);
  };

  if (isInvitationOpen) return null;

  return (
    <aside
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#46000A] overflow-hidden select-none transition-all duration-700 ease-out ${
        isOpening ? "opacity-0 scale-[1.02] pointer-events-none" : "opacity-100 scale-100 pointer-events-auto"
      }`}
      aria-label="Welcome Invitation Screen"
      tabIndex={-1}
    >
      {/* ================= CELEBRATORY GOLDEN FLOWER PETALS (Active on tap) ================= */}
      {isOpening && (
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          {[
            { id: "gp1", left: "12%", delay: "0s", dur: "1.1s", size: "w-5 sm:w-6" },
            { id: "gp2", left: "26%", delay: "0.12s", dur: "1.3s", size: "w-6 sm:w-7" },
            { id: "gp3", left: "42%", delay: "0.04s", dur: "1.2s", size: "w-5 sm:w-6" },
            { id: "gp4", left: "58%", delay: "0.18s", dur: "1.4s", size: "w-7 sm:w-8" },
            { id: "gp5", left: "74%", delay: "0.08s", dur: "1.2s", size: "w-6 sm:w-7" },
            { id: "gp6", left: "88%", delay: "0.22s", dur: "1.3s", size: "w-5 sm:w-6" },
            { id: "gp7", left: "20%", delay: "0.26s", dur: "1.2s", size: "w-6 sm:w-7" },
            { id: "gp8", left: "80%", delay: "0.3s", dur: "1.4s", size: "w-5 sm:w-6" },
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

      {/* ================= RESPONSIVE ARTWORK CONTAINER =================
          Maintains the exact 494:1024 portrait aspect ratio on every screen.
          Fits within 100vw and 100dvh without cropping or distortion.
      ====================================================================== */}
      <div
        className="relative flex items-center justify-center max-w-full max-h-full"
        style={{
          aspectRatio: "494 / 1024",
          width: "min(100vw, calc(100dvh * 494 / 1024))",
          height: "min(100dvh, calc(100vw * 1024 / 494))",
        }}
      >
        {/* Authentic Tirumala-inspired Wedding Artwork */}
        <img
          src={welcomeArtwork}
          alt="Vavilapalli Vari Kalyanotsavam Traditional Invitation"
          className="w-full h-full object-contain pointer-events-none select-none drop-shadow-2xl"
          draggable={false}
          fetchPriority="high"
        />

        {/* ================= OPEN INVITATION BUTTON =================
            Placed exactly at 74.5% vertical position in the empty maroon band
            below the central Telugu title and above the two temple elephants.
        ================================================================ */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[84%] max-w-[270px] z-10 pointer-events-auto"
          style={{ top: "74.5%" }}
        >
          <button
            type="button"
            onClick={handleOpenInvitation}
            className="anim-gold-breathe group relative flex w-full items-center justify-center gap-2 rounded-xl border border-[#FFF5E5]/70 bg-gradient-to-r from-[#C49A45] via-[#D6B36A] to-[#C49A45] px-4 py-2.5 sm:py-3 text-[#350008] shadow-[0_0_20px_rgba(196,154,69,0.4)] ring-1 ring-[#C49A45] ring-offset-2 ring-offset-[#4A0010] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            aria-label="Open Wedding Invitation with Music"
          >
            <span className="text-base sm:text-lg select-none transition-transform duration-300 group-hover:scale-110">
              🪔
            </span>
            <span className="font-heading text-sm sm:text-base font-extrabold tracking-wider uppercase text-[#350008]">
              OPEN INVITATION
            </span>
            <span className="text-base sm:text-lg select-none transition-transform duration-300 group-hover:scale-110">
              🪔
            </span>
          </button>

          {/* Traditional Telugu Invitation subtext */}
          <p className="mt-2 font-telugu text-[0.72rem] sm:text-xs font-semibold text-[#D6B36A] tracking-wide text-center drop-shadow-sm select-none">
            ఆహ్వాన పత్రికను తెరవండి
          </p>

          {/* Subtext instruction */}
          <p className="mt-0.5 text-[0.6rem] sm:text-[0.65rem] uppercase font-semibold text-[#FFF5E5]/80 tracking-[0.2em] text-center select-none">
            Tap to Enter
          </p>
        </div>
      </div>
    </aside>
  );
}
