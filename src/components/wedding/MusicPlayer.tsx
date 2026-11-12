import { useEffect, useRef } from "react";

import { wedding } from "./config";

/**
 * Invisible, non-stop background wedding music.
 * - Plays immediately upon website load.
 * - If browser autoplay policy requires a user gesture, the very first touch/scroll anywhere triggers it.
 * - Loops continuously non-stop for as long as the website is open.
 * - Zero on/off buttons rendered; cannot be turned off by tapping anything.
 */
export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!wedding.audioUrl) return;

    const audio = new Audio(wedding.audioUrl);
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    const playAudio = () => {
      audio.play().catch(() => {
        // Will trigger on the very first micro-gesture
      });
    };

    // 1. Instantaneous playback attempt immediately on load
    playAudio();

    // 2. Gesture listeners for mobile browsers that require user gesture
    const handleGesture = () => {
      playAudio();
    };

    window.addEventListener("touchstart", handleGesture, { passive: true });
    window.addEventListener("touchend", handleGesture, { passive: true });
    window.addEventListener("pointerdown", handleGesture, { passive: true });
    window.addEventListener("click", handleGesture, { passive: true });
    window.addEventListener("scroll", handleGesture, { passive: true });
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        playAudio();
      }
    });

    // 3. Guarantee seamless infinite looping
    audio.addEventListener("ended", () => {
      audio.currentTime = 0;
      playAudio();
    });

    return () => {
      window.removeEventListener("touchstart", handleGesture);
      window.removeEventListener("touchend", handleGesture);
      window.removeEventListener("pointerdown", handleGesture);
      window.removeEventListener("click", handleGesture);
      window.removeEventListener("scroll", handleGesture);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Zero buttons rendered — non-stop invisible audio
  return null;
}
