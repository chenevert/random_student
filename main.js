(function() {
	
	// À paramétrer depuis l'interface
	var promo = "17_18_isen3"
	
	// Génération des urls des images
	//var data = ['1919023', '1919894', '1919942', '2665593', '2665663', '2665868']
	//	.map(imageName => './img/'+imageName+'.jpg');
	
	// Création d'une nouvelle roulette
	var roulette = new Roulette('#roulette', {dir: promo, duration: 2000, transition: 60});
	
	// Lorsque l'on click sur le bouton, lancer l'animation
	document
		.getElementById('launch')
		.addEventListener('click', event => roulette.start());
	
})();
