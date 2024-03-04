document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submit-btn");
  const selectHead = document.querySelector(".custom-select-head");
  const selectItems = document.querySelectorAll(".custom-select-body > div");
  const typeError = document.getElementById("type-error");
  const customSelectBody = document.querySelector(".custom-select-body");

  let selectedValue = null;

  // Toggle select dropdown
  selectHead.addEventListener("click", function () {
    customSelectBody.classList.toggle("custom-select-body-hidden");
  });

  // Handle item selection
  selectItems.forEach((item) => {
    item.addEventListener("click", function () {
      selectedValue = this.getAttribute("value");
      selectHead.innerText = this.innerText;
      selectHead.setAttribute("value", selectedValue);
      customSelectBody.classList.add("custom-select-body-hidden");
      typeError.style.display = "none"; // Reset error message when option is selected
    });
  });

  // Close select dropdown when clicking outside of it
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".custom-select")) {
      customSelectBody.classList.add("custom-select-body-hidden");
    }
  });

  // Submit form when submit button is clicked
  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const form = document.getElementById("myForm");
    const username = document.getElementById("username");
    const company = document.getElementById("company");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    const usernameError = document.getElementById("username-error");
    const companyError = document.getElementById("company-error");
    const emailError = document.getElementById("email-error");
    const phoneError = document.getElementById("phone-error");
    const customError = document.getElementById("custom-select-color")
  

    // Field validations
    let isValid = true;

    // Username validation
    if (username.value === "") {
      usernameError.style.display = "block";
      username.style.outline = "2px solid red";
      isValid = false;
    } else {
      usernameError.style.display = "none";
      username.style.outline = "2px solid green";
    }

    // Company validation
    if (company.value === "") {
      companyError.style.display = "block";
      company.style.outline = "2px solid red";
      isValid = false;
    } else {
      companyError.style.display = "none";
      company.style.outline = "2px solid green";
    }

    // Email validation
    if (email.value === "") {
      emailError.style.display = "block";
      email.style.outline = "2px solid red";
      isValid = false;
    } else {
      emailError.style.display = "none";
      email.style.outline = "2px solid green";
    }

    // Phone validation
    if (phone.value === "") {
      phoneError.style.display = "block";
      phone.style.outline = "2px solid red";
      isValid = false;
    } else {
      phoneError.style.display = "none";
      phone.style.outline = "2px solid green";
    }

    // Type validation
    if (!selectedValue) {
      typeError.style.display = "block";
      customError.style.outline = "2px solid red";
      isValid = false;
    } else {
      typeError.style.display = "none";
      customError.style.outline = "2px solid green";
    }

    // If all validations pass, submit the form
    if (isValid) {
      form.submit();
    }
  });
});
