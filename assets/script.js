const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Add one dot per slide
const dotsContainer = document.querySelector(".dots");
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.classList = "dot dot" + (i+1);
	if (i === 0) {
		dot.classList.add("dot_selected")
	}
	dotsContainer.appendChild(dot)
}

// Detect click on left arrow
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function () {
    console.log("click fleche gauche")
});

// Detect click on right arrow
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function () {
    console.log("click fleche droite")
});