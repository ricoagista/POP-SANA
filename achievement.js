function angka_count() {
  pog.play();
            angka = Number(localStorage.getItem("angka"));
            console.log(angka);
            angka += 1;
            localStorage.setItem("angka",angka);             
            document.getElementById("score").innerHTML = angka;

if(angka === 1) {
	Toastify({
className:"toastify-default",
  text: "Hello new popers",
  duration: 4000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
	}
if(angka === 10) {
	achievement.play();
	Toastify({
		avatar:"trophy/bronze.png",
className:"toastify-default",
  text: "Newbie",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
}).showToast();
	}
if(angka === 50) {
	achievement.play();
	Toastify({
		avatar:"trophy/bronze.png",
className:"toastify-default",
  text: "Starter",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
}).showToast();
	}
	if(angka === 200) {
	achievement.play();
	Toastify({
		avatar:"trophy/bronze.png",
className:"toastify-default",
  text: "Tap tap tap",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
	}
if(angka === 500) {
	achievement.play();
	Toastify({
		avatar:"trophy/bronze.png",
className:"toastify-default",
  text: "ur fast...",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
	}
if(angka === 500) {
	 	var rick = new Audio('rickroll.mp3');
            	rick.play();
	Toastify({
className:"toastify-rickroll",
  text: "Play rick roll",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
  rick.currentTime = 0;
	}
if(angka === 1100) {
	achievement.play();
	Toastify({
		avatar:"trophy/bronze.png",
className:"toastify-default",
  text: "Be careful",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
	}
if(angka === 5000) {
	achievement.play();
	Toastify({
		avatar:"trophy/silver.png",
className:"toastify-default",
  text: "That sick",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
	}
if(angka === 7000) {
	achievement.play();
	Toastify({
		avatar:"trophy/silver.png",
className:"toastify-default",
  text: "Screen Destroyer",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
	}
if(angka === 7500) {
	achievement.play();
	Toastify({
		avatar:"trophy/silver.png",
className:"toastify-long-text",
  text: "I think you love this game",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
	}
if(angka === 10000) {
	achievement.play();
	Toastify({
		avatar:"trophy/gold.png",
className:"toastify-default",
  text: "The Great Clicker",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
	}
if(angka === 12000) {
	achievement.play();
	Toastify({
		avatar:"trophy/gold.png",
className:"toastify-default",
  text: "holy sheesssh",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
	}
if(angka === 16000) {
	achievement.play();
	Toastify({
		avatar:"trophy/gold.png",
className:"toastify-default",
  text: "Ok gamer",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
	}
if(angka === 20000) {
	achievement.play();
	Toastify({
		avatar:"trophy/gold.png",
className:"toastify-default",
  text: "POP POP POP",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
	}
if(angka === 50000) {
	achievement.play();
	Toastify({
		avatar:"trophy/platinum.png",
className:"toastify-default",
  text: "Still playing?",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
	}
if(angka === 100000) {
	achievement.play();
	Toastify({
		avatar:"trophy/platinum.png",
className:"toastify-default",
  text: "Aw man...",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
	}
if(angka === 500000) {
	achievement.play();
	Toastify({
		avatar:"trophy/platinum.png",
className:"toastify-default",
  text: "Super!!!",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
	}
if(angka === 1000001) {
	achievement.play();
	Toastify({
		avatar:"trophy/platinum.png",
className:"toastify-long-text",
  text: "Congrats, u r milioner",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
	}
if(angka === 500000) {
	achievement.play();
	Toastify({
		
className:"toastify-default",
  text: "No PowerUp",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
	}
if(angka === 10000000) {
	achievement.play();
	Toastify({
		avatar:"trophy/platinum.png",
className:"toastify-default",
  text: "this is the last",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
	}
	if(angka === 50000000) {
	achievement.play();
	Toastify({
		avatar:"trophy/platinum.png",
className:"toastify-default",
  text: "seriously man",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
	}
if(angka >= 999999999) {
	achievement.play();
	Toastify({
		avatar:"trophy/platinum.png",
className:"toastify-default",
  text: "POPERS!",
  duration: 400,
  gravity: "bottom", 
  position: "center", 
}).showToast();
	}
} 