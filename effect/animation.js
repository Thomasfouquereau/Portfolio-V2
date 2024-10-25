
// Créer une timeline
const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

// Ajouter les animations à la timeline
tl.fromTo(".header-location-container, .header-contact", 
    { opacity: 0, y: -40 }, 
    { opacity: 1, y: 0, duration: 0.5 }
)
.fromTo(".sub-title-top", 
    { opacity: 0, x: -100, y: "-0.4vw" }, 
    { opacity: 1, x: 0, y: "-0.4vw", duration: 1 }
)
.fromTo(".sub-title-bottom", 
    { opacity: 0, x: 100, y: "-0.4vw" }, 
    { opacity: 1, x: 0, y: "-0.4vw", duration: 1 }
)
.fromTo(".card-link-left", 
    { opacity: 0, y: 150 }, 
    { opacity: 1, y: 0, duration: 0.7 }
)
.fromTo(".card-link-right",
    { opacity: 0, y: 150 },
    { opacity: 1, y: 0, duration: 0.7 }
);


// Importer GSAP et ScrollTrigger


// // Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Sélectionner tous les éléments .projet-card
const projetCards = document.querySelectorAll('.projet-card');

// Créer une animation pour chaque .projet-card
projetCards.forEach(card => {
    gsap.fromTo(card, 
        { opacity: 0, y: 50 },  // État initial
        { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: card,
                start: "top 80%",  // Déclenche l'animation lorsque le haut de l'élément atteint 80% de la hauteur de la fenêtre
                end: "top 20%",    // Termine l'animation lorsque le haut de l'élément atteint 20% de la hauteur de la fenêtre
                toggleActions: "play reverse play reverse",  // Joue l'animation à l'entrée et la renverse à la sortie
                onEnter: () => gsap.to(card, { opacity: 1, y: 0, duration: 1 }),
                onLeave: () => gsap.to(card, { opacity: 0, y: 50, duration: 1 }),
                onEnterBack: () => gsap.to(card, { opacity: 1, y: 0, duration: 1 }),
                onLeaveBack: () => gsap.to(card, { opacity: 0, y: 50, duration: 1 })
            }
        }
    );
});