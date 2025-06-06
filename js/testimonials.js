const slides = [
    ` <div class="testimonials__carousel-card"><h4 class="testimonials__title">Amy Illians</h4><p class="testimonials__text">YourGarden is a great company. It's gardeners have been cutting my property for 3 years and there's not a single thing to complain about. The owners of this service really care about their business. All craftsmen are well-equipped and have a sense of beauty.</p></div>`,
    `<div class="testimonials__carousel-card"><h4 class="testimonials__title">Ross Kirshner</h4><p class="testimonials__text">"YourGarden is a great company. It's gardeners have been cutting my property for 3 years and there's not a single thing to complain about.The owners of this service really care about their business. All craftsmen are well-equipped and have a sense of beauty."</p></div>`
];

const slideContainer = document.querySelector(".testimonials-slide");

let currentSlide = 0;
let slideInterval;

function showSlides() {
    slideContainer.innerHTML = slides[currentSlide];
}

showSlides();

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlides();
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}
startSlideShow();

slideContainer.addEventListener('click', () => {
    stopSlideShow(); // Зупиняємо автоматичний перехід
    startSlideShow(); // Перезапускаємо інтервал
});