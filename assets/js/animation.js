

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
    el.style.setProperty("--delay", `${delay}ms`);
    el.style.transitionDelay = `${delay}ms`;
    observer.observe(el);
  });

  // Minimal required JavaScript for scroll-trigger elements
  const triggers = document.querySelectorAll(".scroll-trigger");

  const specialObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const parent = entry.target.closest(".special.new-arri");
        if (parent) {
          parent.classList.toggle("visible", entry.isIntersecting);
        }
      });
    },
    { threshold: 0.1 }
  );

  triggers.forEach((trigger) => specialObserver.observe(trigger));
});

// Safari and iOS helper
window.addEventListener("load", function () {
  const items = document.querySelectorAll(
    ".product-item, .product-card-overview"
  );

  console.log("JavaScript loaded. Found items:", items.length);

  if (!items.length) {
    console.error(
      "No elements found! Check if `.product-item` and `.product-card-overview` exist."
    );
    return;
  }

  if ("IntersectionObserver" in window) {
    const itemObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.2 }
    );

    items.forEach((item) => itemObserver.observe(item));
  } else {
    // Fallback for old browsers
    items.forEach((item) => item.classList.add("visible"));
  }
});
