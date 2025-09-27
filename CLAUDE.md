# kylechadha.com Development Documentation

## Project Overview
Personal website for Kyle Chadha - a minimal, static website showcasing social links and projects.

## Requirements & Goals

### Core Requirements
- Static website (HTML, CSS, JS only - no frameworks)
- Social links: Twitter/X, GitHub, LinkedIn (all @kylechadha)
- List of side projects with GitHub and live site links
- Dark, abstract, minimal aesthetic
- Mobile responsive
- Fast loading, small file sizes
- Future expandability for blog/interests section

### Design Philosophy
- Inspired by minimal programmer websites (Dave Cheney, Russ Cox)
- "Less is more" - prioritize content over decoration
- Subtle coolness through restraint
- Professional appearance

## Technical Decisions

### Architecture
- **Structure**: Simple directory with separate HTML, CSS, JS files
- **No build process**: Direct file serving
- **No dependencies**: Pure vanilla implementation

### Features Implemented
1. **Particle Animation Background**
   - Interactive canvas particles that respond to mouse movement
   - Connections drawn between nearby particles
   - Subtle opacity for non-intrusive effect

2. **Responsive Design**
   - Mobile-first approach
   - Flexbox for layout
   - Breakpoint at 640px for mobile optimization

3. **Interactions**
   - Smooth scroll behavior
   - Fade-in animation on page load
   - Hover effects on links and project items
   - Mouse-responsive particle system

### Color Scheme
- Background: #0a0a0a (near black)
- Primary text: #e0e0e0 (light gray)
- Secondary text: #a0a0a0 (medium gray)
- Accent: #3b82f6 (blue)
- Borders: #2a2a2a (dark gray)

## Git Strategy
- **develop branch**: Default working branch
- **master branch**: Production branch for GitHub Pages
- Workflow: PR from develop → master for releases

## Deployment
- Host on GitHub Pages from master branch
- Custom domain: kylechadha.com

## Future Enhancements
- Add actual project data (replace placeholders)
- Blog section
- About/interests section
- Dark/light theme toggle (optional)
- Project filtering/categorization

## File Structure
```
kc-website/
├── index.html      # Main HTML structure
├── styles.css      # Minimal dark theme styling
├── script.js       # Particle animation and interactions
└── CLAUDE.md       # This documentation file
```

## Performance Considerations
- No external fonts (uses system fonts)
- No images or heavy assets
- Minimal JavaScript execution
- CSS variables for efficient theming
- Single HTTP request per resource type