document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for timeline items
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    // Observe all timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });

    // Log to confirm script is running
    console.log('Education timeline script initialized');
}); 