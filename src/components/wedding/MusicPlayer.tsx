import { useEffect } from "react";

import { wedding } from "./config";

/**
 * Invisible, non-stop background wedding music.
 * Coordinates with #wedding-audio rendered in RootShell.
 * - Starts playing immediately upon website load.
 * - If browser autoplay policy requires user interaction, the very first touch/scroll anywhere triggers it.
 * - Loops continuously non-stop for as long as the website is open.
 * - Zero on/off buttons rendered; cannot be turned off by tapping anything.
 */
export function MusicPlayer() {
  useEffect(() => {
    if (!wedding.audioUrl) return;

    const audio = document.getElementById("wedding-audio") as HTMLAudioElement | null;
    if (!audio) return;

    const playAudio = () => {
      if (audio.paused) {
        audio.play().catch(() => {
          // Handled on first micro-interaction if blocked by standalone mobile browser
        });
      }
    };

    // Ensure audio is playing on client mount
    playAudio();

    const handleInteraction = () => {
      playAudio();
    };

    const events = [
      "touchstart",
      "touchend",
      "touchmove",
      "pointerdown",
      "pointerup",
      "click",
      "scroll",
    ];

    events.forEach((ev) => {
      window.addEventListener(ev, handleInteraction, { capture: true, passive: true });
      document.addEventListener(ev, handleInteraction, { capture: true, passive: true });
    });

    const handleVisibility = () => {
      if (!document.hidden && audio.paused) {
        playAudio();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      events.forEach((ev) => {
        window.removeEventListener(ev, handleInteraction, true);
        document.removeEventListener(ev, handleInteraction, true);
      });
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  // Zero buttons rendered — non-stop invisible audio
  return null;
}

