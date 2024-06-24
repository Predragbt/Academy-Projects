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
showSection("home");

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

const users = [
  {
    username: "User123",
    email: "user@example.com",
    gender: "Машки",
    year: "1999",
  },
  {
    username: "User456",
    email: "user2@example.com",
    gender: "Женски",
    year: "1996",
  },
  {
    username: "User789",
    email: "user3@example.com",
    gender: "Машки",
    year: "2002",
  },
];

const profileName = document.getElementById("profile-username");
const profileEmail = document.getElementById("profile-email");
const profileGender = document.getElementById("profile-gender");
const profileYear = document.getElementById("profile-year");

const logedInDiv = document.getElementById("loged-in-div");
const logedOutDiv = document.getElementById("loged-out-div");
const logOutBtn = document.getElementById("log-out-btn");
let logedIn = localStorage.setItem("logedIn", false);

function updateProfileInputs(username) {
  const user = users.find((user) => user.username === username);
  if (user) {
    profileName.placeholder = user.username;
    profileEmail.placeholder = user.email;
    profileGender.placeholder = user.gender;
    profileYear.placeholder = user.year;
  }
}

// Handle form submission
document.getElementById("log-in-button").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
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
        logedIn = true;
        logedInDiv.classList.remove("d-none");
        logOutBtn.classList.remove("d-none");
        logedOutDiv.classList.add("d-none");
        localStorage.setItem("logedIn", true);
        localStorage.setItem("username", username);

        updateProfileInputs(username);
        clearForm();
        // Display a success message or redirect the user
      })
      .catch((error) => {
        console.error("Error:", error);
        // Display an error message to the user
      });
  } else {
    alert("Please fill in both username and password fields.");
  }
});

logOutBtn.addEventListener("click", () => {
  logedIn = false;
  logedInDiv.classList.add("d-none");
  logOutBtn.classList.add("d-none");
  logedOutDiv.classList.remove("d-none");
  localStorage.setItem("logedIn", false);

  profileName.placeholder = "Username";
  profileEmail.placeholder = "Email address";
  profileGender.placeholder = "/";
  profileYear.placeholder = "/";
  localStorage.removeItem("username");
});
