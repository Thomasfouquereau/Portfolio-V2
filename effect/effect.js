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