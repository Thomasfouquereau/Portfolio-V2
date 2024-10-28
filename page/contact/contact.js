const contactForm = document.querySelector('.contact-form');
const contactButton = document.querySelector('#contact-forn-button');
const typeContactContainer = document.querySelectorAll('.type-contact-container');

contactButton.addEventListener('click', () => {
    typeContactContainer.forEach(container => {
        container.style.display = 'none';
    });
    contactForm.style.display = 'flex';
});

const submitButton = document.querySelector('.contact-form-submit');

// Ajouter un écouteur d'événement au bouton de soumission
submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Empêcher le rechargement de la page

    // Récupérer les valeurs des champs du formulaire
    const prenom = document.querySelector('.contact-form-Prenom').value;
    const nom = document.querySelector('.contact-form-Nom').value;
    const budget = document.querySelector('.contact-form-budget').value;
    const nomEntreprise = document.querySelector('.contact-form-Nom-en').value;
    const email = document.querySelector('.contact-form-E-mail').value;
    const emailstyle = document.querySelector('.contact-form-E-mail');
    const description = document.querySelector('.contact-form-description').value;
    const descriptionstyle = document.querySelector('.contact-form-description');

    // Vérifier si les champs email et description sont remplis
    if (email.trim() === '' || description.trim() === '') {
        emailstyle.style.border = '2px solid red';
        descriptionstyle.style.border = '2px solid red';
        return;
    }

    // Créer un objet contenant les données du formulaire
    const formData = {
        prenom,
        nom,
        budget,
        nomEntreprise,
        email,
        description
    };

    // Envoyer les données par email en utilisant EmailJS
    emailjs.send('service_f185lbk', 'template_pqfndtd', formData)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
});