// Add fade-in animation on page load and navigation clicks
document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    content.classList.add('fade-in');
});

// Handle navigation clicks with animation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        // Simulate page transition (in a real site, use AJAX or routing)
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});