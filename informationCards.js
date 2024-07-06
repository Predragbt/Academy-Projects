import { informationCardsInfo } from "./storage.js";

const logOutBtn = document.getElementById("log-out-btn");
const logedIn = sessionStorage.getItem("logedIn");
const username = sessionStorage.getItem("username");

const users = JSON.parse(sessionStorage.getItem("users")) || [];
const currentUser = users.find((user) => user.username === username);

// Define static filler comments
const staticComments = [
  {
    text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга.",
    username: "Име Презиме",
    timestamp: "00/00/00, 00:00",
  },
  {
    text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга.",
    username: "Име Презиме",
    timestamp: "00/00/00, 00:00",
  },
  {
    text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга.",
    username: "Име Презиме",
    timestamp: "00/00/00, 00:00",
  },
];

const filterButtons = document.querySelectorAll(
  ".information-filter-buttons-active"
);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("opacity-50");
    saveUserFilters();
    filterCards();
  });
});

function saveUserFilters() {
  const activeFilters = Array.from(filterButtons)
    .filter((button) => !button.classList.contains("opacity-50"))
    .map((button) => button.id);

  const username = sessionStorage.getItem("username");

  if (username) {
    sessionStorage.setItem(
      `filters-${username}`,
      JSON.stringify(activeFilters)
    );
  }
}

export function loadUserFilters(username) {
  const savedFilters =
    JSON.parse(sessionStorage.getItem(`filters-${username}`)) || [];
  filterButtons.forEach((button) => {
    if (savedFilters.includes(button.id)) {
      button.classList.remove("opacity-50");
    } else {
      button.classList.add("opacity-50");
    }
  });
  filterCards();
}

export function clearFilters() {
  filterButtons.forEach((button) => {
    button.classList.add("opacity-50");
  });
}

function filterCards() {
  const activeFilters = Array.from(filterButtons)
    .filter((button) => !button.classList.contains("opacity-50"))
    .map((button) => button.id);

  if (activeFilters.length === 0) {
    renderInformationCards(informationCardsInfo);
  } else {
    const filteredCards = informationCardsInfo.filter((card) =>
      activeFilters.includes(card.category)
    );

    renderInformationCards(filteredCards);
  }
}

export function renderInformationCards(cards = informationCardsInfo) {
  const informationCardsContainer = document.querySelector(
    "#information-cards-container"
  );

  if (!informationCardsContainer) {
    console.error("Container not found");
    return;
  }

  informationCardsContainer.innerHTML = "";

  cards.forEach((card) => {
    const modalId = `exampleModal${card.id}`;

    // Check if the modal already exists
    let modal = document.getElementById(modalId);
    if (modal) {
      modal.remove(); // Remove existing modal to prevent duplication
    }

    informationCardsContainer.innerHTML += `
      <div class="custom-card text-bg-dark mb-5" data-card-id="${card.id}">
        <img src="${card.image}" class="custom-card-img h-100 w-100" alt="Card image" />
        <div class="custom-card-img-overlay custom-overlay-content py-3 px-4">
          <h5 class="custom-card-title fw-bold mb-3">${card.title}</h5>
          <p class="custom-card-text mb-1 fs-6">${card.content}</p>
          <p class="custom-card-text custom-card-text-date opacity-50"><small>${card.date}</small></p>
        </div>
      </div>
    `;

    const modalHTML = `
      <div id="${modalId}" class="modal" style="z-index: 11;">
        <div class="modal-content d-flex flex-column-reverse flex-md-row">
          <div class="overflow-y-scroll overflow-visible me-md-5 mt-4 mt-md-0">
            <div><h1 class="fw-bold mb-4">${card.title}</h1></div>  
            <p class="mb-4">Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга. И не само што овој модел опстанал пет векови туку почнал да се користи и во електронските медиуми, кој се уште не е променет.</p>
            <p class="opacity-50 mb-4">Објавено на 05/28/23</p>

            <div class="d-flex flex-column p-3 border rounded-4 mb-3 d-none modal-input-container">
              <input type="text" class="form-control border-0" placeholder="Внеси коментар" id="modal-comment-input-${
                card.id
              }">
              <label for="modal-comment-input-${
                card.id
              }" class="form-label pt-3 ps-2 border-top">
                <img src="images/Ellipse 25.png" alt="image" class="img-fluid me-3" /><span>${
                  currentUser ? currentUser.username : ""
                }</span>
              </label>
            </div>

            <div class="d-flex flex-column-reverse" id="modal-comments-container-${
              card.id
            }">
              <!-- Comments will be dynamically loaded here -->
            </div>
          </div>

          <div class="w-100 h-100 position-relative video-container">
            <img src="${card.image}" alt="image" class="h-100 w-100" />
            <button class="btn-video">
              <img src="images/play icon.png" alt="Play video">
            </button>
            <div class="video-element-container position-absolute top-0 start-0 w-100 h-100 d-none">
              <video controls class="w-100 h-100 video-element">
                <source src="video/Safe web browsing.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);

    loadComments(card.id);
    addCommentsOnModal(card.id);
  });

  document.querySelectorAll(".custom-card").forEach((card) => {
    card.addEventListener("click", () => {
      const cardId = card.getAttribute("data-card-id");
      const modal = document.getElementById(`exampleModal${cardId}`);
      modal.style.display = "block";
      updateCommentInputVisibility();
    });
  });

  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
      const video = event.target.querySelector("video");
      if (video) {
        video.pause();
      }
    }
  });

  document.querySelectorAll(".btn-video").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      incrementVideoClickCount(); // Increment the count when video is clicked
      const container = event.target.closest(".video-container");
      playVideo(container);
    });
  });

  document.querySelectorAll(".video-element").forEach((video) => {
    video.addEventListener("ended", (event) => {
      const container = event.target.closest(".video-container");
      showImage(container);
    });
  });
}

function playVideo(container) {
  const img = container.querySelector("img");
  const videoContainer = container.querySelector(".video-element-container");
  const video = videoContainer.querySelector("video");

  img.classList.add("d-none");
  videoContainer.classList.remove("d-none");
  video.play();
}

function showImage(container) {
  const img = container.querySelector("img");
  const videoContainer = container.querySelector(".video-element-container");
  const video = videoContainer.querySelector("video");

  img.classList.remove("d-none");
  videoContainer.classList.add("d-none");
  video.pause();
}

function addCommentsOnModal(idForComments) {
  const commentsContainer = document.querySelector(
    `#modal-comments-container-${idForComments}`
  );
  const inputForComments = document.querySelector(
    `#modal-comment-input-${idForComments}`
  );

  const newInputForComments = inputForComments.cloneNode(true);
  inputForComments.parentNode.replaceChild(
    newInputForComments,
    inputForComments
  );

  newInputForComments.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && newInputForComments.value.trim() !== "") {
      const comment = {
        text: newInputForComments.value,
        username: sessionStorage.getItem("username"),
        timestamp: new Date().toLocaleString(),
      };

      const comments =
        JSON.parse(sessionStorage.getItem(`comments-${idForComments}`)) || [];
      comments.push(comment);
      sessionStorage.setItem(
        `comments-${idForComments}`,
        JSON.stringify(comments)
      );

      commentsContainer.innerHTML += createCommentHTML(comment);
      newInputForComments.value = "";
    }
  });
}

