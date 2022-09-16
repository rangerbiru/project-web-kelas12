// Membuat Animation Scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Membuat Humberger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Cara close navigation
navMenu.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
});
