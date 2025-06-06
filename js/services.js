const cards = [
  {
    id: "1",
    img: "img/services-image__landscaping.jpg",
    title: "Hard and Soft Landscaping",
    description:
      "Turfing, artificial grass, raised beds, fences, artificial ponds and more.",
    price: "50",
  },
  {
    id: "2",
    img: "img/services-image__waterring-system.jpg",
    title: "Watering System & Irrigation",
    description:
      "All levels of irrigation installation, maintenance and repair.",
    price: "80",
  },
  {
    id: "3",
    img: "img/services-image__tree-sargery.jpg",
    title: "Tree & Hedge Trimming and Pruning",
    description: "We transform any leafy mess into an immaculate hedge!",
    price: "65",
  },
  {
    id: "4",
    img: "img/services-image__selection.jpg",
    title: "Plant Selection",
    description: "We pick the plants to fulfill your dreams of a blooming lawn or fruity garden.",
    price: "75",
  },
    {
      id: "5",
      img: "img/services-image__tree-sargery.jpg",
      title: "Tree Surgery",
      description: "Tree removal & stump grinding, tree replacements, storm cleanup.",
      price: "105",
    },
    {
      id: "6",
      img: "img/services-image__lawn-care.jpg",
      title: "Mowing & Lawn Care",
      description: "Comprehensive lawn care services to meet the seasonal needs of your property.",
      price: "95",
    },
];

cards.sort(() => Math.random() - 0.5); 

function renderCard(cards) {
  let html = "";
  for (const card of cards) {
    html += `<article class="services__card">
      <img
        class="services__card__image"
        src="${card.img}"
        alt="${card.title}"
      />
      <div class="services__card-info">
        <div>
          <h4 class="services__card-title">${card.title}</h4>
        </div>
        <div class="services__card-text">
          <p class="text">${card.description}</p>
        </div>
        <a class="button-card" href="#">Order Now ($${card.price})</a>
      </div>
    </article>`;
  }
  const servicesContainer = document.querySelector(".services__cards-list");
  servicesContainer.innerHTML = html;
}
renderCard(cards);