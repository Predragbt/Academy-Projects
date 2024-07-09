import { initializeUserSession } from "./storage.js";
import {
  renderDiscussionCards,
  initializeDiscussions,
  resetDisplayedCards,
  updateCommentBadgeVisibility,
} from "./discussionsCards.js";
import { setupVideoHandler } from "./videoHandler.js";
import {
  renderInformationCards,
  loadUserFilters,
  clearFilters,
  updateBadgeVisibility,
} from "./informationCards.js";

const showSection = (sectionClass) => {
  sessionStorage.setItem("currentSection", sectionClass);

  const video = document.querySelector(".bg-video");
  const bgImage = document.querySelector(".bg-image");

  document.querySelectorAll(".page-section").forEach((section) => {
    section.style.display = "none";
  });

  const targetSection = document.querySelector(
    `.page-section[data-section="${sectionClass}"]`
  );
  if (targetSection) {
    targetSection.style.display = "block";
  } else {
    document.querySelector('.page-section[data-section="home"]').style.display = "block";
  }

  if (sectionClass !== "home" && video) {
    if (!video.paused) {
      video.pause();
    }
    video.style.display = "none";
    bgImage.style.backgroundImage = 'url("/images/maximalfocus-VT4rx775FT4-unsplash 1.jpg")';
  }
};

function clearForm() {
  const form = document.getElementById("form-login");
  if (form) {
    form.reset();
  }
}

document.querySelectorAll("[data-section]").forEach((link) => {
  link.addEventListener("click", () => {
    const sectionClass = link.getAttribute("data-section");
    showSection(sectionClass);
    history.pushState(null, null, `#${sectionClass}`);
  });
});

window.addEventListener("popstate", () => {
  const sectionClass = location.hash ? location.hash.substring(1) : "home";
  showSection(sectionClass);
});

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const discussionCardsAddContainer = document.getElementById("discussions-add-card-input-container");
const discussionsUsername = document.getElementById("discussions-add-card-input-user");
const discussionsAddCard = document.getElementById("discussions-add-card");
const navbarProfileLink = document.getElementById("navbar-profile-link");
const profileName = document.getElementById("profile-username");
const profileEmail = document.getElementById("profile-email");
const profileGender = document.getElementById("profile-gender");
const profileYear = document.getElementById("profile-year");

const logedInDiv = document.getElementById("loged-in-div");
const logedOutDiv = document.getElementById("loged-out-div");
const logOutBtn = document.getElementById("log-out-btn");
const commentAddedBadge = document.getElementById("comment-added");

function updateProfileInputs(username) {
  const users = JSON.parse(sessionStorage.getItem("users")) || [];
  const user = users.find((user) => user.username === username);

  if (user) {
    profileName.value = user.username;
    profileEmail.value = user.email;
    profileGender.value = user.gender;
    profileYear.value = user.year;
  } else {
    console.error("User data not found in sessionStorage");
    profileName.value = "";
    profileEmail.value = "";
    profileGender.value = "";
    profileYear.value = "";
  }
}

function saveProfileInputs(username) {
  let users = JSON.parse(sessionStorage.getItem("users")) || [];
  const userIndex = users.findIndex((user) => user.username === username);

  if (userIndex !== -1) {
    users[userIndex].email = profileEmail.value;
    users[userIndex].year = profileYear.value;
    sessionStorage.setItem("users", JSON.stringify(users));
  } else {
    console.error("User data not found in sessionStorage");
  }
}

const formProfileNavigationBtn = document.getElementById("form-profile-navigation-btn");

function updateProfileNavigationLink() {
  const loggedIn = sessionStorage.getItem("logedIn") === "true";
  loggedIn ? (formProfileNavigationBtn.href = "#profile") : (formProfileNavigationBtn.href = "#log-in");
}

