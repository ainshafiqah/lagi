// JavaScript for handling the hamburger menu
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('header nav ul');
const slideshow = document.querySelector('.slideshow-container');

// Toggle the menu visibility and push the slideshow down
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    slideshow.classList.toggle('active-menu');
});
