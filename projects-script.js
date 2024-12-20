document.addEventListener('DOMContentLoaded', function() {
    // Add animation on scroll
    const projectCards = document.querySelectorAll('.project-card');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initialize project cards with opacity 0 and translate Y
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Add hover effect for project images
    projectCards.forEach(card => {
        const image = card.querySelector('.project-image img');
        
        card.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
        });
    });

    // Smooth scroll for contact link
    const contactLink = document.querySelector('.contact-link');
    
    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        const contactSection = document.querySelector(this.getAttribute('href'));
        contactSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});