function initializeUI() {
  const logedIn = sessionStorage.getItem("logedIn");

  if (logedIn === "true") {
    logedInDiv.classList.remove("d-none");
    logOutBtn.classList.remove("d-none");
    logedOutDiv.classList.add("d-none");
    navbarProfileLink.classList.remove("d-none");
    discussionsAddCard.classList.remove("d-none");
    discussionCardsAddContainer.classList.remove("d-none");

    const username = sessionStorage.getItem("username");
    discussionsUsername.innerText = username;

    updateProfileInputs(username);
    updateBadgeVisibility();
    updateCommentBadgeVisibility();
  } else {
    logedInDiv.classList.add("d-none");
    logOutBtn.classList.add("d-none");
    logedOutDiv.classList.remove("d-none");
    navbarProfileLink.classList.add("d-none");
    discussionsAddCard.classList.add("d-none");
    discussionCardsAddContainer.classList.add("d-none");

    profileName.value = "";
    profileEmail.value = "";
    profileGender.value = "";
    profileYear.value = "";

    clearFilters();
    renderInformationCards();
  }

  resetDisplayedCards();
  renderDiscussionCards();
  const currentSection = sessionStorage.getItem("currentSection") || "home";
  showSection(currentSection);

  updateProfileNavigationLink();
}

function showButtonOnHover(inputId, buttonId) {
  const input = document.getElementById(inputId);
  const button = document.getElementById(buttonId);

  if (input && button) {
    input.addEventListener("mouseenter", () => {
      button.classList.remove("d-none");
    });

    input.addEventListener("mouseleave", () => {
      button.classList.add("d-none");
    });

    button.addEventListener("mouseenter", () => {
      button.classList.remove("d-none");
    });

    button.addEventListener("mouseleave", () => {
      button.classList.add("d-none");
    });

    button.addEventListener("click", () => {
      const username = sessionStorage.getItem("username");
      if (username) {
        saveProfileInputs(username);
        alert("Profile updated successfully!");
      } else {
        console.error("User data not found in sessionStorage");
      }
      button.classList.add("d-none");
    });
  }
}

initializeUI();

document.addEventListener("DOMContentLoaded", () => {
  showButtonOnHover("profile-email", "change-email-btn");
  showButtonOnHover("profile-year", "change-year-btn");

  document.getElementById("change-all-btn-small").addEventListener("click", () => {
    const username = sessionStorage.getItem("username");
    if (username) {
      saveProfileInputs(username);
      alert("All profile details updated successfully!");
      document.querySelectorAll(".input-button-text").forEach((button) => {
        button.classList.add("d-none");
      });
    } else {
      console.error("User data not found in sessionStorage");
    }
  });

  initializeUserSession();
  setupVideoHandler();

  const logedIn = sessionStorage.getItem("logedIn");
  const username = sessionStorage.getItem("username");

  if (logedIn === "true" && username) {
    loadUserFilters(username);
  } else {
    renderInformationCards();
  }

  initializeDiscussions();
});

document.getElementById("form-login-button").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("login-confirm-modal").style.display = "block";
});

document.getElementById("confirm-login-btn").addEventListener("click", () => {
  const username = document.getElementById("form-login-username").value;
  const password = document.getElementById("form-login-password").value;

  if (username && password) {
    fetch("http://127.0.0.1:5000/api/authentication", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        sessionStorage.setItem("logedIn", "true");
        sessionStorage.setItem("username", username);

        showSection("home");
        initializeUI();
        clearForm();
        loadUserFilters(username);
        document.getElementById("login-confirm-modal").style.display = "none";
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Login failed. Please check your credentials.");
        document.getElementById("login-confirm-modal").style.display = "none";
      });
  } else {
    alert("Please fill in both username and password fields.");
    document.getElementById("login-confirm-modal").style.display = "none";
  }
});

window.addEventListener("click", (event) => {
  const modal = document.getElementById("login-confirm-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

logOutBtn.addEventListener("click", () => {
  sessionStorage.setItem("logedIn", "false");
  sessionStorage.removeItem("username");
  showSection("home");
  initializeUI();
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header nav");
  if (window.scrollY > 0) {
    header.classList.add("transparent");
  } else {
    header.classList.remove("transparent");
  }
});