function createCommentHTML(comment) {
  return `
    <div class="d-flex flex-column p-3 border rounded-4 mb-3">
      <div class="mb-3">
        <p>${comment.text}</p>
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex flex-row align-items-center">
          <img src="images/Ellipse 25.png" alt="image" class="img-fluid me-3" />
          <p class="fw-bold m-0 p-0">${comment.username}</p>
        </div>
        <p class="opacity-50">${comment.timestamp}</p>
      </div>
    </div>
  `;
}

function loadComments(idForComments) {
  const commentsContainer = document.querySelector(
    `#modal-comments-container-${idForComments}`
  );

  // Clear existing comments to prevent duplication
  commentsContainer.innerHTML = "";

  const dynamicComments =
    JSON.parse(sessionStorage.getItem(`comments-${idForComments}`)) || [];
  const allComments = [...staticComments, ...dynamicComments];

  allComments.forEach((comment) => {
    commentsContainer.innerHTML += createCommentHTML(comment);
  });
}

function updateCommentInputVisibility() {
  const logedIn = sessionStorage.getItem("logedIn");
  const currentUsername = sessionStorage.getItem("username");

  document.querySelectorAll(".modal-input-container").forEach((container) => {
    if (logedIn === "true") {
      container.classList.remove("d-none");
      const label = container.querySelector(".form-label span");
      if (label) {
        label.textContent = currentUsername;
      }
    } else {
      container.classList.add("d-none");
    }
  });
}

function incrementVideoClickCount() {
  const username = sessionStorage.getItem("username");
  const videoCountKey = `videosClicked-${username}`;
  let videosClicked = JSON.parse(sessionStorage.getItem(videoCountKey)) || 0;
  videosClicked++;
  sessionStorage.setItem(videoCountKey, JSON.stringify(videosClicked));
  updateBadgeVisibility(); // Update badge visibility after incrementing count
}

function getVideoClickCount(username) {
  const videoCountKey = `videosClicked-${username}`;
  return JSON.parse(sessionStorage.getItem(videoCountKey)) || 0;
}

function updateBadgeVisibility() {
  const username = sessionStorage.getItem("username");
  const videosClicked = getVideoClickCount(username);

  const fiveVideosBadge = document.getElementById("five-videos-clicked");
  const tenVideosBadge = document.getElementById("10-videos-clicked");

  if (videosClicked >= 5) {
    fiveVideosBadge.classList.remove("d-none");
  } else {
    fiveVideosBadge.classList.add("d-none");
  }

  if (videosClicked >= 10) {
    tenVideosBadge.classList.remove("d-none");
  } else {
    tenVideosBadge.classList.add("d-none");
  }
}

export { getVideoClickCount, updateBadgeVisibility };
