(function() {
    const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

    tl.fromTo(".header-location-container", 
        { opacity: 0, y: -40, willChange: "opacity, transform" }, 
        { opacity: 1, y: 0, duration: 0.5 }
    )
    .fromTo(".header-contact", 
        { opacity: 0, y: -40, willChange: "opacity, transform" }, 
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
    )
    .fromTo(".sub-title-top", 
        { opacity: 0, x: -100, y: "-0.4vw", willChange: "opacity, transform" }, 
        { opacity: 1, x: 0, y: "-0.4vw", duration: 1 }
    )
    .fromTo(".card-link-left", 
        { opacity: 0, y: 150, willChange: "opacity, transform" }, 
        { opacity: 1, y: 0, duration: 0.7 },
        "-=1" // Début en même temps que l'animation de .sub-title-top
    )
    .fromTo(".sub-title-bottom", 
        { opacity: 0, x: 100, y: "-0.4vw", willChange: "opacity, transform" }, 
        { opacity: 1, x: 0, y: "-0.4vw", duration: 1 }
    )
    .fromTo(".card-link-right",
        { opacity: 0, y: 150, willChange: "opacity, transform" },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=1"
    );

    gsap.registerPlugin(ScrollTrigger);

    const projetCards = document.querySelectorAll('.projet-card');
    const startValue = window.innerWidth <= 900 ? "top 55%" : "top 70%";
    const endValue = window.innerWidth <= 900 ? "top 35%" : "top 30%";
    const startAnimation = window.innerWidth <= 900 ? "100" : "250";

    // Créer une animation pour chaque .projet-card
    projetCards.forEach(card => {
        gsap.fromTo(card, 
            { opacity: 0.3, x: startAnimation, scale: 0.7, willChange: "opacity, transform" },  // État initial
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
                    onLeave: () => gsap.to(card, { opacity: 0.3, x: startAnimation, scale: 0.7, duration: 1 }),
                    onEnterBack: () => gsap.to(card, { opacity: 1, x: 0, scale: 1, duration: 1 }),
                    onLeaveBack: () => gsap.to(card, { opacity: 0.3, x: startAnimation, scale: 0.7, duration: 1 })
                }
            }
        );
    });
})();