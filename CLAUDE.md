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
