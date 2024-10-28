const contactForm = document.querySelector('.contact-form');
const contactButton = document.querySelector('#contact-forn-button');
const typeContactContainer = document.querySelectorAll('.type-contact-container');

contactButton.addEventListener('click', () => {
    typeContactContainer.forEach(container => {
        container.style.display = 'none';
    });
    contactForm.style.display = 'flex';
});