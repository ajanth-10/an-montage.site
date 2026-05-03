const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const currentYear = document.querySelector("#current-year");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
      menuToggle.textContent = "✕";
      menuToggle.setAttribute("aria-label", "Fermer le menu");
    } else {
      menuToggle.textContent = "☰";
      menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.textContent = "☰";
      menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    });
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}