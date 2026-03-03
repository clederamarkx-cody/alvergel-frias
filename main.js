document.addEventListener('DOMContentLoaded', () => {
    // Hero Animations
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroBtn = document.querySelector('.hero .btn');

    setTimeout(() => {
        if (heroSubtitle) heroSubtitle.style.opacity = '1';
        if (heroSubtitle) heroSubtitle.style.transform = 'translateY(0)';
    }, 500);

    setTimeout(() => {
        if (heroTitle) heroTitle.style.opacity = '1';
        if (heroTitle) heroTitle.style.transform = 'translateY(0)';
    }, 800);

    // Scroll Reveal
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight * 0.85) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Header Color Change
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Parallax effect for hero
    const heroImage = document.querySelector('.hero-image');
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        if (heroImage) {
            heroImage.style.transform = `translateY(${scroll * 0.4}px)`;
        }
    });
});
