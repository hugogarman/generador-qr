const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".mobile-menu");
const close = document.querySelector(".close-menu");

toggle.addEventListener("click", () => {
  menu.classList.add("open");
});

close.addEventListener("click", () => {
  menu.classList.remove("open");
});
