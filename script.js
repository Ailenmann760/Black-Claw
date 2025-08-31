// Typing effect for slogan
const sloganElement = document.getElementById('slogan');
const sloganText = 'Building the Future';
let i = 0;

function typeWriter() {
    if (i < sloganText.length) {
        sloganElement.innerHTML += sloganText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    typeWriter();

    // Smooth transitions between sections
    const sections = document.querySelectorAll('section');
    const options = { threshold: 0.5 };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease';
        observer.observe(section);
    });

    // Contact form submission (basic)
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Simple validation (add more if needed)
        alert('Message sent! (In production, integrate with a backend.)');
    });
});
