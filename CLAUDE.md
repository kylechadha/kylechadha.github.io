# kylechadha.dev

## Project Overview
Personal website for Kyle Chadha - a minimal, static website showcasing social links and projects.

## Architecture
- **Static site**: HTML, CSS, JS only — no frameworks, no build process
- **Particles**: particles.js via CDN with SRI integrity hash
- **Font**: Outfit (weight 300) via Google Fonts for heading
- **Hosting**: GitHub Pages from `main` branch
- **Domain**: kylechadha.dev (CNAME configured)

## Design Philosophy
- Inspired by minimal programmer websites (Dave Cheney, Russ Cox)
- Dark, abstract aesthetic with subtle particle animation
- "Less is more" — prioritize content over decoration

## Color Scheme
- Background: #0a0a0a (near black)
- Primary text: #e0e0e0 (light gray)
- Secondary text: #a0a0a0 (medium gray)
- Borders: #2a2a2a (dark gray)
- Particles: #404040 (dark gray, subtle)

## Git Strategy
- **main**: the only branch — and the one GitHub Pages deploys from
- Workflow: commit to `main` and push → auto-deploys
- Preview locally with `npx live-server` before pushing; no staging branch, no PRs

## File Structure
```
├── index.html      # Page structure
├── styles.css      # Dark theme styling
├── script.js       # Particles.js config and fade-in animation
├── CNAME           # Custom domain
├── package.json    # Dev server (live-server)
├── README.md       # Public documentation
└── CLAUDE.md       # Development notes
```

## Development
```bash
npx live-server     # Local dev server with hot reload
```

## Deployment
1. Commit changes to `main`
2. `git push` → GitHub Pages builds and deploys automatically (~1 min)
3. Live at https://kylechadha.dev

Pages config: source = `main`, path = `/`. A new page is just a folder with an `index.html` (e.g. `cachuma/index.html` → kylechadha.dev/cachuma/).

## Password-Gated Pages
`oaxaca/`, `m/engagement-party/` and `job-dashboard/` use a client-side SHA-256 gate (same password; it's in Kyle's records, never commit it in plaintext). The gate hides the page but isn't real security: the page text is readable via view-source, and `job-dashboard/jobs.json` is public in the repo and at its URL.

## job-dashboard (weekly job search data)
Kitchen-tablet dashboard for Kyle's job search, also used on a laptop. ChatGPT refreshes the search weekly and produces `jobs.json`.
- The page fetches `job-dashboard/jobs.json` on load, every 30 min, and when the tab becomes visible. It reloads itself once a day
- Weekly update: `job-dashboard/update.sh` validates `~/Downloads/jobs.json`, copies it in, commits only that file, and pushes. Pass a path to use a different file
- "Currently open" shows `jobs[]`. "All time" also shows `archived_jobs` (closed roles) inline, dashed and tagged Closed
- "By company" uses Kyle's fixed region order (`REGION_ORDER`: LA, SD, other SoCal, Bay Area, elsewhere). It overrides `display.region_order`. "By pay" orders regions by their top role midpoint
- Within a region: companies by best role midpoint, roles by midpoint, unknown salary last, closed roles last
- `chatgpt-instructions.md` is the schema 1.1.0 change request for ChatGPT: archived_jobs keeps full job records forever, with `lifecycle_status`, `closed_on` and `close_reason`. The page also reads the 1.0.0 fields (`status`, `removed_on`, `reason`)

## m/engagement-party (Firestore persistence)
Myra's engagement-picnic planner. Shared, editable state syncs live through Firestore.
- Firebase project `mk-engagement-party` under kylechadha@gmail.com (Spark plan, no billing linked, so it can't cost money). Console: https://console.firebase.google.com/u/1/project/mk-engagement-party
- One doc at `plans/{sha256('mk-engagement-party:' + password)}`. The data stays private because only password holders can compute the doc ID
- Writes send only changed sub-keys (FieldPath updates), so two people editing different items don't overwrite each other
- Rules live in `m/engagement-party/firestore.rules`. Deploy them via the Firebase Rules REST API (create ruleset, then PATCH release `cloud.firestore`) or the Firebase CLI
- When Myra sends a new HTML version: keep her markup, then re-apply the gate, the `save()` → `window.mkSync` hook, `renderAll`/`window.mkApp`, `esc()` in templates, and the Firestore module
