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
	setSlideDot(slideId); // Update dot
}

function setSlideImage(slideId) {
	const img = document.querySelector("img.banner-img");
	// Set new image src and alt
	img.src = "./assets/images/slideshow/" + slides[slideId-1].image;
	img.alt = slides[slideId-1].tagLine.replaceAll(/<\/?span>/g, ""); // Remove "<span>" and "</span>" for alt
}

function setSlideText(slideId) {
	const bannerText = document.querySelector("#banner > p");
	// Replace previous text
	bannerText.innerHTML = slides[slideId-1].tagLine;
}

function setSlideDot(slideId) {
	// Remove .dot_selected for dot of previous slide
	document.querySelector(".dot_selected").classList.remove("dot_selected");
	// Add .dot_selected for dot of current slide
	document.querySelector(".dot" + slideId).classList.add("dot_selected");
}

function initSlide(slideId) {
	initSlideImage(slideId);
	setSlideText(slideId);
	initDots(slideId);
}

function initDots(slideId) {
	const dotsContainer = document.querySelector(".dots");
	// Remove previously generated dots
	dotsContainer.innerHTML = "";
	// Add one dot per slide
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList = "dot dot" + (i+1); // Add .dot and .dot<id>
		dotsContainer.appendChild(dot);
	}
	// Add .dot_selected for dot of current slide
	document.querySelector(".dot" + slideId).classList.add("dot_selected");
}

function initSlideImage(slideId) {
	const bannerImage = document.querySelector("div.banner-img");
	// Remove previously generated image
	bannerImage.innerHTML = "";
	// Add image element
	const img = document.createElement("img");
	img.classList = "banner-img";
	bannerImage.appendChild(img);
	// Add image of current slide
	setSlideImage(slideId);
}


// Start with first slide
let currentSlideId = 1;
initSlide(currentSlideId);


// Click on left arrow
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function () {
	// console.log("click fleche gauche");
	// Go to next slide
	if (currentSlideId > 1) {
		currentSlideId--;
		setSlide(currentSlideId);
	}
	// Jump to last slide
	else {
		currentSlideId = slides.length;
		setSlide(currentSlideId);
	}
});

// Click on right arrow
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function () {
	// console.log("click fleche droite");
	// Go to previous slide
	if (currentSlideId < slides.length) {
		currentSlideId++;
		setSlide(currentSlideId);
	}
	// Jump back to first slide
	else {
		currentSlideId = 1;
		setSlide(currentSlideId);
	}
});