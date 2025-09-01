// Typing effect for hero slogan
const typingText = document.getElementById('typing-text');
const slogan = "Building The Future";
let index = 0;

function typeWriter() {
    if (index < slogan.length) {
        typingText.textContent += slogan.charAt(index);
        index++;
        setTimeout(typeWriter, 150); // Adjustable speed
    }
}
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
    // Mobile nav toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for scroll fade-in (sections remain visible)
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));
