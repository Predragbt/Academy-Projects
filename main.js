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
showSection("log-in");

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
