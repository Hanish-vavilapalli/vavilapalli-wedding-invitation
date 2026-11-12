import { useEffect, useState } from "react";
import { Check, Copy, MessageCircle, Share2 } from "lucide-react";

import { wedding } from "./config";

function shareMessage(url: string) {
  return `${wedding.groom.name} & ${wedding.bride.name} — ${wedding.dateLong}, Auspicious Muhurtham: ${wedding.muhurtham}. You are warmly invited! ${url}`;
}

const btn =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-gold/60 px-7 py-3 text-lg font-black text-primary transition-all hover:bg-accent hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-ring shadow-sm";

/** WhatsApp share, native Web Share API and copy-link with fallbacks. */
export function ShareInvitation() {
  const [copied, setCopied] = useState(false);
  // Set after mount: window.location differs between server and client render.
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  async function copyLink() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const ta = document.createElement("textarea");
        ta.value = url;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard unavailable — the URL remains visible on screen to copy.
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <a
        className={btn}
        href={`https://wa.me/?text=${encodeURIComponent(shareMessage(url))}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
      >
        <MessageCircle className="size-4" />
        WhatsApp
      </a>
      <div className="inline-flex items-center gap-2">
        <button
          type="button"
          className={btn}
          aria-label="Share Invitation"
          onClick={() => {
            if (navigator.share) {
              navigator
                .share({ title: "Wedding Invitation", text: shareMessage(""), url })
                .catch(() => {});
            } else {
              copyLink();
            }
          }}
        >
          <Share2 className="size-4" />
          Share
        </button>
        <span className="text-gold/60 font-bold select-none text-xl px-1" aria-hidden="true">
          |
        </span>
        <button type="button" className={btn} onClick={copyLink} aria-label="Copy Invitation Link">
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  );
}
