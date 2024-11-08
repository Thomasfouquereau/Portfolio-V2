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

// Limiter les tentatives de soumission
let submitAttempts = 0;
const maxAttempts = 3;
const resetTime = 60000; // 1 minute

const resetAttempts = () => {
    submitAttempts = 0;
};

submitButton.addEventListener('click', (event) => {

    if (submitAttempts >= maxAttempts) {
        alert('Vous avez atteint le nombre maximum de tentatives. Veuillez réessayer plus tard.');
        return;
    }

    submitAttempts++;
    setTimeout(resetAttempts, resetTime);

    // Récupérer les valeurs des champs du formulaire
    const prenom = document.querySelector('.contact-form-Prenom').value.trim();
    const nom = document.querySelector('.contact-form-Nom').value.trim();
    const budget = document.querySelector('.contact-form-budget').value.trim();
    const nomEntreprise = document.querySelector('.contact-form-Nom-en').value.trim();
    const emailElement = document.querySelector('.contact-form-E-mail');
    const email = emailElement.value.trim();
    const descriptionElement = document.querySelector('.contact-form-description');
    const description = descriptionElement.value.trim();

    // Regex pour valider l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Vérifier si les champs email et description sont remplis et si l'email est valide
    if (email === '' || description === '' || !emailRegex.test(email)) {
        if (email === '' || !emailRegex.test(email)) {
            emailElement.style.border = '2px solid red';
        } else {
            emailElement.style.border = '2px solid #252525';
        }
        if (description === '') {
            descriptionElement.style.border = '2px solid red';
        } else {
            descriptionElement.style.border = '2px solid #252525';
        }
        return;
    }

    // Créer un objet contenant les données du formulaire
    const formData = {
        prenom: DOMPurify.sanitize(prenom),
        nom: DOMPurify.sanitize(nom),
        budget: DOMPurify.sanitize(budget),
        nomEntreprise: DOMPurify.sanitize(nomEntreprise),
        email: DOMPurify.sanitize(email),
        description: DOMPurify.sanitize(description),
        Développement,
        Design
    };
    document.body.appendChild(customCursor);
    // Envoyer les données par email en utilisant EmailJS
    emailjs.send('service_f185lbk', 'template_pqfndtd', formData)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            event.preventDefault(); // Empêcher le rechargement de la page
            customCursor.classList.add('cursorChangeValider');
            setTimeout(() => {
                customCursor.classList.remove('cursorChangeValider');
            }, 2000);
        }, (error) => {
            console.log('FAILED...', error);
            alert('Une erreur s\'est produite. Veuillez réessayer plus tard ou contacter nous via un autre moyen.');
        });
});