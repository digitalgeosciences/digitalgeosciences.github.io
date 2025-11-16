# Digital Geosciences Platform

Live site: https://digitalgeosciences.com

## Purpose
Digital Geosciences is a lightweight, data-driven home for the network of researchers, educators, and technologists building open geoscience and sustainability tooling. The public landing page documents active collaborators, highlight projects, and points people toward ways to plug into the community.

## Tech stack
- **Vite + React + TypeScript** powers a modern, fast refresh experience for developing sections and layout components under `src/components/sections`.
- **Tailwind CSS** (with the typography plugin) and **Radix UI** primitives provide the design tokens, while **Lucide**, **Recharts**, and **Sonner** cover icons, charts, and lightweight notifications.
- **Data fetching** relies on local JSON files in `public/data/` so that maintaining the site stays in sync with whatever content you ship through Git.

## Repository layout
- `public/` hosts assets that are copied verbatim to the output directory, including the JSON data files that seed each page section.
- `public/data/` contains `site-config.json`, `projects.json`, `collaborators.json`, `announcements.json`, and related metadata. Each section component fetches the matching file at runtime (`CollaboratorsSection`, `JoinSection`, etc.) so that content updates happen through straightforward edits instead of hard-coded UI updates.
- `src/` contains the Vite-powered application. Most of the landing page is created inside `src/components/sections`, with supporting hooks, theme providers, and utilities living under `src/components`.

## Data sources
- **`public/data/site-config.json`**: global metadata (title, description, contact info) plus the navigation and social links wired into the header/footer.
- **`public/data/projects.json`**: project cards rendered in the Projects section, each entry describing a tool, dataset, or publication with an optional external URL.
- **`public/data/collaborators.json`**: collaborator bios, roles, participation dates, social links, and featured projects displayed in the Collaborators section.
- **`public/data/announcements.json`**: announcements or news items surfaced in the announcement/hero area; rotating this file adjusts what visitors see first.
- Additional JSON files can be added to `public/data/` as needed; just pair them with a new section in `src/components/sections` that fetches the data and renders it.

## Getting started
1. Install dependencies: `npm install` (alternatively `pnpm install` if you prefer the pnpm CLI).
2. Launch the dev server: `npm run dev`. Vite will serve the app on `http://localhost:5173` by default.
3. (Optional) Run `npm run lint` to verify TypeScript and ESLint rules before committing.

## Scripts & QA
- `npm run dev`: starts Vite with hot module replacement.
- `npm run build`: bundles the app for production into `dist/`.
- `npm run build:dev`: builds with development mode settings (useful for debugging minification issues).
- `npm run preview`: serves the production build locally.
- `npm run lint`: runs ESLint across the project to enforce coding standards.

## Content updates
Edit the JSON files in `public/data/` to update collaborators, announcements, projects, or site metadata. Most sections fetch their data automatically, so the UI will pick up your changes on the next reload. For richer entries (photos, project icons, or custom links), add assets to `public/` and reference them from the JSON objects.

## Building & deploying
Run `npm run build` to populate `dist/` with the optimized static site. Deploy the contents of `dist/` to your preferred static host (Vercel, Netlify, GitHub Pages, etc.). Every JSON/data change requires rebuilding before deployment, since the files are bundled into the output.

## Contact
For questions or to suggest updates, reach out to `info@digitalgeosciences.com` or open an issue on the [GitHub organization](https://github.com/digitalgeosciences).
