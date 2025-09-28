// Wait for DOM to be ready before initializing particles
document.addEventListener('DOMContentLoaded', () => {
    // Particles.js configuration
    particlesJS('particles-js', {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#404040' // Subtle grey for minimal aesthetic
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#404040', // Subtle grey lines
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: false,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 0.2
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
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
    
    // Add hover effect to project items
    const projectItems = document.querySelectorAll('.projects li');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(5px)';
            item.style.transition = 'transform 0.2s ease';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });
    
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