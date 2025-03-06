// Animated Visualizer
function createVisualizer() {
    const visualizer = document.getElementById('visualizer');
    for (let i = 0; i < 50; i++) {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.left = `${i * 15}px`;
        bar.style.animationDelay = `${i * 0.05}s`;
        visualizer.appendChild(bar);
    }
}

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.feature-card').forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(50px)';
    observer.observe(el);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onload = createVisualizer;