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
// window.addEventListener("scroll", function () {
//   const elements = document.querySelectorAll(".animate-on-scroll");
//   const windowHeight = window.innerHeight;

//   elements.forEach(function (element) {
//     const position = element.getBoundingClientRect().top;

//     if (position < windowHeight) {
//       element.classList.add("show");
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   // For auto-animate elements
//   const autoElements = document.querySelectorAll(".animate-on-scroll-auto");
//   autoElements.forEach(function (element) {
//     element.classList.add("show");
//   });

//   // For scroll-triggered elements (keeping original functionality)
//   window.addEventListener("scroll", function () {
//     const scrollElements = document.querySelectorAll(".animate-on-scroll");
//     const windowHeight = window.innerHeight;

//     scrollElements.forEach(function (element) {
//       const position = element.getBoundingClientRect().top;

//       if (position < windowHeight) {
//         element.classList.add("show");
//       }
//     });
//   });

//   // Trigger scroll event once to animate elements already in view
//   window.dispatchEvent(new Event("scroll"));
// });

document.addEventListener("DOMContentLoaded", function () {
  // For auto-animate elements
  const autoElements = document.querySelectorAll(".animate-on-scroll-auto");
  autoElements.forEach(function (element) {
    element.classList.add("show");
  });

  // For scroll-triggered elements with show/hide functionality
  function checkScroll() {
    const scrollElements = document.querySelectorAll(".animate-on-scroll");
    const windowHeight = window.innerHeight;
    const triggerOffset = windowHeight * 0.8; // Trigger point at 80% of viewport height

    scrollElements.forEach(function (element) {
      const position = element.getBoundingClientRect().top;
      const elementHeight = element.offsetHeight;

      // Check if element is in view (with some offset)
      if (position < triggerOffset && position > -elementHeight) {
        element.classList.add("show");
      } else {
        element.classList.remove("show");
      }
    });
  }

  // Initial check on load
  checkScroll();

  // Listen for scroll events
  window.addEventListener("scroll", checkScroll);
});
