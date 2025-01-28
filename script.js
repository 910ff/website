ScrollReveal().reveal('.hero-content', {
    delay: 300,
    distance: '50px',
    duration: 1000,
    opacity: 0,
    reset: true,
    easing: 'ease-in-out'
});


ScrollReveal().reveal('#about', {
    delay: 300,
    distance: '50px',
    duration: 1000,
    opacity: 0,
    reset: true,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('#projects .card', {
    delay: 300,
    distance: '50px',
    duration: 1000,
    opacity: 0,
    reset: true,
    easing: 'ease-in-out',
    interval: 200
});


gsap.from(".hero-content h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".hero-content p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
