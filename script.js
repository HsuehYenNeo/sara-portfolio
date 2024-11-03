// script.js

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

// Toggle mobile menu visibility
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Add event listeners to each link to set it as active
links.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'active-link' class from all links
        links.forEach(link => link.classList.remove('active-link'));
        
        // Add 'active-link' to the clicked link
        link.classList.add('active-link');
        
        // Close the menu (for mobile view)
        navLinks.classList.remove('active');
    });
});
