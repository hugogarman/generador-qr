function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".mobile-menu");
  const close = document.querySelector(".close-menu");

  if (!toggle || !menu || !close) return;

  function goToPanel(panelClass) {
    document.querySelectorAll(".mobile-panel").forEach((panel) => {
      panel.classList.remove("active");
    });

    const targetPanel = document.querySelector("." + panelClass);
    if (targetPanel) {
      targetPanel.classList.add("active");
    }
  }

  toggle.addEventListener("click", () => {
    menu.classList.add("open");
    goToPanel("panel-main");
  });

  close.addEventListener("click", () => {
    menu.classList.remove("open");
    goToPanel("panel-main");
  });

  document.querySelectorAll(".has-next").forEach((link) => {
    link.addEventListener("click", () => {
      const target = link.dataset.target;
      goToPanel(target);
    });
  });

  document.querySelectorAll(".back").forEach((btn) => {
    btn.addEventListener("click", () => {
      const back = btn.dataset.back;
      goToPanel(back);
    });
  });
  document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', function () {
    this.blur();
  });
});
}

initMobileMenu();
