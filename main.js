import { initializeUserSession } from "./storage.js";
import { renderDiscussionCards } from "./discussionsCards.js";
import { setupVideoHandler } from "./videoHandler.js";
import {
  renderInformationCards,
  loadUserFilters,
  clearFilters,
} from "./informationCards.js";

const showSection = (sectionClass) => {
  // Store the current section in sessionStorage
  sessionStorage.setItem("currentSection", sectionClass);

  const video = document.querySelector(".bg-video");
  const bgImage = document.querySelector(".bg-image");

  // Hide all sections
  document.querySelectorAll(".page-section").forEach((section) => {
    section.style.display = "none";
  });

  // Show the target section
  const targetSection = document.querySelector(
    `.page-section[data-section="${sectionClass}"]`
  );
  if (targetSection) {
    targetSection.style.display = "block";
  } else {
    document.querySelector('.page-section[data-section="home"]').style.display =
      "block";
  }

  // Handle video logic based on the section
  if (sectionClass !== "home" && video) {
    // Pause and hide the video if it's playing
    if (!video.paused) {
      video.pause();
    }
    video.style.display = "none";

    // Restore the background image
    bgImage.style.backgroundImage =
      'url("/images/maximalfocus-VT4rx775FT4-unsplash 1.jpg")';
  }
};

function clearForm() {
  const form = document.getElementById("form-login");
  if (form) {
    form.reset(); // This will reset the form to its initial state
  }
}

// Handle link clicks to navigate between sections
document.querySelectorAll("[data-section]").forEach((link) => {
  link.addEventListener("click", () => {
    const sectionClass = link.getAttribute("data-section");
    showSection(sectionClass);

    // Update URL without reloading the page
    history.pushState(null, null, `#${sectionClass}`);
  });
});

// Handle browser back and forward buttons
window.addEventListener("popstate", () => {
  const sectionClass = location.hash ? location.hash.substring(1) : "home";
  showSection(sectionClass);
});

// Disable automatic scroll restoration for modern browsers
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const discussionsAddCard = document.getElementById("discussions-add-card");
const navbarProfileLink = document.getElementById("navbar-profile-link");
const profileName = document.getElementById("profile-username");
const profileEmail = document.getElementById("profile-email");
const profileGender = document.getElementById("profile-gender");
const profileYear = document.getElementById("profile-year");

const logedInDiv = document.getElementById("loged-in-div");
const logedOutDiv = document.getElementById("loged-out-div");
const logOutBtn = document.getElementById("log-out-btn");

// Function to update profile inputs based on username
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

// Function to save updated profile inputs to sessionStorage
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

function initializeUI() {
  const logedIn = sessionStorage.getItem("logedIn");

  if (logedIn === "true") {
    // User is logged in
    logedInDiv.classList.remove("d-none");
    logOutBtn.classList.remove("d-none");
    logedOutDiv.classList.add("d-none");
    navbarProfileLink.classList.remove("d-none");
    discussionsAddCard.classList.remove("d-none");

    const username = sessionStorage.getItem("username");
    if (username) {
      updateProfileInputs(username);
      // Add event listeners to profile inputs to save changes
      profileEmail.addEventListener("input", () => saveProfileInputs(username));
      profileYear.addEventListener("input", () => saveProfileInputs(username));
    }
  } else {
    // User is logged out
    logedInDiv.classList.add("d-none");
    logOutBtn.classList.add("d-none");
    logedOutDiv.classList.remove("d-none");
    navbarProfileLink.classList.add("d-none");
    discussionsAddCard.classList.add("d-none");

    profileName.value = "";
    profileEmail.value = "";
    profileGender.value = "";
    profileYear.value = "";

    // Clear filters and show all cards
    clearFilters();
    renderInformationCards(); // Render all cards in default view
    renderDiscussionCards();
  }

  // Retrieve and show the last viewed section
  const currentSection = sessionStorage.getItem("currentSection") || "home";
  showSection(currentSection);
}

// Initialize UI on page load
initializeUI();

// Handle form submission (login)
document
  .getElementById("form-login-button")
  .addEventListener("click", (event) => {
    event.preventDefault();

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
          initializeUI(); // Update UI after login
          clearForm();
          // Load user filters
          loadUserFilters(username);
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Login failed. Please check your credentials.");
        });
    } else {
      alert("Please fill in both username and password fields.");
    }
  });

// Handle logout
logOutBtn.addEventListener("click", () => {
  sessionStorage.setItem("logedIn", "false");
  sessionStorage.removeItem("username");
  showSection("home");
  initializeUI(); // Update UI after logout
});

document.addEventListener("DOMContentLoaded", () => {
  initializeUserSession();
  setupVideoHandler();

  const logedIn = sessionStorage.getItem("logedIn");
  const username = sessionStorage.getItem("username");

  if (logedIn === "true" && username) {
    loadUserFilters(username);
  } else {
    renderInformationCards(); // Render without filters for not logged in user
  }
});
