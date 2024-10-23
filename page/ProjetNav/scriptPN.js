document.addEventListener("DOMContentLoaded", function() {
    const projetCardTitles = document.querySelectorAll('.projet-card_title');

    projetCardTitles.forEach(projetCardTitle => {

        const hoverInAnimation = gsap.to(projetCardTitle, {
            y: -50,
            textShadow: "0 1px 0 var(--couleur-secondaire-animation), 0 2px 0 var(--couleur-secondaire-animation), 0 3px 0 var(--couleur-secondaire-animation), 0 4px 0 var(--couleur-secondaire-animation), 0 5px 0 var(--couleur-secondaire-animation), 0 6px 0 var(--couleur-secondaire-animation), 0 7px 0 var(--couleur-secondaire-animation), 0 8px 0 var(--couleur-secondaire-animation), 0 9px 0 var(--couleur-secondaire-animation), 0 50px 30px rgba(0, 0, 0, 0.3)",
            duration: 0.5,
            ease: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            paused: true
        });


        const hoverOutAnimation = gsap.to(projetCardTitle, {
            y: 0,
            textShadow: "none",
            duration: 0.5,
            ease: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            paused: true
        });


        projetCardTitle.addEventListener('mouseenter', () => {
            hoverOutAnimation.pause();
            hoverInAnimation.restart();
        });

        projetCardTitle.addEventListener('mouseleave', () => {
            hoverInAnimation.pause();
            hoverOutAnimation.restart();
        });
    });
});