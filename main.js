function init() {
	
	// r�cup�ration de la promo depuis l'interface
	var promo = document.getElementById("promo").value;
	console.log("Using promo " + promo)
	
	// Cr�ation d'une nouvelle roulette
	var roulette = new Roulette('#roulette', {dir: promo, duration: 2000, transition: 60});
	
	// Lorsque l'on clique sur le bouton, lancer l'animation
	document
		.getElementById('launch')
		.addEventListener('click', event => roulette.start());
	
};
