/**
 * Authentic South Indian Temple Wedding Toranam / Lace Arch.
 * Vector SVG rendered with infinite sharpness on all mobile & Retina screens.
 * Features traditional temple festoon scallops, filigree lace, hanging pearls, and gold bells.
 */
export function TempleToranam({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMin slice"
      aria-hidden="true"
    >
      <defs>
        {/* Subtle gold gradient for lace highlights */}
        <linearGradient id="goldLace" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF5E5" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#E5C158" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FFF5E5" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="pearlShine" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E5C158" />
        </linearGradient>
        {/* Repeating scalloped festoon pattern */}
        <pattern id="gopuramBand" width="20" height="16" patternUnits="userSpaceOnUse">
          <path d="M0 16 L10 2 L20 16 Z" fill="#D4AF37" fillOpacity="0.3" stroke="#FFF5E5" strokeWidth="0.8" />
          <circle cx="10" cy="2" r="1.5" fill="#FFF5E5" />
        </pattern>
      </defs>

      {/* Top Border Frieze */}
      <rect x="0" y="0" width="1000" height="16" fill="url(#gopuramBand)" />
      <line x1="0" y1="16" x2="1000" y2="16" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.8" />
      <line x1="0" y1="20" x2="1000" y2="20" stroke="#FFF5E5" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.9" />

      {/* 5 Main Scalloped Arches across 1000px width (each spans 200px) */}
      {[0, 200, 400, 600, 800].map((x, i) => (
        <g key={i} transform={`translate(${x}, 20)`}>
          {/* Outer Scallop Arch */}
          <path
            d="M0 0 Q100 130 200 0"
            fill="none"
            stroke="url(#goldLace)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Middle Scallop Arch */}
          <path
            d="M10 0 Q100 110 190 0"
            fill="none"
            stroke="#FFF5E5"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            strokeOpacity="0.85"
          />
          {/* Inner Scallop Arch */}
          <path
            d="M20 0 Q100 90 180 0"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1.2"
            strokeOpacity="0.6"
          />

          {/* Central Floral Paisley in each Scallop */}
          <g transform="translate(100, 48)">
            <circle cx="0" cy="0" r="14" fill="#3D0C11" stroke="#D4AF37" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="9" fill="none" stroke="#FFF5E5" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="0" cy="0" r="4" fill="#E5C158" />
            {/* 8 mini petal dots around circle */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, k) => {
              const rad = (angle * Math.PI) / 180;
              const px = Math.cos(rad) * 18;
              const py = Math.sin(rad) * 18;
              return <circle key={k} cx={px} cy={py} r="1.5" fill="#FFF5E5" />;
            })}
          </g>

          {/* Hanging Pearl Drops along the arch bottom */}
          {[0.2, 0.35, 0.5, 0.65, 0.8].map((t, idx) => {
            // Quadratic bezier point: B(t) = (1-t)^2 P0 + 2(1-t)t P1 + t^2 P2
            const px = 2 * (1 - t) * t * 100 + t * t * 200;
            const py = 2 * (1 - t) * t * 130;
            const dropLen = idx === 2 ? 32 : idx === 1 || idx === 3 ? 24 : 16;
            return (
              <g key={idx} transform={`translate(${px}, ${py})`}>
                <line x1="0" y1="0" x2="0" y2={dropLen} stroke="#FFF5E5" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="0" cy={dropLen} r="3" fill="url(#pearlShine)" stroke="#D4AF37" strokeWidth="0.8" />
              </g>
            );
          })}

          {/* Joint Bell / Medallion at Arch Intersection */}
          <g transform="translate(200, 0)">
            <circle cx="0" cy="4" r="5" fill="#D4AF37" stroke="#FFF5E5" strokeWidth="1" />
            {/* Hanging Joint Pearl */}
            <line x1="0" y1="9" x2="0" y2="40" stroke="#FFF5E5" strokeWidth="1.2" strokeDasharray="2 2" />
            <circle cx="0" cy="20" r="2" fill="#FFF5E5" />
            <circle cx="0" cy="30" r="2.5" fill="#FFF5E5" />
            <path d="M-4 40 L4 40 L0 48 Z" fill="#E5C158" stroke="#FFF5E5" strokeWidth="0.8" />
          </g>
        </g>
      ))}
    </svg>
  );
}
