const slides = [
  `<div class="our-works__card-list-card"><img class="our-work__image" src="img/our-work__image1.jpg" alt="man and tree"><h3 class="our-work__card-title">Trees trimming</h3></div>`,
  `<div class="our-works__card-list-card"><img class="our-work__image" src="img/our-work__image2.jpg" alt="back of the garden"><h3 class="our-work__card-title">Hedges cutting back</h3></div>`,
  `<div class="our-works__card-list-card"><img class="our-work__image" src="img/our-work__image3.jpg" alt="palm"><h3 class="our-work__card-title">Palm tree removal</h3></div>`,
  `<div class="our-works__card-list-card"><img class="our-work__image" src="img/our-work__image4.jpg" alt="pink roses"><h3 class="our-work__card-title">Roses pruning</h3></div>`,
  `<div class="our-works__card-list-card"><img class="our-work__image" src="img/our-work__image5.jpg" alt="garden"><h3 class="our-work__card-title">Trimming to industry legal standards</h3></div>`,
  `<div class="our-works__card-list-card"><img class="our-work__image" src="img/our-work__image6.jpg" alt="lawn-mover"><h3 class="our-work__card-title">Lawn mowing, leaf sweeping</h3></div>`,
];

const slideContainer = document.querySelector(".our-works-carousel__slide");

let currentSlide = 0;

function showSlides() {
  slideContainer.innerHTML = slides[currentSlide];
}

function nextSlide() {
  currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  showSlides();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlides();
}

document.getElementById("next-button").addEventListener("click", nextSlide);
document.getElementById("prev-button").addEventListener("click", prevSlide);


showSlides(); 

// setInterval(nextSlide, 2000);

