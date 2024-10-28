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
const DéveloppementChoice = document.querySelector('#DéveloppementChoice');
const DesignChoice = document.querySelector('#DesignChoice');

let Développement = false;
let Design = false;

const updateSelection = (choice) => {
    if (choice === 'Développement') {
        Développement = !Développement;
        DéveloppementChoice.style.border = Développement ? '2px solid green' : 'none';
    } else if (choice === 'Design') {
        Design = !Design;
        DesignChoice.style.border = Design ? '2px solid green' : 'none';
    }
    console.log({ Développement, Design });
};

DéveloppementChoice.addEventListener('click', () => {
    updateSelection('Développement');
});

DesignChoice.addEventListener('click', () => {
    updateSelection('Design');
});

// Ajouter un écouteur d'événement au bouton de soumission
submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Empêcher le rechargement de la page

    // Récupérer les valeurs des champs du formulaire
    const prenom = document.querySelector('.contact-form-Prenom').value;
    const nom = document.querySelector('.contact-form-Nom').value;
    const budget = document.querySelector('.contact-form-budget').value;
    const nomEntreprise = document.querySelector('.contact-form-Nom-en').value;
    const emailElement = document.querySelector('.contact-form-E-mail');
    const email = emailElement.value;
    const descriptionElement = document.querySelector('.contact-form-description');
    const description = descriptionElement.value;

    // Regex pour valider l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Vérifier si les champs email et description sont remplis et si l'email est valide
    if (email.trim() === '' || description.trim() === '' || !emailRegex.test(email)) {
        if (email.trim() === '' || !emailRegex.test(email)) {
            emailElement.style.border = '2px solid red';
        } else {
            emailElement.style.border = '2px solid #252525';
        }
        if (description.trim() === '') {
            descriptionElement.style.border = '2px solid red';
        } else {
            descriptionElement.style.border = '2px solid #252525';
        }
        return;
    }

    // Créer un objet contenant les données du formulaire
    const formData = {
        prenom,
        nom,
        budget,
        nomEntreprise,
        email,
        description,
        Développement,
        Design
    };

    // Envoyer les données par email en utilisant EmailJS
    emailjs.send('service_f185lbk', 'template_pqfndtd', formData)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
});