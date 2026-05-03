const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const currentYear = document.getElementById("current-year");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const menuIsOpen = navLinks.classList.contains("active");

    menuToggle.textContent = menuIsOpen ? "✕" : "☰";
    menuToggle.setAttribute(
      "aria-label",
      menuIsOpen ? "Fermer le menu" : "Ouvrir le menu"
    );
  });

  const links = navLinks.querySelectorAll("a");

  links.forEach((link) => {
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