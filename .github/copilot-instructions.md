<!-- .github/copilot-instructions.md - guidance for AI coding agents on this repo -->

# Agency.ai — Copilot Instructions

Purpose: give an AI coding agent the minimal, concrete knowledge needed to be productive in this repo.

- **Project type:** Vite + React (client-only SPA) with Tailwind CSS utilities and Framer Motion animations.
- **Root files to inspect:** `package.json`, `vite.config.js`, `src/main.jsx`, `src/App.jsx`, `src/index.css`.
- **Key directories:** `src/components/` (UI components), `src/assets/` (single `assets.js` index + images), `public/` (static assets).

Quick start (exact commands from `package.json`):

```
npm install
npm run dev      # starts Vite dev server (use this instead of README's `npm start`)
npm run build
npm run preview
npm run lint
```

Notes on dev server and README inconsistencies:
- The README still mentions `npm start` and port `3000`. This repo uses Vite (`npm run dev`) and Vite's default dev port (5173) unless overridden in `vite.config.js`.

Architecture & conventions (concrete):
- Single-page React app. Root render is `src/main.jsx` -> `src/App.jsx`.
- App composition: `App.jsx` mounts top-level UI sections by importing components from `src/components/*` in order: `Navbar`, `Hero`, `TrustedBy`, `Services`, `OurWork`, `Teams`, `ContactUs`, `Footer`.
- Theme is lifted into `App.jsx` and passed as `theme` + `setTheme` to relevant components (see `Navbar.jsx` and `ThemeToggleBtn.jsx`). The theme implementation: the `ThemeToggleBtn` sets a `dark` class on `document.documentElement` and stores the value in `localStorage`. Use that pattern when adding theme-dependent behavior.
- Centralized assets: `src/assets/assets.js` exports all image imports and helper arrays (e.g., `company_logos`, `teamData`). When adding an image: import it at the top of `assets.js`, add it to the `assets` export (and any array if needed), then consume via `import assets from '../assets/assets'` and `assets.my_new_image`.
- Animation: components use `framer-motion` (`motion`, `AnimatePresence`) for entrance/exit animations (see `Navbar.jsx`) and some components implement pointer-following logic (see `App.jsx` mouse effect). Follow the framer-motion patterns used in `Navbar` for consistent UX.

Important code patterns & gotchas:
- Client-only code: multiple files use `window` (e.g., `window.innerWidth`, `window.matchMedia`, `document`). Avoid adding server-side/SSR assumptions — treat this repo as client-only.
- Theme flow: always read/write theme through `localStorage` and toggle the `dark` class on `document.documentElement`. Components expect `theme` prop to decide which asset to use (e.g., `assets.logo_dark` vs `assets.logo`).
- Assets usage: prefer the `assets` index rather than importing image files directly in many components for consistency.
- Responsive UI: Tailwind utility classes are used heavily; responsive breakpoints are implemented with `sm:`, `lg:`, etc. Mobile menu uses a full-screen overlay driven by a `sidebarOpen` state in `Navbar.jsx`.

Linting & formatting:
- ESLint is configured; run `npm run lint` to check. There is no test runner configured in the repository.

Where to make changes for common tasks (examples):
- Change logo variants: edit `src/assets/assets.js` and swap `logo` / `logo_dark`, used in `src/components/Navbar.jsx`.
- Add a new section component: create `src/components/MySection.jsx`, export default component, and import it into `src/App.jsx` where sections are mounted.
- Add a new animated entrance: use `framer-motion` `motion` components with `initial`/`animate`/`exit` props — follow the pattern in `Navbar.jsx`.

Debugging tips:
- Run `npm run dev` and open the browser at the Vite address (console shows the port). Use the browser devtools for runtime logs; many components rely on runtime globals.
- If images fail to load, verify they are exported from `src/assets/assets.js` and referenced as `assets.<name>`.

What *not* to change without asking:
- Do not switch to SSR or try to render on the server — the codebase depends on browser globals.
- Avoid changing the top-level theme implementation without updating all components that depend on `theme` and `assets` naming.

If you need more context or walk-through, ask for specific areas (e.g., theme flow, adding a new asset, updating animations).
