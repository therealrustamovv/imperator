document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".border-b");

    accordions.forEach((accordion) => {
        const checkbox = accordion.querySelector('input[type="checkbox"]');
        const content = accordion.querySelector(".accordion-content");

        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                content.classList.remove("hidden");
            } else {
                content.classList.add("hidden");
            }
        });
    });
});
// loading start
const loading = document.getElementById("loading");

const loadingDuration = 1500;
setTimeout(() => {
    loading.classList.add("loading-none");
}, loadingDuration);
// loading end

// backtop start
window.addEventListener("scroll", function () {
    toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        backtop.classList.add("backtop-show");
    } else {
        backtop.classList.remove("backtop-show");
    }
}
// backtop end

// dark mode

let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "../assets/images/light.svg";
  } else {
    this.firstElementChild.src = "../assets/images/dark.svg";
  }
  document.body.classList.toggle("dark");
});

// navbar shrink

window.addEventListener("scroll", function () {
  shrink();
});

let language = document.getElementById("language");
let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    language.classList.add("language-shrink");
  } else {
    language.classList.remove("language-shrink");
  }
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}