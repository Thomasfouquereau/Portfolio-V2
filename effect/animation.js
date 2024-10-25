// Créer une timeline
const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

// Ajouter les animations à la timeline
tl.fromTo(".header-location-container, .header-contact", 
    { opacity: 0, y: -40, willChange: "opacity, transform" }, 
    { opacity: 1, y: 0, duration: 0.5 }
)
.fromTo(".sub-title-top", 
    { opacity: 0, x: -100, y: "-0.4vw", willChange: "opacity, transform" }, 
    { opacity: 1, x: 0, y: "-0.4vw", duration: 1 }
)
.fromTo(".sub-title-bottom", 
    { opacity: 0, x: 100, y: "-0.4vw", willChange: "opacity, transform" }, 
    { opacity: 1, x: 0, y: "-0.4vw", duration: 1 }
)
.fromTo(".card-link-left", 
    { opacity: 0, y: 150, willChange: "opacity, transform" }, 
    { opacity: 1, y: 0, duration: 0.7 }
)
.fromTo(".card-link-right",
    { opacity: 0, y: 150, willChange: "opacity, transform" },
    { opacity: 1, y: 0, duration: 0.7 }
);

// Importer GSAP et ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Sélectionner tous les éléments .projet-card
const projetCards = document.querySelectorAll('.projet-card');
const startValue = window.innerWidth <= 900 ? "top 65%" : "top 70%";
const endValue = window.innerWidth <= 900 ? "top 40%" : "top 30%";

// Créer une animation pour chaque .projet-card
projetCards.forEach(card => {
    gsap.fromTo(card, 
        { opacity: 0.3, x: 250, scale: 0.7, willChange: "opacity, transform" },  // État initial
        { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: card,
                start: startValue,  
                end: endValue,  
                toggleActions: "play reverse play reverse", 
                // markers: true,
                onEnter: () => gsap.to(card, { opacity: 1, x: 0, scale: 1, duration: 1 }),
                onLeave: () => gsap.to(card, { opacity: 0.3, x: 250, scale: 0.7, duration: 1 }),
                onEnterBack: () => gsap.to(card, { opacity: 1, x: 0, scale: 1, duration: 1 }),
                onLeaveBack: () => gsap.to(card, { opacity: 0.3, x: 250, scale: 0.7, duration: 1 })
            }
        }
    );
});