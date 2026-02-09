// Animation de défilement fluide pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Message dans la console pour prouver le chargement du script
console.log("Portfolio chargé avec succès. Prêt pour la présentation.");