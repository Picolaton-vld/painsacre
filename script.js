document.addEventListener("DOMContentLoaded", function() {
    const bouton = document.getElementById("devenirMembre");
    const message = document.getElementById("messageAdhesion");
    const compteur = document.getElementById("nombreAdherents");

    // Charger le compteur depuis le fichier data.json
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            compteur.textContent = data.totalAdherents || 0;
        })
        .catch(() => {
            compteur.textContent = localStorage.getItem('localCount') || 0;
        });

    // Vérifier si déjà membre
    if (localStorage.getItem('estMembre')) {
        bouton.style.display = 'none';
        message.style.display = 'block';
        message.textContent = "🙏 Vous êtes déjà membre !";
    }

    // Gestion du clic
    bouton.addEventListener('click', function() {
        // Mise à jour locale
        localStorage.setItem('estMembre', 'true');
        const nouveauTotal = parseInt(compteur.textContent) + 1;
        localStorage.setItem('localCount', nouveauTotal);
        
        // Affichage
        bouton.style.display = 'none';
        message 