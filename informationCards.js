import { informationCardsInfo } from "./storage.js";

const logOutBtn = document.getElementById("log-out-btn");
const logedIn = sessionStorage.getItem("logedIn");

const username = sessionStorage.getItem("username");

const users = JSON.parse(sessionStorage.getItem("users")) || [];
const currentUser = users.find((user) => user.username === username);

export function renderInformationCards() {
  const informationCardsContainer = document.querySelector(
    "#information-cards-container"
  );

  if (!informationCardsContainer) {
    console.error("Container not found");
    return;
  }

  // Clear existing content to prevent duplication
  informationCardsContainer.innerHTML = "";

  informationCardsInfo.forEach((card) => {
    const modalId = `exampleModal${card.id}`; // Unique modal ID for each card

    // Append card HTML
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

    // Create modal HTML
    const modalHTML = `
    <div id="${modalId}" class="modal">
      <div class="modal-content d-flex flex-column-reverse flex-md-row">
         <div class="overflow-y-scroll overflow-visible me-md-5 mt-4 mt-md-0">
            <div><h1 class="fw-bold mb-4">${card.title}</h1></div>  
            <p class="mb-4">Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга. И не само што овој модел опстанал пет векови туку почнал да се користи и во електронските медиуми, кој се уште не е променет.</p>
            <p class="opacity-50 mb-4">Објавено на 05/28/23</p>

            <div class="d-flex flex-column p-3 border rounded-4 mb-3 d-none modal-input-container"">
              <input type="text" class="form-control border-0" placeholder="Внеси коментар" id="modal-comment-input-${card.id}">
              <label for="modal-comment-input-${card.id}" class="form-label pt-3 ps-2 border-top"><img src="images/Ellipse 25.png" alt="image" 
              class="img-fluid me-3" /><span>${currentUser ? currentUser.username : ""}</span></label>
            </div>

           <div class="d-flex flex-column-reverse" id="modal-comments-container-${card.id}">
            <div class="d-flex flex-column p-3 border rounded-4">
              <div class="mb-3">
                <p>
                  Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга.
                </p>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <img src="images/Ellipse 25.png" alt="image" class="img-fluid me-3" />
                  <p class="fw-bold m-0 p-0">Име Презиме</p>
                </div>
                <p class="opacity-50">00/00/00, 00:00</p>
              </div>
            </div>

            <div class="d-flex flex-column p-3 border rounded-4 mb-3">
              <div class="mb-3">
                <p>
                  Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга.
                </p>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <img src="images/Ellipse 25.png" alt="image" class="img-fluid me-3" />
                  <p class="fw-bold m-0 p-0">Име Презиме</p>
                </div>
                <p class="opacity-50">00/00/00, 00:00</p>
              </div>
            </div>

            <div class="d-flex flex-column p-3 border rounded-4 mb-3">
              <div class="mb-3">
                <p>
                  Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга.
                </p>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <img src="images/Ellipse 25.png" alt="image" class="img-fluid me-3" />
                  <p class="fw-bold m-0 p-0">Име Презиме</p>
                </div>
                <p class="opacity-50">00/00/00, 00:00</p>
              </div>
            </div>
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

    // Append modal HTML to body
    document.body.insertAdjacentHTML("beforeend", modalHTML);

    // Call the function to handle comments
    addCommentsOnModal(card.id);
  });

  // Add event listeners to open and close modals
  document.querySelectorAll(".custom-card").forEach((card) => {
    card.addEventListener("click", () => {
      const cardId = card.getAttribute("data-card-id");
      const modal = document.getElementById(`exampleModal${cardId}`);
      modal.style.display = "block";
      updateCommentInputVisibility(); // Ensure visibility is updated on modal open
    });
  });

  // Close the modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";

      // Pause the video when the modal is closed
      const video = event.target.querySelector("video");
      if (video) {
        video.pause();
      }
    }
  });

  // Add event listeners to play the video on button click
  document.querySelectorAll(".btn-video").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const container = event.target.closest(".video-container");
      playVideo(container);
    });
  });

  // Add event listeners to handle video end
  document.querySelectorAll(".video-element").forEach((video) => {
    video.addEventListener("ended", (event) => {
      const container = event.target.closest(".video-container");
      showImage(container);
    });
  });
}

// Function to play the video
function playVideo(container) {
  const img = container.querySelector("img");
  const videoContainer = container.querySelector(".video-element-container");
  const video = videoContainer.querySelector("video");

  img.classList.add("d-none");
  videoContainer.classList.remove("d-none");
  video.play();
}

// Function to show the image when the video ends
function showImage(container) {
  const img = container.querySelector("img");
  const videoContainer = container.querySelector(".video-element-container");
  const video = videoContainer.querySelector("video");

  img.classList.remove("d-none");
  videoContainer.classList.add("d-none");
  video.pause();
}

// Function to add comments on the modal
function addCommentsOnModal(idForComments) {
  const commentsContainer = document.querySelector(
    `#modal-comments-container-${idForComments}`
  );
  const inputForComments = document.querySelector(
    `#modal-comment-input-${idForComments}`
  );

  // Remove any existing event listeners to prevent duplication
  const newInputForComments = inputForComments.cloneNode(true);
  inputForComments.parentNode.replaceChild(newInputForComments, inputForComments);

  newInputForComments.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && newInputForComments.value.trim() !== "") {
      commentsContainer.innerHTML += `
        <div class="d-flex flex-column p-3 border rounded-4 mb-3">
          <div class="mb-3">
            <p>${newInputForComments.value}</p>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex flex-row align-items-center">
              <img src="images/Ellipse 25.png" alt="image" class="img-fluid me-3" />
              <p class="fw-bold m-0 p-0">${sessionStorage.getItem("username")}</p>
            </div>
            <p class="opacity-50">${new Date().toLocaleString()}</p>
          </div>
        </div> `;
      newInputForComments.value = ""; // Clear the input after adding the comment
    }
  });
}

// Function to update comment input visibility based on login status
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
