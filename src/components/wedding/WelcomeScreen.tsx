import { useEffect, useState } from "react";

import templeElephantLeft from "@/assets/wedding/temple_elephant_left.webp";
import templeElephantRight from "@/assets/wedding/temple_elephant_right.webp";
import tirunamamKalyanam from "@/assets/wedding/tirunamam_kalyanam.webp";
import { assets, wedding } from "./config";
import { TempleMandala } from "./TempleMandala";
import { TempleToranam } from "./TempleToranam";

/** Traditional Brass Diya SVG with warm glowing golden flame */
function DiyaLamp({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer Flame Glow */}
      <path
        d="M12 1.5C12 1.5 15 5.5 15 8C15 9.7 13.7 11 12 11C10.3 11 9 9.7 9 8C9 5.5 12 1.5 12 1.5Z"
        fill="#FFD54F"
      />
      {/* Inner Flame Core */}
      <path
        d="M12 4C12 4 13.5 6.2 13.5 7.8C13.5 8.7 12.8 9.5 12 9.5C11.2 9.5 10.5 8.7 10.5 7.8C10.5 6.2 12 4 12 4Z"
        fill="#E65100"
      />
      {/* Brass Oil Lamp Bowl */}
      <path
        d="M4 12C4 12 4.2 16.5 12 16.5C19.8 16.5 20 12 20 12C18.2 15.5 15.2 15.8 12 15.8C8.8 15.8 5.8 15.5 4 12Z"
        fill="#D4AF37"
      />
      {/* Diya Base Stand */}
      <path d="M10 16.5H14L15.2 19.5H8.8L10 16.5Z" fill="#C59B27" />
      <path d="M7.5 19.5H16.5V21H7.5V19.5Z" fill="#B3861B" />
    </svg>
  );
}

