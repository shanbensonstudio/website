document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("is-open");
    });
  }

  if (document.body.classList.contains("is-loading")) {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var delay = reduceMotion ? 0 : 1100;
    window.setTimeout(function () {
      document.body.classList.remove("is-loading");
    }, delay);
  }
});
