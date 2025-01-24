// Créer un élément div pour le curseur personnalisé
const customCursor = document.createElement('div');
customCursor.classList.add('custom-cursor');
document.body.appendChild(customCursor);

// Mettre à jour la position du curseur personnalisé en fonction des mouvements de la souris
document.addEventListener("mousemove", function (event) {
    customCursor.style.left = `${event.clientX}px`;
    customCursor.style.top = `${event.clientY}px`;
});

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

document.querySelectorAll('#cursorChangeNihongo').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangeNihongo');
        element.classList.add('cursorChangeNihongo');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangeNihongo');
        element.classList.remove('cursorChangeNihongo');
    });
});

document.querySelectorAll('#cursorChangeNihongoApp').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangeNihongoApp');
        element.classList.add('cursorChangeNihongoApp');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangeNihongoApp');
        element.classList.remove('cursorChangeNihongoApp');
    });
});

document.querySelectorAll('#cursorChangeRenolandes').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangeRenolandes');
        element.classList.add('cursorChangeRenolandes');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangeRenolandes');
        element.classList.remove('cursorChangeRenolandes');
    });
});

document.querySelectorAll('#cursorChangeA-TechPro').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangeA-TechPro');
        element.classList.add('cursorChangeA-TechPro');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangeA-TechPro');
        element.classList.remove('cursorChangeA-TechPro');
    });
});

document.querySelectorAll('#cursorChangeCvl').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangeCvl');
        element.classList.add('cursorChangeCvl');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangeCvl');
        element.classList.remove('cursorChangeCvl');
    });
});

document.querySelectorAll('#cursorChangePresentation').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangePresentation');
        element.classList.add('cursorChangePresentation');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangePresentation');
        element.classList.remove('cursorChangePresentation');
    });
});

document.querySelectorAll('#cursorChangeRenolandesV1').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangeRenolandesV1');
        element.classList.add('cursorChangeRenolandesV1');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangeRenolandesV1');
        element.classList.remove('cursorChangeRenolandesV1');
    });
});

document.querySelectorAll('#cursorChangeName, #CarteVlcadre').forEach(element => {
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

document.querySelectorAll('#cursorChangeDescription').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangeDescription');
        element.classList.add('cursorChangeDescription');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangeDescription');
        element.classList.remove('cursorChangeDescription');
    });
});

document.querySelectorAll('#cursorChangeDescription-text, input').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangeDescription-text');
        element.classList.add('cursorChangeDescription-text');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangeDescription-text');
        element.classList.remove('cursorChangeDescription-text');
    });
});

document.querySelectorAll('#cursorChangeContactRapide').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangeContactRapide');
        element.classList.add('cursorChangeContactRapide');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangeContactRapide');
        element.classList.remove('cursorChangeContactRapide');
    });
});

document.querySelectorAll('#cursorChangetypeContactLink, #contact-forn-button').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangetypeContactLink');
        element.classList.add('cursorChangetypeContactLink');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangetypeContactLink');
        element.classList.remove('cursorChangetypeContactLink');
    });
});

document.querySelectorAll('#cursorChangetypeContactLink, #contact-forn-button').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangetypeContactLink');
        element.classList.add('cursorChangetypeContactLink');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangetypeContactLink');
        element.classList.remove('cursorChangetypeContactLink');
    });
});

document.querySelectorAll('.back').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursorChangeback');
        element.classList.add('cursorChangeback');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursorChangeback');
        element.classList.remove('cursorChangeback');
    });
});