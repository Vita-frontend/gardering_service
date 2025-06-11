const response = await fetch('api/products.json');
const cards = await response.json();
renderCard(cards, 1);


// cards.sort(() => Math.random() - 0.5); 

function renderCard(cards, rate) {
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
        <a class="button-card" href="#">Order Now (${(card.price * rate).toFixed(2)})</a>
      </div>
    </article>`;
  }
  const servicesContainer = document.querySelector(".services__cards-list");
  servicesContainer.innerHTML = html;
}

let currencies;

document.querySelector('.services__currency').addEventListener('change', convertCurrency);
async function convertCurrency(ev) {
  if (!currencies) {
const response = await fetch('https://api.exchangerate-api.com/v4/latest/usd');
  currencies = await response.json();
  }
  const converTo = ev.target.value;
  const rate = currencies.rates[converTo];
  renderCard(cards, rate);

}