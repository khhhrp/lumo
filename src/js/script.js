document.addEventListener("DOMContentLoaded", (event) => {
  const burgerButton = document.querySelector(".burger-btn");
  const headerMenu = document.querySelector(".header__menu");
  const body = document.body;

  function activeToggle(element, toggleClass) {
    element.classList.toggle(toggleClass);
  }

  function removeActiveClasses() {
    burgerButton.classList.remove("burger-btn--active");
    headerMenu.classList.remove("header__menu--active");
    body.classList.remove("no-scroll");
  }

  burgerButton.addEventListener("click", () => {
    activeToggle(burgerButton, "burger-btn--active");
    activeToggle(headerMenu, "header__menu--active");
    body.classList.toggle("no-scroll");
  });

  window.addEventListener("resize", () => {
    removeActiveClasses();
  });
});
