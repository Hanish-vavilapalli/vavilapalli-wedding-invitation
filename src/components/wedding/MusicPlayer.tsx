import { useEffect, useRef, useState } from "react";
import { Music, Pause } from "lucide-react";

import { wedding } from "./config";

/**
 * Optional background music. Never autoplays: the audio starts only after
 * the visitor taps play. Hidden entirely until a licensed track URL is set
 * in the wedding configuration.
 */
export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!wedding.audioUrl) return;
    const audio = new Audio(wedding.audioUrl);
    audio.loop = true;
    audio.preload = "none";
    audioRef.current = audio;
    return () => {
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
      audio.play().catch(() => setPlaying(false));
      setPlaying(true);
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      className="fixed right-3 bottom-3 z-30 flex size-10 items-center justify-center rounded-full border border-gold/50 bg-card/90 text-primary shadow-md backdrop-blur-sm transition-colors hover:bg-accent"
    >
      {playing ? <Pause className="size-4" /> : <Music className="size-4" />}
    </button>
  );
}
