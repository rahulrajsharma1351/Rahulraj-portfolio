var typeData = new Typed(".role", {
    strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});

// Toggle mobile navigation menu

const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-items');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling when clicking on navigation links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close the mobile navigation menu after clicking on a link
        
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});