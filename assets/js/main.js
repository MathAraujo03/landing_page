document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.querySelector(".back-to-top");
  const secondSection = document.querySelector("section:nth-of-type(2)");

  function toggleBackToTop() {
    const sectionTop = secondSection.getBoundingClientRect().top;

    if (sectionTop <= 0) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", toggleBackToTop);
  toggleBackToTop(); // Verifica ao carregar
});
