document.addEventListener("DOMContentLoaded", function () {
    const loadmoreButton = document.querySelector(".loadmore");
    const cards = document.querySelectorAll(".card-col");
    const cardsToShowInitially = 6;
    let visibleCards = cardsToShowInitially;
  
    showNextSetOfCards(0, visibleCards);
  
    loadmoreButton.addEventListener("click", function () {
      showNextSetOfCards(visibleCards, visibleCards + cardsToShowInitially);
      visibleCards += cardsToShowInitially;
  
      if (visibleCards >= cards.length) {
        loadmoreButton.style.display = "none";
      }
    });
  
    document
      .querySelector("#filter-coding")
      .addEventListener("click", function () {
        filterCoding();
        loadmoreButton.style.display = "none";
      });
    document
      .querySelector("#filter-design")
      .addEventListener("click", function () {
        filterDesign();
        loadmoreButton.style.display = "none";
      });
    document
      .querySelector("#filter-marketing")
      .addEventListener("click", function () {
        filterMarketing();
        loadmoreButton.style.display = "none";
      });
    document.querySelector("#filter-all").addEventListener("click", function () {
      showAllCards();
      loadmoreButton.style.display = "block";
    });
  });
  
  function showNextSetOfCards(startIndex, endIndex) {
    const cards = document.querySelectorAll(".card-col");
    for (let i = startIndex; i < endIndex && i < cards.length; i++) {
      cards[i].classList.add("show-cards");
    }
  }
  
  function filterCoding() {
    hideAllCards();
    let codingCards = document.querySelectorAll(".coding");
    codingCards.forEach((codingCard) => {
      codingCard.style.display = "flex";
    });
  }
  
  function filterDesign() {
    hideAllCards();
    let designCards = document.querySelectorAll(".design");
    designCards.forEach((designCard) => {
      designCard.style.display = "flex";
    });
  }
  
  function filterMarketing() {
    hideAllCards();
    let marketingCards = document.querySelectorAll(".marketing");
    marketingCards.forEach((marketingCard) => {
      marketingCard.style.display = "flex";
    });
  }
  
  function hideAllCards() {
    let allCards = document.querySelectorAll(".filter-cards");
    allCards.forEach((card) => {
      card.style.display = "none";
    });
  }
  
  function showAllCards() {
    let allCards = document.querySelectorAll(".filter-cards");
    allCards.forEach((card) => {
      card.style.display = "flex";
    });
  }
  