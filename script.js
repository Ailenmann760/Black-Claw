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

// Intersection Observer for scroll animations
const sections = document.querySelectorAll('.section');
const serviceCards = document.querySelectorAll('.service-card');
let lastVisibleSection = null;

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (lastVisibleSection) {
                lastVisibleSection.classList.add('exit');
            }
            entry.target.classList.add('visible');
            lastVisibleSection = entry.target;
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

// Mobile nav toggle (if needed, add a hamburger menu in HTML)
const navLinks = document.querySelector('.nav-links');
// Add a toggle button in HTML for mobile if desired, e.g., <button id="nav-toggle">☰</button>
// Then: document.getElementById('nav-toggle').addEventListener('click', () => navLinks.classList.toggle('show'));