/**
 * Traditional South Indian Hindu Wedding Welcome Screen.
 * Handcrafted in Tirumala temple aesthetic: Deep Temple Maroon (#4A0010) & Antique Gold (#C49A45).
 *
 * Developed purely from separate vector and high-resolution transparent assets:
 * - Handcrafted vector Temple Toranam Lace Arch at top
 * - Handcrafted vector 16-Petal Royal Lotus Mandala
 * - High-resolution Tirunamam with Lord Srinivasa & Goddess Padmavathi Kanyadaanam
 * - Sacred Telugu typography & Invocations
 * - Royal Antique Gold "OPEN INVITATION" button with brass diya lamps
 * - Beautiful newly generated high-resolution decorated temple elephants at bottom
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
        <div className="absolute inset-0 z-40 pointer-events-none overflow-hidden">
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

      {/* ================= EXACT PROPORTIONAL 494:1024 STAGE CANVAS =================
          Maintains absolute geometric balance across all Android, iPhone & Desktop screens.
          Uses absolute percentages so no element can ever push another element off-screen.
      ============================================================================= */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: "494 / 1024",
          width: "min(100vw, calc(100dvh * 494 / 1024))",
          height: "min(100dvh, calc(100vw * 1024 / 494))",
        }}
      >
        {/* 1. HANDCRAFTED VECTOR TOP TEMPLE TORANAM ARCH (0% - 11.5%) */}
        <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none" style={{ height: "11.5%" }}>
          <TempleToranam className="w-full h-full" />
        </div>

        {/* 2. CENTRAL HANDCRAFTED MANDALA & HIGH-RES TIRUNAMAM SHIELD (12% - 37%) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10"
          style={{ top: "12%", height: "25%", width: "70%" }}
        >
          {/* Handcrafted Vector 16-Petal Royal Lotus Mandala */}
          <TempleMandala className="absolute h-[140%] w-auto aspect-square pointer-events-none animate-[spin_60s_linear_infinite]" />

          {/* High-Resolution Sacred Tirunamam Shield */}
          <img
            src={tirunamamKalyanam}
            alt="Lord Srinivasa and Goddess Padmavathi Kalyanotsavam"
            className="relative z-10 h-full w-auto object-contain drop-shadow-[0_8px_25px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:scale-105"
            draggable={false}
          />
        </div>

        {/* 3. TELUGU TYPOGRAPHY, INVOCATIONS & COUPLE NAMES (38% - 59%) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 text-center w-[90%] z-10 flex flex-col items-center justify-center"
          style={{ top: "38%", height: "21%" }}
        >
          {/* Sacred Blessings */}
          <p className="font-telugu text-[0.68rem] sm:text-[0.8rem] font-semibold tracking-wider text-[#E5C158] leading-tight">
            ॥ {wedding.greetingTelugu} ॥
          </p>
          <p className="font-telugu text-[0.62rem] sm:text-[0.72rem] font-medium tracking-widest text-[#F3E5AB] leading-tight mt-0.5">
            ❖ {wedding.blessingsTelugu} ❖
          </p>

          {/* Family Kalyana Mahotsavam Title */}
          <p className="font-telugu text-[0.8rem] sm:text-[0.95rem] font-semibold tracking-wide text-[#E5C158] opacity-95 mt-1.5 leading-tight">
            వావిలపల్లి వారి
          </p>
          <h1 className="font-telugu text-[1.25rem] sm:text-[1.55rem] font-black text-[#FFF5E5] tracking-wider drop-shadow-md leading-tight mt-0.5">
            కళ్యాణ మహోత్సవం
          </h1>

          {/* Ornamental Divider */}
          <div className="my-1 flex items-center justify-center gap-2 text-[#D6B36A]/80">
            <div className="h-px w-10 sm:w-14 bg-gradient-to-r from-transparent via-[#D6B36A] to-transparent" />
            <span className="text-[0.6rem]">❖</span>
            <div className="h-px w-10 sm:w-14 bg-gradient-to-l from-transparent via-[#D6B36A] to-transparent" />
          </div>

          {/* Couple Names */}
          <p className="font-heading font-serif text-[0.84rem] sm:text-[1.02rem] font-bold text-[#FFF5E5] tracking-wide leading-tight whitespace-nowrap">
            {wedding.groom.name}{" "}
            <span className="font-serif italic text-[0.7rem] sm:text-[0.84rem] font-normal text-[#D6B36A]">weds</span>{" "}
            {wedding.bride.name}
          </p>
        </div>

        {/* 4. ROYAL ANTIQUE GOLD "OPEN INVITATION" BUTTON (60.5% - 76.5%) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center w-[88%] max-w-[290px] z-20 pointer-events-auto"
          style={{ top: "60.5%", height: "16%" }}
        >
          <button
            type="button"
            onClick={handleOpenInvitation}
            className="anim-gold-breathe group relative flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#FFF5E5]/90 bg-gradient-to-r from-[#C49A45] via-[#F3CE72] to-[#C49A45] px-3.5 py-2.5 sm:py-3 shadow-[0_0_22px_rgba(243,206,114,0.5),inset_0_1px_2px_rgba(255,255,255,0.7)] ring-1 ring-[#9E7828] ring-offset-2 ring-offset-[#4A0010] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            aria-label="Open Wedding Invitation with Music"
          >
            <DiyaLamp className="size-4 sm:size-5 transition-transform duration-300 group-hover:scale-110 shrink-0" />
            <span className="font-heading font-serif text-[0.76rem] sm:text-sm font-black tracking-[0.16em] uppercase text-[#3A050B] whitespace-nowrap">
              OPEN INVITATION
            </span>
            <DiyaLamp className="size-4 sm:size-5 transition-transform duration-300 group-hover:scale-110 shrink-0" />
          </button>

          {/* Traditional Telugu Invitation subtext */}
          <p className="mt-1.5 font-telugu text-[0.7rem] sm:text-[0.78rem] font-bold text-[#F3CE72] tracking-wide text-center drop-shadow-sm select-none">
            ఆహ్వాన పత్రికను తెరవండి
          </p>

          {/* Subtext instruction */}
          <p className="mt-0.5 text-[0.55rem] sm:text-[0.62rem] uppercase font-bold text-[#FFF5E5]/90 tracking-[0.25em] text-center select-none">
            Tap to Enter
          </p>
        </div>

        {/* 5. ROYAL TEMPLE ELEPHANTS IN CORNERS & MUHURTHAM DATE (77.5% - 100%) */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
          style={{ height: "22.5%" }}
        >
          {/* Left Temple Elephant (Anchored in bottom left corner with front half & salute) */}
          <img
            src={templeElephantLeft}
            alt="Temple Elephant"
            className="absolute bottom-0 h-full w-auto object-contain object-bottom drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
            style={{ left: "-23.5%" }}
            draggable={false}
          />

          {/* Center Auspicious Muhurtham Date (Anchored in wide open space between elephants) */}
          <div className="absolute bottom-2.5 sm:bottom-3 left-1/2 -translate-x-1/2 text-center whitespace-nowrap z-10 px-1">
            <p className="text-[0.62rem] sm:text-[0.72rem] uppercase font-bold text-[#D6B36A] tracking-[0.2em]">
              {wedding.dateLong}
            </p>
            <p className="text-[0.56rem] sm:text-[0.64rem] font-semibold text-[#FFF5E5]/90 tracking-widest mt-0.5">
              MUHURTHAM: {wedding.muhurtham} IST
            </p>
          </div>

          {/* Right Temple Elephant (Anchored in bottom right corner with front half & salute) */}
          <img
            src={templeElephantRight}
            alt="Temple Elephant"
            className="absolute bottom-0 h-full w-auto object-contain object-bottom drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
            style={{ right: "-23.5%" }}
            draggable={false}
          />
        </div>
      </div>
    </aside>
  );
}
