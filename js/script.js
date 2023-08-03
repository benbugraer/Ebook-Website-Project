// Add custom JavaScript here
// Scroll Top
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "#333";
    navbar.style.transition = "0.4s";
    navbar.classList.add("navbar-sticky");
  } else {
    navbar.style.background = "none";
    navbar.classList.add("navbar-sticky");
  }
});
