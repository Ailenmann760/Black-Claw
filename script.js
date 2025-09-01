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
document.addEventListener('DOMContentLoaded', typeWriter);

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for scroll animations (fixed: no disappearing)
const sections = document.querySelectorAll('.section');
const serviceCards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // stays visible, no exit
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

serviceCards.forEach(card => cardObserver.observe(card));

// Mobile nav toggle (optional, add a button in HTML if needed)
const navLinks = document.querySelector('.nav-links');
// Example toggle:
// document.getElementById('nav-toggle').addEventListener('click', () => navLinks.classList.toggle('show'));
