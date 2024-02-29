let btn = document.querySelector(".btn-mobile-nav");
let header = document.querySelector(".header");

btn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

let links = document.querySelectorAll("a:link");

links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    let href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      let sectionEl = document.querySelector(href);
      sectionEl?.scrollIntoView({ behavior: "smooth" });
    }
  });
});

let navLinks = document.querySelectorAll(".main-nav-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    header.classList.toggle("nav-open");
  });
});

let heroSection = document.querySelector(".section-hero");

let obs = new IntersectionObserver(
  function (entries) {
    let ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("stiky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("stiky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroSection);

function chechflexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
chechflexGap();
