document.addEventListener("DOMContentLoaded", function () {
  const blockCards = document.querySelector(".main__cards");
  function showCards() {
    blockCards.classList.add("showCards");
  }
  showCards();

  const item = document.querySelectorAll(".main__card");
  const euro = 100;
  const month = 30;
  const items = document.querySelector(".main__cards");
  const quantities = document.querySelectorAll('.description-card__quantity');
  const info = document.querySelectorAll('.description-card__info');
  let set = false;

  blockCards.addEventListener("click", function (e) {
    if (e.target.classList.contains("description-card__button")) {
      e.preventDefault();
      items.classList.toggle("active");
      item.forEach((item) => {
        item.classList.toggle("active");
      });

      if (items.classList.contains('active')) {
        quantities.forEach((quantity) => {
          const quantityValue = parseInt(quantity.innerText.trim(), 10) * euro;
          quantity.textContent = quantityValue;
        });
      } else {
        quantities.forEach((quantity) => {
          const quantityValue = parseInt(quantity.innerText.trim(), 10) / euro;
          quantity.textContent = quantityValue;
        });
      }
    }

    if (e.target.classList.contains("description-card__info")) {
      info.forEach((item) => {
        if (!set) {
          item.textContent = '/Months';
        } else {
          item.textContent = '/Day';
        }
      });
      set = !set; // Инвертируем значение set для следующего клика
    }
  });
});
