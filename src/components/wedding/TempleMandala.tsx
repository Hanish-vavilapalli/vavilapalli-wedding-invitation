/**
 * Sacred Traditional 16-Petal Royal Lotus Mandala.
 * Rendered in vector SVG with antique gold filigree and subtle divine radiance.
 */
export function TempleMandala({ className = "" }: { className?: string }) {
  const outerPetals = Array.from({ length: 16 }, (_, i) => i * (360 / 16));
  const innerPetals = Array.from({ length: 16 }, (_, i) => i * (360 / 16) + 11.25);

  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mandalaAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#C49A45" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#350008" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="goldPetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF5E5" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#B18A45" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Radiant Aura Disc */}
      <circle cx="250" cy="250" r="240" fill="url(#mandalaAura)" />

      {/* Outermost Beaded Ring */}
      <circle cx="250" cy="250" r="236" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 3" />
      <circle cx="250" cy="250" r="226" stroke="#FFF5E5" strokeWidth="1.2" strokeOpacity="0.7" />
      <circle cx="250" cy="250" r="220" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.5" />

      {/* 16 Outer Pointed Lotus Petals */}
      {outerPetals.map((angle) => (
        <g key={angle} transform={`rotate(${angle} 250 250)`}>
          <path
            d="M250 24 C230 100 215 170 250 220 C285 170 270 100 250 24 Z"
            fill="#4A0010"
            fillOpacity="0.3"
            stroke="url(#goldPetal)"
            strokeWidth="1.5"
          />
          {/* Central Petal Vein */}
          <line x1="250" y1="24" x2="250" y2="190" stroke="#FFF5E5" strokeWidth="1" strokeOpacity="0.6" />
          {/* Tip Pearl */}
          <circle cx="250" cy="20" r="2.5" fill="#FFF5E5" />
          <circle cx="250" cy="12" r="1.5" fill="#D4AF37" />
        </g>
      ))}

      {/* 16 Interlocking Rounded Petals */}
      {innerPetals.map((angle) => (
        <g key={angle} transform={`rotate(${angle} 250 250)`}>
          <path
            d="M250 65 Q235 120 250 175 Q265 120 250 65 Z"
            fill="#350008"
            fillOpacity="0.4"
            stroke="#D4AF37"
            strokeWidth="1.2"
            strokeOpacity="0.8"
          />
          <circle cx="250" cy="65" r="2" fill="#FFF5E5" />
        </g>
      ))}

      {/* Inner Concentric Rings */}
      <circle cx="250" cy="250" r="170" stroke="#FFF5E5" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="4 4" />
      <circle cx="250" cy="250" r="150" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.7" />
      <circle cx="250" cy="250" r="130" stroke="#FFF5E5" strokeWidth="1" strokeOpacity="0.4" />
      <circle cx="250" cy="250" r="110" stroke="#D4AF37" strokeWidth="1.2" strokeOpacity="0.6" strokeDasharray="2 3" />
    </svg>
  );
}

