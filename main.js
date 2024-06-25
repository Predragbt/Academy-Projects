// Function to show the specified section and hide the others
const showSection = (sectionClass) => {
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
    // Fallback to home section if the target section is not found
    document.querySelector('.page-section[data-section="home"]').style.display =
      "block";
  }
};

// Initially show the home section
showSection("profile");

function clearForm() {
  const form = document.getElementById("login-form");
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

const profileName = document.getElementById("profile-username");
const profileEmail = document.getElementById("profile-email");
const profileGender = document.getElementById("profile-gender");
const profileYear = document.getElementById("profile-year");

const logedInDiv = document.getElementById("loged-in-div");
const logedOutDiv = document.getElementById("loged-out-div");
const logOutBtn = document.getElementById("log-out-btn");
const logedIn = localStorage.getItem("logedIn");

// Function to update profile inputs based on username
function updateProfileInputs(username) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((user) => user.username === username);

  if (user) {
    profileName.value = user.username;
    profileEmail.value = user.email;
    profileGender.value = user.gender;
    profileYear.value = user.year;
  } else {
    console.error("User data not found in localStorage");
    // Optionally clear inputs or set placeholders
    profileName.value = "";
    profileEmail.value = "";
    profileGender.value = "";
    profileYear.value = "";
  }
}

// Function to initialize UI based on login state
function initializeUI() {
  const logedIn = localStorage.getItem("logedIn");

  if (logedIn === "true") {
    // User is logged in
    logedInDiv.classList.remove("d-none");
    logOutBtn.classList.remove("d-none");
    logedOutDiv.classList.add("d-none");

    const username = localStorage.getItem("username");
    if (username) {
      updateProfileInputs(username);
    }
  } else {
    // User is logged out
    logedInDiv.classList.add("d-none");
    logOutBtn.classList.add("d-none");
    logedOutDiv.classList.remove("d-none");

    // Clear profile inputs or set placeholders
    profileName.value = "";
    profileEmail.value = "";
    profileGender.value = "";
    profileYear.value = "";
  }
}

// Initialize UI on page load
initializeUI();

// Handle form submission (login)
document.getElementById("log-in-button").addEventListener("click", (event) => {
  event.preventDefault();

  const username = document.getElementById("log-in-username").value;
  const password = document.getElementById("log-in-password").value;

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
        console.log("Success:", data);
        localStorage.setItem("logedIn", true);
        localStorage.setItem("username", username);

        initializeUI(); // Update UI after login
        clearForm();
        // Display success message or redirect user
      })
      .catch((error) => {
        console.error("Error:", error);
        // Display error message to user
      });
  } else {
    alert("Please fill in both username and password fields.");
  }
});

// Handle logout
logOutBtn.addEventListener("click", () => {
  localStorage.setItem("logedIn", false);
  localStorage.removeItem("username");

  initializeUI(); // Update UI after logout
});
