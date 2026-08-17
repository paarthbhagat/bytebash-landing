# BYTE BASH — Hackathon Landing Page

A single-page, retro-arcade themed landing page for a fictional 24-hour college hackathon, built for the DJCSI Tech Co-Com recruitment task (Task 2).

**Live demo:** _add your deployment link here_

## Overview
BYTE BASH is framed as an arcade cabinet: "insert a coin," clear checkpoints, and walk away with a working build. The whole page is built around that metaphor — CRT scanlines, a glitching title, a scrolling marquee ticker, and a level-by-level structure (About, Timeline, Prizes, Sponsors, Judges, Rules, FAQ) that mirrors progressing through a game.

## Features implemented
- Hero section with CRT scanline overlay, animated glitch title, and a looping ticker
- About, Timeline, Prizes, Sponsors, Judges, Rules, and FAQ sections, each framed as a "level"
- Scroll-triggered reveal animations via `IntersectionObserver`
- Native `<details>`-based FAQ accordion (no JS dependency)
- Fully responsive layout (single-column collapse on mobile, sticky nav)
- Accessibility basics: skip link, visible focus states, `prefers-reduced-motion` support, semantic landmarks

## Technologies & libraries used
- HTML5, CSS3 (custom properties, no framework), vanilla JavaScript
- Google Fonts: `Press Start 2P` (display) and `Space Mono` (body)
- No build step, no external JS libraries — kept intentionally lightweight

## Setup instructions
No build tooling required.

```bash
git clone <this-repo-url>
cd hackathon-landing
# open index.html directly, or serve it locally:
python3 -m http.server 5500
# then visit http://localhost:5500
```

## Project structure
```
hackathon-landing/
├── index.html      # all page markup/sections
├── style.css        # design tokens + all styling
├── script.js         # scroll-reveal interactions
└── README.md
```


## Design notes
- **Palette:** deep navy/purple background (`#12081F`), magenta (`#FF2E9A`), cyan (`#3EF2C8`), yellow (`#FFD23E`) — chosen to read as "arcade cabinet lit up in a dark room" rather than a generic dark theme.
- **Type:** `Press Start 2P` used sparingly (headlines, labels, stats) to avoid fatigue at body-copy sizes; `Space Mono` carries all reading content.
- **Signature element:** the glitching hero title + CRT scanline overlay, reused subtly throughout (dashed sponsor slots, pixel-block icons) instead of scattering unrelated effects.
