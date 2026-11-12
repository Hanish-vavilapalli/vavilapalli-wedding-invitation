import { useEffect, useRef, useState } from "react";
import { Music, Pause } from "lucide-react";

import { wedding } from "./config";

/**
 * Background wedding music player.
 * Automatically loops continuously. Attempts to start on first visitor interaction,
 * and can be toggled on/off at any time via the floating control button.
 */
export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!wedding.audioUrl) return;
    const audio = new Audio(wedding.audioUrl);
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    // Start playback smoothly upon first guest tap / interaction on the invitation
    const handleFirstInteraction = () => {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          // Autoplay restricted until direct button tap
        });
      removeListeners();
    };

    const removeListeners = () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      removeListeners();
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  if (!wedding.audioUrl) return null;

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? "Pause wedding music" : "Play wedding music"}
      className={`fixed right-3 bottom-4 z-40 flex items-center gap-2 rounded-full border-2 border-gold/70 px-3.5 py-2 text-primary shadow-xl backdrop-blur-md transition-all hover:scale-105 active:scale-95 ${
        playing
          ? "bg-primary text-primary-foreground border-gold"
          : "bg-background/95 hover:bg-accent text-primary"
      }`}
    >
      {playing ? (
        <>
          <Pause className="size-4 text-gold" />
          <span className="text-xs font-bold uppercase tracking-wider text-primary-foreground">
            Pause Music
          </span>
        </>
      ) : (
        <>
          <Music className="size-4 text-gold animate-bounce" />
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Play Music
          </span>
        </>
      )}
    </button>
  );
}
