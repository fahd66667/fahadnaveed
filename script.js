document.addEventListener('DOMContentLoaded', () => {
    // Reveal articles with a smooth slide and fade
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.article-card').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(100px)";
        card.style.transition = "all 1s cubic-bezier(0.19, 1, 0.22, 1)";
        observer.observe(card);
    });

    // Custom Button Hover Sound/Light Trigger (Log only for now)
    document.querySelectorAll('.btn-read-more').forEach(btn => {
        btn.addEventListener('mouseenter', () => console.log("System: Tactical Data Accessed."));
    });
});
