import { useEffect } from "react";

import { wedding } from "./config";

/**
 * Invisible, continuous background wedding music player.
 * - Coordinates with #wedding-audio rendered in RootShell.
 * - Triggered when guest taps "OPEN INVITATION" on the WelcomeScreen.
 * - Loops infinitely for as long as the website is open.
 * - Zero on/off buttons rendered on the main invitation so music never stops accidentally.
 */
export function MusicPlayer() {
  useEffect(() => {
    if (!wedding.audioUrl) return;

    const audio = document.getElementById("wedding-audio") as HTMLAudioElement | null;
    if (!audio) return;

    const keepPlaying = () => {
      const isActive =
        typeof window !== "undefined" &&
        Boolean((window as unknown as { __weddingAudioActive?: boolean }).__weddingAudioActive);
      if (isActive && audio.paused) {
        audio.play().catch(() => {});
      }
    };

    // Keep playing seamlessly if user switches tabs and returns
    const handleVisibility = () => {
      if (!document.hidden) {
        keepPlaying();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("pageshow", keepPlaying);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("pageshow", keepPlaying);
    };
  }, []);

  // Zero buttons rendered — clean and undisturbed invitation
  return null;
}
