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

## Development Notes
- Screenshots should be saved to /tmp/ directory to avoid cluttering the workspace
- Use format: `/tmp/screenshot_[description].png`

## Current Status (Particles.js Implementation)

### What's Been Done
1. **Replaced custom particle animation with particles.js library**
   - Added particles.js via CDN: `https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js`
   - Removed custom SimplexNoise wave animation code
   - Updated HTML to use `<div id="particles-js">` instead of canvas

2. **Configured particles.js with dark theme**
   - Background: Black (#000000)
   - Particles: Bright green (#00ff88) - currently needs adjustment to grey
   - 150 particles with connecting lines
   - Interactive hover effect (grab mode)
   - Particles moving at speed 2

3. **Fixed initialization issues**
   - Wrapped particlesJS initialization in DOMContentLoaded event
   - Fixed CDN URL to use correct jsdelivr format

### Current Configuration (in script.js)
```javascript
particlesJS('particles-js', {
    particles: {
        number: { value: 40 },
        color: { value: '#404040' },
        opacity: { value: 0.2 },
        size: { value: 1, random: true },
        line_linked: {
            color: '#404040',
            opacity: 1,
            distance: 350,
            width: 0.7
        },
        move: { speed: 0.1 }
    },
    interactivity: {
        onhover: { enable: false },
        onclick: { enable: true, mode: 'push' }
    }
});
```

### Features Implemented
- Subtle grey particles (#404040) with low opacity
- Slow, gentle movement (0.1 speed)
- Long connection distance (350px) with thin lines
- Click to add particles interaction
- Outfit font (weight 300) for heading

### Project Structure
- **index.html**: Main structure with particles div, social links, and projects list
- **styles.css**: Dark minimal theme with gradient heading effect
- **script.js**: Particles.js configuration and Outfit font setup
- **package.json**: NPM config for live-server development
- **CNAME**: Custom domain configuration for kylechadha.dev
- **README.md**: Public repository documentation

## Deployment

### GitHub Pages Setup
- Repository: `kylechadha.github.io` (renamed from kc-website)
- Deploy branch: `master`
- Development branch: `develop`
- Custom domain: `kylechadha.dev`

### DNS Configuration (Porkbun)
Required DNS records:
- 4 A records pointing to: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- CNAME record: www → kylechadha.github.io

### Deployment Workflow
1. Develop on `develop` branch
2. Create PR to `master`
3. Merge triggers automatic GitHub Pages deployment
4. Site available at https://kylechadha.dev (with auto-SSL via Let's Encrypt)