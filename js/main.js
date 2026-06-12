document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for nav links
    document.querySelectorAll('.nav-content a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const offset = target.getBoundingClientRect().top + window.pageYOffset - 64;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    });
});
