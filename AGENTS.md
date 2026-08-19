# AGENTS.md — Kiwi 8-Bit Brand & Mascot Assets Guide

This repository (`kiwi-brand`) is the official source of truth for **Kiwi's 8-bit Chunky Chibi brand identity, vector assets, favicons, and mascots**.

When building or updating any user-facing surfaces across Kiwi repositories (such as `runkiwi-website`, `kiwi` core daemon/dashboard, `kiwi-docs`, CLI terminal outputs, or marketing materials), **always follow the instructions and specifications in this document**.

---

## 🥝 1. Core Brand Mark: The 8-Bit Chunky Chibi

The Kiwi logo mark is an authentic **16×16 retro 8-bit Chunky Chibi Kiwi bird sprite**:
- **Proportions:** Extra rounded 14×14 body with a compact 2-tier amber beak and a 2×2 high-contrast expressive eye.
- **Rendering Directives (MANDATORY):**
  - **SVG Vectors:** ALWAYS include `shape-rendering="crispEdges"` (or in React `shapeRendering="crispEdges"`).
  - **CSS Styling:** ALWAYS include `image-rendering: pixelated;` and `image-rendering: crisp-edges;` to prevent anti-aliasing blur.

---

## 🎨 2. Official Color Palette & Hex Tokens

| Token Name | Hex Code | Role / Anatomy |
| :--- | :--- | :--- |
| `--kiwi-primary` | `#93C645` | Main body vibrant green & primary brand accent |
| `--kiwi-leaf` | `#88BC38` | Upper body & crown highlights |
| `--kiwi-moss` | `#78A832` | Mid-body contour |
| `--kiwi-forest` | `#6A962A` | Lower body depth & shading |
| `--kiwi-deep-shadow`| `#5A8222` | Undercarriage grounding shadow |
| `--kiwi-amber` | `#FFAA28` | Beak & feet primary |
| `--kiwi-amber-dark` | `#E89115` | Beak depth highlight & tip |
| `--kiwi-eye` | `#111816` | Eye pupil (dark obsidian) |
| `--kiwi-catchlight` | `#FFFFFF` | 1px eye sparkle catchlight |
| `--kiwi-shield` | `#4FB477` | Sentinel guard shield |
| `--kiwi-headphones` | `#FF4D6D` | Vibing headphone band |
| `--kiwi-shades` | `#00E5FF` | Cyberpunk sunglasses lens glow |

---

## 🎭 3. Mascot Poses & Contextual States

| Pose ID | Asset File | Appropriate Context / Trigger |
| :--- | :--- | :--- |
| `idle` | `svg/mascots/kiwi-chibi-idle.svg` | Default brand mark, docs, empty states, profile headers |
| `vibing` | `svg/mascots/kiwi-chibi-vibing.svg` | Active agent loop execution, live PR generation, terminal runs |
| `dancing` | `svg/mascots/kiwi-chibi-dancing.svg` | Green check suite pass, merged PR celebrations, success modals |
| `flying` | `svg/mascots/kiwi-chibi-flying.svg` | Deployments, automated shipping, cloud sync |
| `hacking` | `svg/mascots/kiwi-chibi-hacking.svg` | Architect review round, AST diff analysis, test planning |
| `guarding` | `svg/mascots/kiwi-chibi-guarding.svg`| 24h post-merge telemetry monitoring, regression scans |
| `sleeping` | `svg/mascots/kiwi-chibi-sleeping.svg`| Dormant state, paused runs, sandbox standby |

---

## 💻 4. How to Include in Projects

### A. Raw SVG Inclusion (Universal)
```html
<!-- Example: Embedding directly in HTML/JSX -->
<svg viewBox="0 0 16 16" width="32" height="32" shape-rendering="crispEdges" style="image-rendering: pixelated">
  <rect x="5" y="2" width="5" height="1" fill="#88BC38"/>
  <rect x="3" y="3" width="8" height="1" fill="#93C645"/>
  <rect x="2" y="4" width="9" height="1" fill="#93C645"/>
  <rect x="2" y="5" width="9" height="1" fill="#93C645"/>
  <rect x="1" y="6" width="10" height="1" fill="#93C645"/>
  <rect x="1" y="7" width="10" height="1" fill="#93C645"/>
  <rect x="2" y="8" width="9" height="1" fill="#88BC38"/>
  <rect x="2" y="9" width="9" height="1" fill="#78A832"/>
  <rect x="3" y="10" width="7" height="1" fill="#6A962A"/>
  <rect x="4" y="11" width="5" height="1" fill="#5A8222"/>
  <rect x="7" y="4" width="2" height="2" fill="#111816"/>
  <rect x="7" y="4" width="1" height="1" fill="#FFFFFF"/>
  <rect x="11" y="5" width="3" height="2" fill="#FFAA28"/>
  <rect x="14" y="6" width="1" height="1" fill="#E89115"/>
  <rect x="4" y="12" width="2" height="2" fill="#FFAA28"/>
  <rect x="3" y="13" width="3" height="1" fill="#FFAA28"/>
  <rect x="8" y="12" width="2" height="2" fill="#FFAA28"/>
  <rect x="7" y="13" width="3" height="1" fill="#FFAA28"/>
</svg>
```

### B. React Components
```tsx
import { KiwiLogo, KiwiMascot } from '@runkiwi/assets/react';

// Brand Logo
<KiwiLogo size={24} />

// Adaptive Monochrome (inherits parent text color)
<KiwiLogo size={24} monochrome />

// Contextual Mascot Poses
<KiwiMascot pose="vibing" size={32} />
<KiwiMascot pose="guarding" size={32} />
<KiwiMascot pose="dancing" size={32} />
```

### C. Terminal & Window Perching (CSS Pattern)
When placing the 8-bit Kiwi standing on top of a terminal or dashboard window frame:
```css
.window-container {
  position: relative;
}

.pixel-kiwi-perched {
  position: absolute;
  top: -21px; /* Positions feet exactly on top of the 1px window border */
  right: 28px;
  z-index: 25;
  display: inline-flex;
  align-items: flex-end;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  image-rendering: pixelated;
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.pixel-kiwi-perched:hover {
  transform: translateY(-2px) scale(1.18);
}
```

---

## 🚫 5. Anti-Patterns & Rules for AI Agents

1. **NEVER use antialiased vector circles/curves** for the Kiwi mascot. Always use crisp pixel blocks.
2. **NEVER mix coordinate scales**: All 16×16 sprites must align strictly to integer coordinates (`x`, `y`, `width`, `height` in whole pixel integers).
3. **DO NOT change the beak direction**: The Kiwi beak always points **forward / right** (`x=11..15`).
4. **DO NOT omit the eye sparkle**: The `(7, 4)` 1px white sparkle (`#FFFFFF`) gives life and emotion to the chibi eye.
