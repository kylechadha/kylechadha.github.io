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
    
    
    // Set Outfit font for heading
    const h1 = document.querySelector('h1');
    h1.style.fontFamily = "'Outfit', sans-serif";
    h1.style.fontWeight = '300';
    h1.style.letterSpacing = '0.01em';
    
    // Prevent particle creation when clicking on links
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click from bubbling to particles.js
        });
    });
});