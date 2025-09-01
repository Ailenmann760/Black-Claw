// Typing effect
const typingText = "Building The Future";
let index = 0;
const typingElement = document.getElementById('typing-effect');

function typeWriter() {
    if (index < typingText.length) {
        typingElement.innerHTML += typingText.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000); // Start after page load
});

// Scroll animations (fade-in without disappearing)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            // Do not remove 'reveal' to keep visible
        }
    });
}, { threshold: 0.1 });

// Observe sections and cards
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
document.querySelectorAll('.card-reveal').forEach(el => observer.observe(el));

// Smooth scrolling for nav
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
