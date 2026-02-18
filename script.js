document.addEventListener('DOMContentLoaded', () => {
    particlesJS('particles-js', {
        particles: {
            number: { value: 40, density: { enable: true, value_area: 800 } },
            color: { value: '#404040' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 1, random: true },
            line_linked: {
                enable: true,
                distance: 350,
                color: '#404040',
                opacity: 1,
                width: 0.7
            },
            move: {
                enable: true,
                speed: 0.1,
                direction: 'none',
                out_mode: 'out'
            }
        },
        interactivity: {
            detect_on: 'window',
            events: {
                onhover: { enable: false },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });

    // Fade in content
    const main = document.querySelector('main');
    main.style.opacity = '0';
    main.style.transform = 'translateY(20px)';
    main.style.transition = 'opacity 1s ease, transform 1s ease';

    setTimeout(() => {
        main.style.opacity = '1';
        main.style.transform = 'translateY(0)';
    }, 100);
});
