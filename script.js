// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all skill bubbles
    const bubbles = document.querySelectorAll('.skill-bubble');
    
    bubbles.forEach(bubble => {
        bubble.addEventListener('click', function(e) {
            // Prevent any parent events from triggering
            e.stopPropagation();
            
            const isActive = this.classList.contains('active');
            
            // Reset all bubbles
            bubbles.forEach(b => {
                if (b !== this) {
                    b.classList.remove('active');
                    b.classList.toggle('hide', !isActive);
                }
            });
            
            // Toggle current bubble
            this.classList.toggle('active');
            
            // If closing the active bubble, show all bubbles again
            if (!this.classList.contains('active')) {
                bubbles.forEach(b => {
                    b.classList.remove('hide');
                });
            }
        });
    });

    // Add click event to document to close active bubble when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.skill-bubble')) {
            bubbles.forEach(b => {
                b.classList.remove('active', 'hide');
            });
        }
    });

    // Education section animation
    const eduItems = document.querySelectorAll('.edu-item');
    
    const eduObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, {
        threshold: 0.2
    });

    eduItems.forEach(item => {
        item.style.animationPlayState = 'paused';
        eduObserver.observe(item);
    });
});
// Add console log to verify script is running
console.log('Skills interaction script loaded'); 
