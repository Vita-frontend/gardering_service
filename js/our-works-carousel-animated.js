const carousel = document.querySelector('.our-works__carousel-animation');
const carouselCards = carousel.querySelector('.our-works__carousel-cards');
const prevButton = document.querySelector('.our-work__prev-button');
const nextButton = document.querySelector('.our-work__next-button');
const carouselCard = carouselCards.querySelectorAll('.our-works__carousel-card');
let currentIndex = 0;

function updateCarousel() {
    carouselCards.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselCard.length) % carouselCard.length;
    updateCarousel();
});
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselCard.length;
    updateCarousel();
});
