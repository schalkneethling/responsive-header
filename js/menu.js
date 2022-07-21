(function () {
  "use strict";

  const mainMenuToggle = document.getElementById("main-menu-toggle");
  const pageHeaderInner = document.getElementById("page-header-inner");

  if (mainMenuToggle && pageHeaderInner) {
    const toggleButtonLabel = mainMenuToggle.querySelector(".visually-hidden");
    mainMenuToggle.addEventListener("click", () => {
      let expandedState = mainMenuToggle.getAttribute("aria-expanded");
      pageHeaderInner.classList.toggle("show");
      mainMenuToggle.setAttribute(
        "aria-expanded",
        expandedState === "true" ? false : true
      );
      toggleButtonLabel.textContent =
        expandedState === "true" ? "Show menu" : "Close menu";
    });
  }
})();
