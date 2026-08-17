// BYTE BASH — landing page interactions
// Scroll-reveal for sections + cards. Kept dependency-free on purpose.

(function () {
  "use strict";

  var revealTargets = document.querySelectorAll(
    ".card, .prize, .judge-card, .timeline__item, .faq__item, .sponsor-slot"
  );

  revealTargets.forEach(function (el) {
    el.classList.add("reveal");
  });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: no IntersectionObserver support, just show everything.
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // Live countdown-style hero stat (purely decorative, resets client-side).
  var durationEl = document.querySelector(".stat__value");
  // Left as static "24:00:00" — intentionally not wired to a real clock
  // to avoid implying a live countdown without a real event timestamp.
})();
