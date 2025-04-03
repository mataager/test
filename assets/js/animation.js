// Make the observer available globally or pass it to your rendering function
let observer;

document.addEventListener("DOMContentLoaded", function () {
  // Set up IntersectionObserver
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        } else {
          entry.target.classList.remove("animated");
        }
      });
    },
    { threshold: 0.1 }
  );

  // Apply to existing elements
  const elements = document.querySelectorAll(".animateonscroll");
  elements.forEach((el, index) => {
    const delay = index * 200;
    el.style.setProperty("--delay", delay);
    el.style.transitionDelay = `${delay}ms`; // Fixed: Properly closed backtick
    observer.observe(el);
  });
});
//
window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".animate-on-scroll");
  const windowHeight = window.innerHeight;

  elements.forEach(function (element) {
    const position = element.getBoundingClientRect().top;

    if (position < windowHeight) {
      element.classList.add("show");
    }
  });
});
