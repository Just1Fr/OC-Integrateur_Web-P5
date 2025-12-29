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


function setSlide(slideId) {
	// console.log("set slide " + slideId);
	setSlideImage(slideId); // Change image
	setSlideText(slideId); // Change text
	setSlideDot(slideId); // Update selected dot
}

function setSlideImage(slideId) {
	const bannerImage = document.querySelector(".banner-img");
	bannerImage.src = "./assets/images/slideshow/" + slides[slideId-1].image;
}

function setSlideText(slideId) {
	const bannerText = document.querySelector("#banner > p");
	bannerText.innerHTML = slides[slideId-1].tagLine;
}

function setSlideDot(slideId) {
	document.querySelector(".dot_selected").classList.remove("dot_selected");
	document.querySelector(".dot" + slideId).classList.add("dot_selected");
}


// Add one dot per slide
const dotsContainer = document.querySelector(".dots");
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.classList = "dot dot" + (i+1);
	dotsContainer.appendChild(dot);
}
// Start with first slide
document.querySelector(".dot1").classList.add("dot_selected");
let currentSlideId = 1;


// Click on left arrow
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function () {
	// console.log("click fleche gauche");
	// Go to the next slide
	if (currentSlideId > 1) {
		currentSlideId--;
		setSlide(currentSlideId);
	}
	// Jump to the last slide
	else {
		currentSlideId = slides.length;
		setSlide(currentSlideId);
	}
});


// Click on right arrow
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function () {
	// console.log("click fleche droite");
	// Go to the previous slide
	if (currentSlideId < slides.length) {
		currentSlideId++;
		setSlide(currentSlideId);
	}
	// Jump back to the first slide
	else {
		currentSlideId = 1;
		setSlide(currentSlideId);
	}
});