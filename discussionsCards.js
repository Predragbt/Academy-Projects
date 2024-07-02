import { discussionCardsInfo } from "./storage.js";

const discussionCardsContainer = document.querySelector(
  ".discussions-card-container "
);

export function renderDiscussionCards() {
  discussionCardsInfo.forEach((card) => {
    discussionCardsContainer.innerHTML += `<div>
        <div
          class="card p-3 h-100 overflow-hidden mb-4 mx-3 px-4 mb-3 rounded-4 border-0 discussions-card-shadow" 
          style="background-color: ${card.color};"
        >
          <p>
            ${card.content}
          </p>
          <div class="d-flex align-items-center justify-content-between mt-4">
            <div class="d-flex align-items-center">
              <img src="images/Ellipse 31.png" class="w-25 me-4" alt="" />
              <p>Име Презиме</p>
            </div>
            <div><p class="text-end opacity-75">00/00/00, 00:00</p></div>
          </div>

          <input
            type="text"
            class="form-control mb-1 mt-4 rounded-0 bg-transparent border-0 border-bottom opacity-75"
            placeholder="Пиши коментар..."
            disabled
          />

          <div class="mt-4">
            <span class="me-5"><img src="images/+.png" /></span><span class="me-5">5 Коментари</span
            ><span>84 Реакции</span>
          </div>
        </div>
        </div>`;
  });
}
