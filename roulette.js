var Roulette = (function() {
	
	/** 
	 * Constructeur
	 * @param selector : selecteur css de l'�l�ment dans lequel afficher les photos
	 * @config : voir la m�thode config
	 */
	var Module = function(selector, config) {
		this._element = document.querySelector(selector);
		this.config(config);
	};
	
	/**
	 * Configure le module
	 * @param config :
	 * 		- urls : tableau contenant les urls des images
	 *		- transition : dur�e d'affichage d'une image en ms (200ms par d�faut)
	 * 		- duration : dur�e de l'animation en ms (2s par d�faut)
	 */
	Module.prototype.config = function(config) {
		//this._urls = Array.isArray(config.urls) ? config.urls : [];
		//this._students = Array.isArray(config.students) ? config.students : [];
		this._transitionDuration = config.transition || 200;
		this._duration = config.duration || 2000;
		
		this._dir = config.dir;
		// Brutal (aucune v�rification + synchrone => utiliser jQuery) 
		var xhr = new XMLHttpRequest();
		xhr.open("GET", this._dir + "/student_list.json", false);
		xhr.send();
	
		this._students = JSON.parse(xhr.responseText);
	};
	
	/**
	 * D�bute l'animation
	 */
	Module.prototype.start = function() {
		var counter = window.parseInt(this._duration / this._transitionDuration);
		this.changeImage();
		var intervalId = window.setInterval(() => {
			(counter-- > 0) ? this.changeImage() : window.clearInterval(intervalId);
		}, this._transitionDuration);
	};
	
	/**
	 * Choisi une image al�atoire 
	 * diff�rente de la pr�c�dente s'il existe 3 images ou plus
	 * et l'affiche
	 */
	Module.prototype.changeImage = function() {
		do {
			var newId = window.parseInt(Math.random() * this._students.length);
		} while(this._currentId === newId || this._students.length < 3);
		
		this._currentId = newId;
		this._element.innerHTML = '';
		
		var chosenStudent = this._students[this._currentId];
		
		var img = document.createElement('img');
		//img.setAttribute('src', this._students[this._currentImageId]);
		img.setAttribute('id', 'photo');
		
		var id = chosenStudent.lastName + "_" + chosenStudent.firstName;
		
		id = id.replace(" /g", "_")
		id = id.replace("�/g", "e")
		id = id.replace("�/g", "e")
		id = id.replace("�/g", "i")
		id = id.replace("�/g", "o")
		
		img.setAttribute('src', this._dir+'/'+id +'.jpg');
		//console.log(this._students[this._currentId]);
		this._element.appendChild(img);
		
		var name = document.createElement('div');
		name.setAttribute('id', 'name');
		name.innerHTML = chosenStudent.firstName + " " + chosenStudent.lastName;
		this._element.appendChild(name);
	};
	
	return Module;
	
})();
