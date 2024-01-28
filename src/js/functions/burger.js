
(function () {
  const burger = document.querySelector("[data-burger]");
  const menu = document.querySelector("[data-menu]");
  const mainBody = document.querySelector(".page__body");


  if (burger) {
    burger.addEventListener("click", (e) => {
      burger.classList.toggle("burger--active");
      menu.classList.toggle("menu--active");
      mainBody.classList.toggle("hidden");
      if (menu.classList.contains("menu--active")) {
        burger.setAttribute("aria-expanded", "true");
        burger.setAttribute("aria-label", "Закрыть меню");

      } else {
        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", "Открыть меню");
      }
    });
  }

  document.addEventListener("click", (e) => {
    if (
      menu &&
      !menu.contains(e.target) &&
      burger &&
      !burger.contains(e.target) &&
      menu.classList.contains("menu--active")
    ) {
      closeMenu();
    }
  });

  function closeMenu() {
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Открыть меню");
    burger.classList.remove("burger--active");
    menu.classList.remove("menu--active");
    mainBody.classList.remove("hidden");
  }
})();

