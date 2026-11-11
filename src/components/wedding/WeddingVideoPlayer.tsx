import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function WeddingVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  function toggleMute() {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  }

  return (
    <div className="relative mx-auto mt-4 w-full max-w-xl sm:max-w-2xl px-2 sm:px-0">
      {/* Divine golden aura glow behind the video card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-r from-gold/30 via-vermilion/20 to-gold/30 opacity-70 blur-xl"
      />

      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-gold/70 bg-black shadow-2xl ring-1 ring-gold/40">
        <video
          ref={videoRef}
          src="/wedding_invitation_video.mp4"
          controls
          playsInline
          autoPlay
          muted
          loop
          preload="metadata"
          className="w-full aspect-video object-cover bg-black"
        >
          Your browser does not support the video tag.
        </video>

        {/* Quick Sound Toggle Floating Pill Button */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
          className="absolute top-3 right-3 z-20 flex items-center gap-1.5 rounded-full border border-gold/60 bg-black/60 px-3 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:bg-black/80 hover:scale-105 active:scale-95"
        >
          {isMuted ? (
            <>
              <VolumeX className="size-4 text-gold" />
              <span>Tap for Sound</span>
            </>
          ) : (
            <>
              <Volume2 className="size-4 text-green-400" />
              <span>Sound ON</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

