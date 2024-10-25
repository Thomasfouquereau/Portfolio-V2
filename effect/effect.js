// Créer un élément div pour le curseur personnalisé
const customCursor = document.createElement('div');
customCursor.classList.add('custom-cursor');
document.body.appendChild(customCursor);

// Mettre à jour la position du curseur personnalisé en fonction des mouvements de la souris
document.addEventListener("mousemove", function(event) {
    customCursor.style.left = `${event.clientX}px`;
    customCursor.style.top = `${event.clientY}px`;
});

// Ajouter un effet de zoom lors du survol des éléments interactifs
document.querySelectorAll('a, button, #zoomable').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('zoom');
        element.classList.add('zoomable');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('zoom');
        element.classList.remove('zoomable');
    });
});

document.querySelectorAll('#cursorChangeName').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangeName');
        element.classList.add('cursorChangebleName');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangeName');
        element.classList.remove('cursorChangebleName');
    });
});

document.querySelectorAll('#cursorChangesub-title-top').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangesub-title-top');
        element.classList.add('cursorChangeblesub-title-top');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangesub-title-top');
        element.classList.remove('cursorChangeblesub-title-top');
    });
});

document.querySelectorAll('#cursorChangesub-title-bottom').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangesub-title-bottom');
        element.classList.add('cursorChangeblesub-title-bottom');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangesub-title-bottom');
        element.classList.remove('cursorChangeblesub-title-bottom');
    });
});

document.querySelectorAll('#cursorChangeContact').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangeContact');
        element.classList.add('cursorChangebleContact');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangeContact');
        element.classList.remove('cursorChangebleContact');
    });
});

document.querySelectorAll('#cursorChangeTitle').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangeTitle');
        element.classList.add('cursorChangebleTitle');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangeTitle');
        element.classList.remove('cursorChangebleTitle');
    });
});

document.querySelectorAll('#cursorChangeImg').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangeImg');
        element.classList.add('cursorChangebleImg');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangeImg');
        element.classList.remove('cursorChangebleImg');
    });
});

document.querySelectorAll('#cursorChangeTitlePROJET').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangeTitlePROJET');
        element.classList.add('cursorChangebleTitlePROJET');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangeTitlePROJET');
        element.classList.remove('cursorChangebleTitlePROJET');
    });
});

document.querySelectorAll('#cursorChangeDesign').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangeDesign');
        element.classList.add('cursorChangeDesign');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangeDesign');
        element.classList.remove('cursorChangeDesign');
    });
});


document.querySelectorAll('#cursorChangeDev').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangeDev');
        element.classList.add('cursorChangeDev');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangeDev');
        element.classList.remove('cursorChangeDev');
    });
});

document.querySelectorAll('#EnCours, #Terminee ').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangeStatus');
        element.classList.add('cursorChangeStatus');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangeStatus');
        element.classList.remove('cursorChangeStatus');
    });
});