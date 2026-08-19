# Kiwi 8-Bit Chunky Chibi Brand & Mascot Assets 🥝🎮

Official brand mark, SVG icons, favicons, and 8-bit mascot poses for **Kiwi** (RunKiwi).

---

## 🎨 Color Palette & Specs

| Token | Hex | Usage |
| :--- | :--- | :--- |
| **Primary Kiwi Green** | `#93C645` | Main body highlight & brand accent |
| **Leaf Kiwi Green** | `#88BC38` | Upper body & wing contour |
| **Forest Shadow** | `#6A962A` | Lower body depth & shading |
| **Deep Moss** | `#5A8222` | Undercarriage grounding shadow |
| **Chunky Amber** | `#FFAA28` | Beak & feet primary |
| **Deep Amber** | `#E89115` | Beak tip & depth highlight |
| **Charcoal Eye** | `#111816` | Eye pupil |
| **Catchlight** | `#FFFFFF` | 1px eye sparkle shine |

---

## 📁 Repository Structure

```
runkiwi-assets/
├── index.html                   # Interactive visual browser & asset catalog
├── package.json                 # @runkiwi/assets npm package definition
├── svg/
│   ├── logos/
│   │   ├── kiwi-logo.svg                # Full-color 16x16 Chunky Chibi brand mark
│   │   ├── kiwi-logo-monochrome.svg     # Adaptive single-color vector (currentColor)
│   │   └── kiwi-logo-with-wordmark.svg  # Logo + "kiwi" monospace wordmark
│   ├── favicons/
│   │   ├── favicon-16x16.svg            # Micro 16x16 tab icon
│   │   ├── favicon-32x32.svg            # Squircle framed app tile
│   │   └── apple-touch-icon.svg         # 180x180 iOS touch icon
│   └── mascots/
│       ├── kiwi-chibi-idle.svg          # Classic standing pose
│       ├── kiwi-chibi-vibing.svg        # Headphones & cyber shades
│       ├── kiwi-chibi-dancing.svg       # Green-check PR celebration dance
│       ├── kiwi-chibi-flying.svg        # Dual rocket jetpack booster
│       ├── kiwi-chibi-hacking.svg       # Architect golden monocle
│       ├── kiwi-chibi-guarding.svg      # Emerald sentinel shield (24h telemetry)
│       └── kiwi-chibi-sleeping.svg      # Standby dormant mode
└── react/
    ├── index.ts                         # React component exports
    ├── KiwiLogo.tsx                     # <KiwiLogo size={32} />
    └── KiwiMascot.tsx                  # <KiwiMascot pose="vibing" size={32} />
```

---

## ⚡ React Usage

```tsx
import { KiwiLogo, KiwiMascot } from '@runkiwi/assets/react';

// Brand Logo
<KiwiLogo size={28} />

// Adaptive Monochrome Logo (inherits CSS color)
<KiwiLogo size={24} monochrome />

// Mascot Poses
<KiwiMascot pose="vibing" size={32} />
<KiwiMascot pose="dancing" size={32} />
<KiwiMascot pose="flying" size={32} />
<KiwiMascot pose="hacking" size={32} />
<KiwiMascot pose="guarding" size={32} />
<KiwiMascot pose="sleeping" size={32} />
```

---

## 🖥️ Standalone Visual Catalog

Double-click `index.html` or run a local server to view the interactive gallery with direct one-click downloads and SVG code copying.
