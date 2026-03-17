// HEADER
fetch("/components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });

// MOBILE MENU
fetch("/components/mobile-menu.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("mobile-menu-container").innerHTML = data;
  });