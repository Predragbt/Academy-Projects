import { discussionCardsInfo } from "./storage.js";

const discussionsAddCardForm = document.getElementById("discussions-add-card");
const discussionsAddCardInput = document.getElementById(
  "discussions-add-card-input"
);
const discussionCardsContainerCards = document.getElementById(
  "discussions-card-container-cards"
);
const discussionsAddBtn = document.getElementById("discussions-add-btn");
const commentAddedBadge = document.getElementById("comment-added");

const staticCards = discussionCardsInfo.map((card) => ({
  ...card,
  username: "Име Презиме",
  date: "00/00/00, 00:00",
  comments: 5,
  reactions: 84,
}));

let discussionCards =
  JSON.parse(sessionStorage.getItem("discussionCards")) || [];

const colors = ["#764FF0", "#4B7CF3", "#8F39EC", "#83EAB1"];
let colorIndex = discussionCards.length % colors.length;

// Merge static cards with dynamic cards
let mergedCards = [...discussionCards, ...staticCards];
let cardsDisplayed = 0;
const cardsPerLoad = 8;

const scrollToBottom = () => {
  const offset = 310; // Adjust this value as needed
  window.scrollTo({
    top: document.documentElement.scrollHeight - window.innerHeight - offset,
    behavior: "smooth",
  });
};

export function renderDiscussionCards() {
  const username = sessionStorage.getItem("username");

  const cardsToShow = mergedCards.slice(
    cardsDisplayed,
    cardsDisplayed + cardsPerLoad
  );
  cardsToShow.forEach((card) => {
    discussionCardsContainerCards.innerHTML += `
      <div
        class="card p-3 h-100 overflow-hidden mb-4 mx-3 px-4 mb-3 rounded-4 border-0 discussions-card-shadow" 
        style="background-color: ${card.color};"
      >
        <p>${card.content}</p>
        <div class="d-flex align-items-center justify-content-between mt-4">
          <div class="d-flex align-items-center">
            <img src="images/Ellipse 31.png" class="me-4 discussions-card-profile-img" alt="Profile image" />
            <p class="fw-bold">${card.username}</p>
          </div>
          <div><p class="text-end opacity-75">${card.date}</p></div>
        </div>
        <input
          type="text"
          class="form-control mb-1 mt-4 rounded-0 bg-transparent border-0 border-bottom border-dark opacity-75"
          placeholder="Пиши коментар..."
          disabled
        />
        <div class="mt-4">
          <span class="me-5"><img src="images/+.png" /></span><span class="me-5">${card.comments} Коментари</span>
          <span>${card.reactions} Реакции</span>
        </div>
      </div>`;
  });

  cardsDisplayed += cardsPerLoad;

  // Hide the button if there are no more cards to show
  if (cardsDisplayed >= mergedCards.length) {
    discussionsAddBtn.classList.add("d-none");
  } else {
    discussionsAddBtn.classList.remove("d-none");
  }
}

export function initializeDiscussions() {
  discussionsAddCardForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = sessionStorage.getItem("username") || "Anonymous";

    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    const date = new Date().toLocaleString("mk-MK", options).replace(",", ",");

    const content = discussionsAddCardInput.value;
    const color = colors[colorIndex % colors.length];
    colorIndex++;

    const newCard = {
      username,
      date,
      content,
      color,
      comments: 0,
      reactions: 0,
    };

    discussionCards.unshift(newCard);
    sessionStorage.setItem("discussionCards", JSON.stringify(discussionCards));

    mergedCards.unshift(newCard);
    cardsDisplayed = 0; // Reset the displayed count to include the new card
    discussionsAddBtn.style.display = "flex";
    discussionCardsContainerCards.innerHTML = "";
    renderDiscussionCards();

    discussionsAddCardInput.value = "";

    // Update the badge visibility
    updateCommentBadgeVisibility();
  });

  // Add click event listener to the "load more" button
  discussionsAddBtn.addEventListener("click", () => {
    renderDiscussionCards();
    scrollToBottom();
  });

  document.addEventListener("DOMContentLoaded", () => {
    renderDiscussionCards();
    updateCommentBadgeVisibility();
  });
}

export function resetDisplayedCards() {
  cardsDisplayed = 0; // Reset the displayed count
  discussionCardsContainerCards.innerHTML = "";
  mergedCards = [...discussionCards, ...staticCards];
}

export function updateCommentBadgeVisibility() {
  const username = sessionStorage.getItem("username");
  const userDiscussionCards = discussionCards.filter(
    (card) => card.username === username
  );
  const hasUserCards = userDiscussionCards.length > 0;
  const commentAddedBadge = document.getElementById("comment-added");

  if (hasUserCards) {
    commentAddedBadge.classList.remove("d-none");
  } else {
    commentAddedBadge.classList.add("d-none");
  }
}
