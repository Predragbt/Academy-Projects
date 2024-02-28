document.addEventListener("DOMContentLoaded", function () {
  const loadmoreButton = document.querySelector(".loadmore");
  const cards = document.querySelectorAll(".card-col");
  const filterCodingButton = document.querySelector("#filter-coding");
  const filterDesignButton = document.querySelector("#filter-design");
  const filterMarketingButton = document.querySelector("#filter-marketing");
  const filterAllButton = document.querySelector("#filter-all");
  
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

  filterCodingButton.addEventListener("click", function () {
      filterCards("coding");
      loadmoreButton.style.display = "none";
  });
  filterDesignButton.addEventListener("click", function () {
      filterCards("design");
      loadmoreButton.style.display = "none";
  });
  filterMarketingButton.addEventListener("click", function () {
      filterCards("marketing");
      loadmoreButton.style.display = "none";
  });
  filterAllButton.addEventListener("click", function () {
      showAllCards();
      loadmoreButton.style.display = "block";
  });

  function showNextSetOfCards(startIndex, endIndex) {
      for (let i = startIndex; i < endIndex && i < cards.length; i++) {
          cards[i].classList.add("show-cards");
      }
  }

  function filterCards(category) {
      hideAllCards();
      const categoryCards = document.querySelectorAll("." + category);
      categoryCards.forEach((card) => {
          card.style.display = "flex";
      });
  }

  function hideAllCards() {
      cards.forEach((card) => {
          card.style.display = "none";
      });
  }

  function showAllCards() {
      cards.forEach((card) => {
          card.style.display = "flex";
      });
  }
});