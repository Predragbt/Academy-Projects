import { informationCardsInfo } from "./storage.js";

export function renderInformationCards() {
  const informationCardsContainer = document.querySelector(
    "#information-cards-container"
  );

  if (!informationCardsContainer) {
    console.error("Container not found");
    return;
  }

  informationCardsInfo.forEach((card) => {
    informationCardsContainer.innerHTML += `<div class="custom-card text-bg-dark mb-5">
        <img src="${card.image}" class="custom-card-img h-100 w-100" alt="Card image" />
        <div class="custom-card-img-overlay custom-overlay-content py-3 px-4">
          <h5 class="custom-card-title fw-bold mb-3">${card.title}</h5>
          <p class="custom-card-text mb-1 fs-6">
          ${card.content}
          </p>
          <p class="custom-card-text custom-card-text-date opacity-50 "><small>${card.date}</small></p>
        </div>
      </div>`;
  });
}
