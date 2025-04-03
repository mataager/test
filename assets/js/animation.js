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

//
// Minimal required JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const triggers = document.querySelectorAll(".scroll-trigger");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.closest(".special.new-arri").classList.add("visible");
        } else {
          entry.target.closest(".special.new-arri").classList.remove("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  triggers.forEach((trigger) => observer.observe(trigger));
});

//safari and ios helper
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(
    ".product-item, .product-card-overview"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  items.forEach((item) => observer.observe(item));
});
