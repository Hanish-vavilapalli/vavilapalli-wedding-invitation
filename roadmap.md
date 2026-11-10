# Gireesh ❤️ Varsha Wedding Invitation — Roadmap

Visual source of truth: 8 uploaded reference screenshots (WhatsApp images).
Content source of truth: MASTER_PROMPT (Gireesh/Varsha details, NOT the names in the screenshots).

## Tasks
1. [x] Study all 8 reference images
2. [x] Generate individual transparent assets — 29 images in src/assets/wedding/ (leaves, garlands, mango bunches, buds, foliage, kalash, temples, characters, 7 ceremony illustrations, petals), trimmed + converted to WebP (~4MB total)
3. [x] Design system in src/styles.css (cream paper bg + grain, oklch wedding palette, Cormorant Garamond + Noto Serif Telugu, sway/swing/drift/petal keyframes, reduced-motion guards)
4. [x] Animated frame: WeddingFrame (fixed), 9 independent garlands, 6+6 banana leaves, mango bunches, side foliage/buds, kalash + bottom florals, 6 petals — every element its own img with unique id + timing
5. [x] 8 sections + src/routes/index.tsx (Welcome, Couple, Save the Date with live IST countdown, Ceremonies ×7, Venue with Get Directions, Lunch, Family, Blessings)
6. [x] Features: ShareInvitation (WhatsApp/Web Share/copy with fallbacks), MusicPlayer (hidden until a licensed audio URL is set in config), Reveal scroll animations
7. [x] Responsive pass: 360/375/390/412/430px + desktop, zero horizontal overflow, no page errors
8. [x] Tests: src/test/wedding-audit.test.tsx — 7 tests (asset existence + alpha channel, per-element unique timing, plant independence, exact wedding facts)
9. [x] Playwright visual verification at all widths + movement diff check (45% leaf pixel change between frames)

## Open
- Background music: needs a licensed track URL in `wedding.audioUrl` (config.ts) — control appears automatically once set.
