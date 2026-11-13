import { useEffect, useState } from "react";

import templeTopLace from "@/assets/wedding/temple_top_lace.webp";
import templeMandala from "@/assets/wedding/temple_mandala.webp";
import tirunamamKalyanam from "@/assets/wedding/tirunamam_kalyanam.webp";
import templeElephantLeft from "@/assets/wedding/temple_elephant_left.webp";
import templeElephantRight from "@/assets/wedding/temple_elephant_right.webp";
import { assets, wedding } from "./config";

/**
 * Traditional South Indian Hindu Wedding Welcome Screen.
 * Handcrafted in Tirumala temple aesthetic: Deep Temple Maroon (#4A0010) & Antique Gold (#C49A45).
 *
 * Designed with individual modular transparent elements (no flattened composite background):
 * - Traditional toranam lace arch at the top
 * - Sacred antique-gold mandala
 * - High-resolution Tirunamam with Lord Srinivasa & Goddess Padmavathi holding hands
 * - Telugu Kalyana Mahotsavam typography & invocations
 * - Antique gold "🪔 OPEN INVITATION 🪔" button
 * - Two decorated royal temple elephants facing each other at the bottom
 *
 * On tap:
 * 1. Plays background wedding music via direct user gesture (100% unmuted on Android & iOS).
 * 2. Triggers golden celebratory petal shower.
 * 3. Smooth cinematic fade transition reveals the full existing wedding invitation intact.
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
    // 1. Mark audio as active for continuous background playback
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
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#4A0010] via-[#350008] to-[#250005] overflow-hidden select-none transition-all duration-700 ease-out ${
        isOpening ? "opacity-0 scale-[1.02] pointer-events-none" : "opacity-100 scale-100 pointer-events-auto"
      }`}
      aria-label="Welcome Invitation Screen"
      tabIndex={-1}
    >
      {/* ================= CELEBRATORY GOLDEN FLOWER PETALS (Active on tap) ================= */}
      {isOpening && (
        <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
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

      {/* ================= RESPONSIVE TRADITIONAL STAGE CONTAINER =================
          Preserves exact vertical balance across mobile and desktop devices.
      ============================================================================= */}
      <div
        className="relative flex flex-col items-center justify-between h-full max-h-[100dvh] w-full max-w-[500px] overflow-hidden px-4 py-2 sm:py-4"
        style={{
          aspectRatio: "494 / 1024",
          width: "min(100vw, calc(100dvh * 494 / 1024))",
          height: "min(100dvh, calc(100vw * 1024 / 494))",
        }}
      >
        {/* 1. TOP TRADITIONAL LACE TORANAM ARCH */}
        <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
          <img
            src={templeTopLace}
            alt="Traditional Toranam Lace"
            className="w-full object-contain opacity-95 select-none"
            draggable={false}
          />
        </div>

        {/* 2. CENTER ARTWORK & SACRED INVOCATIONS */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center mt-12 sm:mt-16 w-full">
          {/* Sacred Mandala with Tirunamam in center */}
          <div className="relative flex items-center justify-center">
            {/* Rotating / glowing subtle antique gold mandala */}
            <img
              src={templeMandala}
              alt=""
              className="absolute size-56 sm:size-72 object-contain opacity-35 pointer-events-none animate-[spin_60s_linear_infinite]"
              draggable={false}
            />

            {/* Sacred Tirunamam with Lord Srinivasa & Goddess Padmavathi */}
            <img
              src={tirunamamKalyanam}
              alt="Lord Srinivasa and Goddess Padmavathi Kalyanotsavam"
              className="relative z-10 w-44 sm:w-52 max-h-[210px] sm:max-h-[250px] object-contain drop-shadow-[0_8px_25px_rgba(0,0,0,0.65)] transition-transform duration-500 hover:scale-105"
              draggable={false}
            />
          </div>

          {/* Sacred Blessings & Family Wedding Title */}
          <div className="mt-2 text-center w-full px-2">
            <p className="font-telugu text-[0.7rem] sm:text-xs font-semibold tracking-wider text-[#E5C158]">
              ॥ {wedding.greetingTelugu} ॥
            </p>
            <p className="mt-0.5 font-telugu text-[0.62rem] sm:text-[0.72rem] font-medium tracking-widest text-[#F3E5AB]">
              ❖ {wedding.blessingsTelugu} ❖
            </p>

            {/* Vavilapalli Vari Kalyana Mahotsavam */}
            <p className="mt-2 font-telugu text-xs sm:text-sm font-semibold tracking-wide text-[#E5C158] opacity-95">
              వావిలపల్లి వారి
            </p>
            <h1 className="font-telugu text-lg sm:text-2xl font-extrabold text-[#FFF5E5] tracking-wider drop-shadow-md">
              కళ్యాణ మహోత్సవం
            </h1>

            {/* Ornamental Divider Line */}
            <div className="my-1.5 mx-auto flex items-center justify-center gap-2 text-[#D6B36A]/70">
              <div className="h-px w-10 sm:w-14 bg-gradient-to-r from-transparent to-[#D6B36A]" />
              <span className="text-xs">❖</span>
              <div className="h-px w-10 sm:w-14 bg-gradient-to-l from-transparent to-[#D6B36A]" />
            </div>

            {/* Groom & Bride Names */}
            <p className="font-heading font-serif text-sm sm:text-base font-bold text-[#FFF5E5] tracking-wide">
              {wedding.groom.name}{" "}
              <span className="font-serif italic text-xs sm:text-sm font-normal text-[#D6B36A]">weds</span>{" "}
              {wedding.bride.name}
            </p>
          </div>
        </div>

        {/* 3. OPEN INVITATION BUTTON (Placed in the clear maroon space) */}
        <div className="relative z-20 flex flex-col items-center w-[84%] max-w-[270px] my-auto">
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
          <p className="mt-1.5 font-telugu text-[0.7rem] sm:text-xs font-semibold text-[#D6B36A] tracking-wide text-center drop-shadow-sm select-none">
            ఆహ్వాన పత్రికను తెరవండి
          </p>

          {/* Subtext instruction */}
          <p className="mt-0.5 text-[0.58rem] sm:text-[0.62rem] uppercase font-semibold text-[#FFF5E5]/80 tracking-[0.2em] text-center select-none">
            Tap to Enter
          </p>
        </div>

        {/* 4. BOTTOM ELEPHANTS (Left & Right facing each other with Date in Center) */}
        <div className="relative z-10 w-full flex items-end justify-between pointer-events-none pb-1">
          {/* Left Temple Elephant */}
          <img
            src={templeElephantLeft}
            alt="Temple Elephant"
            className="w-20 sm:w-28 object-contain drop-shadow-md select-none"
            draggable={false}
          />

          {/* Date & Muhurtham in between elephants */}
          <div className="text-center pb-2 px-1 select-none">
            <p className="text-[0.62rem] sm:text-[0.7rem] uppercase font-bold text-[#D6B36A] tracking-[0.2em]">
              {wedding.dateLong}
            </p>
            <p className="text-[0.58rem] sm:text-[0.65rem] font-semibold text-[#FFF5E5]/80 tracking-widest mt-0.5">
              MUHURTHAM: {wedding.muhurtham} IST
            </p>
          </div>

          {/* Right Temple Elephant */}
          <img
            src={templeElephantRight}
            alt="Temple Elephant"
            className="w-20 sm:w-28 object-contain drop-shadow-md select-none"
            draggable={false}
          />
        </div>
      </div>
    </aside>
  );
}
