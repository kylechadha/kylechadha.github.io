# kylechadha.dev

## Project Overview
Personal website for Kyle Chadha - a minimal, static website showcasing social links and projects.

## Architecture
- **Static site**: HTML, CSS, JS only — no frameworks, no build process
- **Particles**: particles.js via CDN with SRI integrity hash
- **Font**: Outfit (weight 300) via Google Fonts for heading
- **Hosting**: GitHub Pages from `master` branch
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
- **develop**: Default working branch
- **master**: Production branch (GitHub Pages deploys from here)
- Workflow: develop → PR → master

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
1. Develop on `develop` branch
2. Create PR to `master`
3. Merge triggers automatic GitHub Pages deployment
4. Site available at https://kylechadha.dev
