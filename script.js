// Mobil menü kezelése
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("show"); // Navigáció megjelenítése/elrejtése
});

// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    navList.classList.remove("show"); // Menü bezárása kattintás után

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Görgetés lehetősége
const scrollArea = document.querySelector(".scrollable");

// Egér görgetés esemény hozzáadása
window.addEventListener(
  "wheel",
  (event) => {
    scrollArea.scrollBy({
      top: event.deltaY,
      behavior: "smooth",
    });
  },
  { passive: false }
);
