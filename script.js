// Wait for DOM to be ready before initializing particles
document.addEventListener('DOMContentLoaded', () => {
    // Particles.js configuration with detailed comments
    particlesJS('particles-js', {
    particles: {
        number: {
            value: 40, // Total number of particles on screen
            density: {
                enable: true, // Adjusts particle count based on screen size
                value_area: 800 // Area (in pixels) for density calculation - lower = more particles
            }
        },
        color: {
            value: '#404040' // Particle color (hex, rgb, or named color)
        },
        shape: {
            type: 'circle', // Shape: 'circle', 'edge' (square), 'triangle', 'polygon', 'star', 'image'
            stroke: {
                width: 0, // Border width of particles (0 = no border)
                color: '#000000' // Border color
            },
            polygon: {
                nb_sides: 5 // Number of sides if type is 'polygon'
            }
        },
        opacity: {
            value: 0.5, // Particle opacity (0-1, where 1 is fully opaque)
            random: false, // Random opacity for each particle (true/false)
            anim: {
                enable: false, // Animate opacity (breathing effect)
                speed: 1, // Animation speed
                opacity_min: 0.1, // Minimum opacity during animation
                sync: false // Sync animation for all particles
            }
        },
        size: {
            value: 1, // Particle size in pixels
            random: true, // Random size for each particle (true/false)
            anim: {
                enable: false, // Animate size (pulsing effect)
                speed: 40, // Animation speed
                size_min: 0.1, // Minimum size during animation
                sync: false // Sync animation for all particles
            }
        },
        line_linked: {
            enable: true, // Draw lines between nearby particles (true/false)
            distance: 350, // Maximum distance for connecting lines (pixels)
            color: '#404040', // Line color
            opacity: 1, // Line opacity (0-1)
            width: 0.7 // Line width in pixels
        },
        move: {
            enable: true, // Enable particle movement (true/false)
            speed: 0.1, // Movement speed (higher = faster)
            direction: 'none', // Direction: 'none', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left'
            random: false, // Random movement speed for each particle
            straight: false, // Move in straight lines (true) or natural motion (false)
            out_mode: 'out', // Behavior at canvas edge: 'out' (appear on opposite side), 'bounce'
            bounce: false, // Bounce off canvas edges (requires out_mode: 'bounce')
            attract: {
                enable: false, // Particles attract each other
                rotateX: 600, // Attraction force X
                rotateY: 1200 // Attraction force Y
            }
        }
    },
    interactivity: {
        detect_on: 'window', // Detect mouse events on: 'canvas' or 'window'
        events: {
            onhover: {
                enable: false, // Enable hover interactivity
                mode: 'grab' // Hover mode: 'grab', 'bubble', 'repulse', 'remove'
                // 'grab' - connects particles to cursor
                // 'bubble' - enlarges nearby particles
                // 'repulse' - pushes particles away from cursor
                // 'remove' - deletes particles near cursor
            },
            onclick: {
                enable: true, // Enable click interactivity
                mode: 'push' // Click mode: 'push' (add particles), 'remove', 'bubble', 'repulse'
            },
            resize: true // Recalculate on window resize
        },
        modes: {
            grab: {
                distance: 200, // Distance from cursor to grab particles (pixels)
                line_linked: {
                    opacity: 1 // Opacity of lines drawn to cursor (0-1)
                }
            },
            bubble: {
                distance: 40, // Distance to affect particles
                size: 10, // Size increase
                duration: 2, // Duration in seconds (if click)
                opacity: 8, // Opacity change
                speed: 3 // Speed of bubble effect
            },
            repulse: {
                distance: 20, // Push particles away within this distance (pixels)
                duration: 0.4 // Animation duration
            },
            push: {
                particles_nb: 4 // Number of particles to add on click
            },
            remove: {
                particles_nb: 2 // Number of particles to remove
            }
        }
    },
    retina_detect: true // Optimize for retina displays
    });
    
    // Fade in animation for content
    // Fade in main content
    const main = document.querySelector('main');
    main.style.opacity = '0';
    main.style.transform = 'translateY(20px)';
    main.style.transition = 'opacity 1s ease, transform 1s ease';
    
    setTimeout(() => {
        main.style.opacity = '1';
        main.style.transform = 'translateY(0)';
    }, 100);
    
    
    // Font cycling feature - thinner, wider options
    const fonts = [
        { name: 'Inter', weight: '200', letterSpacing: '0.05em' },
        { name: 'Inter', weight: '300', letterSpacing: '-0.04em' },
        { name: 'Inter', weight: '400', letterSpacing: '-0.02em' },
        { name: 'Inter', weight: '500', letterSpacing: '-0.03em' },
        { name: 'Oswald', weight: '300', letterSpacing: '0.02em' },
        { name: 'Oswald', weight: '400', letterSpacing: '0em' },
        { name: 'Bebas Neue', weight: '400', letterSpacing: '0.08em' },
        { name: 'Rubik', weight: '300', letterSpacing: '0.02em' },
        { name: 'Rubik', weight: '400', letterSpacing: '0em' },
        { name: 'Rubik', weight: '500', letterSpacing: '-0.02em' },
        { name: 'Poppins', weight: '300', letterSpacing: '0.02em' },
        { name: 'Poppins', weight: '400', letterSpacing: '0em' },
        { name: 'Poppins', weight: '500', letterSpacing: '-0.02em' },
        { name: 'Montserrat', weight: '300', letterSpacing: '0.05em' },
        { name: 'Montserrat', weight: '400', letterSpacing: '0.02em' },
        { name: 'Montserrat', weight: '500', letterSpacing: '0em' },
        { name: 'Raleway', weight: '300', letterSpacing: '0.05em' },
        { name: 'Raleway', weight: '400', letterSpacing: '0.02em' },
        { name: 'Work Sans', weight: '300', letterSpacing: '0.02em' },
        { name: 'Work Sans', weight: '400', letterSpacing: '0em' },
        { name: 'Space Grotesk', weight: '400', letterSpacing: '-0.02em' },
        { name: 'Space Grotesk', weight: '500', letterSpacing: '-0.03em' },
        { name: 'Sora', weight: '400', letterSpacing: '-0.02em' },
        { name: 'Sora', weight: '500', letterSpacing: '-0.03em' },
        { name: 'Urbanist', weight: '400', letterSpacing: '0em' },
        { name: 'Urbanist', weight: '500', letterSpacing: '-0.02em' },
        { name: 'Manrope', weight: '400', letterSpacing: '-0.02em' },
        { name: 'Manrope', weight: '500', letterSpacing: '-0.03em' },
        { name: 'Plus Jakarta Sans', weight: '400', letterSpacing: '-0.02em' },
        { name: 'Plus Jakarta Sans', weight: '500', letterSpacing: '-0.03em' },
        { name: 'DM Sans', weight: '400', letterSpacing: '0em' },
        { name: 'DM Sans', weight: '500', letterSpacing: '-0.02em' },
        { name: 'Lexend', weight: '300', letterSpacing: '0.02em' },
        { name: 'Lexend', weight: '400', letterSpacing: '0em' },
        { name: 'Outfit', weight: '300', letterSpacing: '0.02em' },
        { name: 'Outfit', weight: '400', letterSpacing: '0em' }
    ];
    
    let currentFontIndex = 0;
    const h1 = document.querySelector('h1');
    
    function updateFont() {
        const font = fonts[currentFontIndex];
        h1.style.fontFamily = `'${font.name}', sans-serif`;
        h1.style.fontWeight = font.weight;
        h1.style.letterSpacing = font.letterSpacing;
        console.log(`Font ${currentFontIndex + 1}/${fonts.length}: ${font.name} (weight: ${font.weight}, spacing: ${font.letterSpacing})`);
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            currentFontIndex = (currentFontIndex - 1 + fonts.length) % fonts.length;
            updateFont();
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            currentFontIndex = (currentFontIndex + 1) % fonts.length;
            updateFont();
        }
    });
    
    console.log('🎨 Font Tester Activated!');
    console.log('Use ↑/↓ arrow keys to cycle through fonts');
    console.log('Current font: Inter (weight: 300)');
    console.log('---');
});