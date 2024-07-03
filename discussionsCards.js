import { discussionCardsInfo } from "./storage.js";

const discussionsAddCardForm = document.getElementById("discussions-add-card");
const discussionsAddCardInput = document.getElementById("discussions-add-card-input");
const discussionCardsContainerCards = document.getElementById("discussions-card-container-cards");

const staticCards = discussionCardsInfo.map(card => ({
  ...card,
  username: 'Име Презиме',
  date: '00/00/00, 00:00',
  comments: 5,
  reactions: 84,
}));

let discussionCards = JSON.parse(sessionStorage.getItem("discussionCards")) || [];

const colors = ["#764FF0", "#4B7CF3", "#8F39EC", "#83EAB1"];
let colorIndex = discussionCards.length % colors.length;

// Merge static cards with dynamic cards
const mergedCards = [...discussionCards, ...staticCards];

export function renderDiscussionCards() {
  discussionCardsContainerCards.innerHTML = ''; // Clear existing cards
  mergedCards.forEach((card) => {
    discussionCardsContainerCards.innerHTML += `
      <div
        class="card p-3 h-100 overflow-hidden mb-4 mx-3 px-4 mb-3 rounded-4 border-0 discussions-card-shadow" 
        style="background-color: ${card.color};"
      >
        <p>${card.content}</p>
        <div class="d-flex align-items-center justify-content-between mt-4">
          <div class="d-flex align-items-center">
            <img src="images/Ellipse 31.png" class="w-25 me-4" alt="" />
            <p>${card.username}</p>
          </div>
          <div><p class="text-end opacity-75">${card.date}</p></div>
        </div>
        <input
          type="text"
          class="form-control mb-1 mt-4 rounded-0 bg-transparent border-0 border-bottom opacity-75"
          placeholder="Пиши коментар..."
          disabled
        />
        <div class="mt-4">
          <span class="me-5"><img src="images/+.png" /></span><span class="me-5">${card.comments} Коментари</span>
          <span>${card.reactions} Реакции</span>
        </div>
      </div>`;
  });
}

discussionsAddCardForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = sessionStorage.getItem("username") || "Anonymous";
  const date = new Date().toLocaleString();
  const content = discussionsAddCardInput.value;
  const color = colors[colorIndex % colors.length];
  colorIndex++;

  const newCard = {
    username,
    date,
    content,
    color,
    comments: 0,
    reactions: 0
  };

  discussionCards.unshift(newCard);
  sessionStorage.setItem("discussionCards", JSON.stringify(discussionCards));

  mergedCards.unshift(newCard);
  renderDiscussionCards();

  discussionsAddCardInput.value = ''; // Clear the input
});