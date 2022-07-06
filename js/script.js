// Global
let scrollY = window.pageYOffset;
// For Ipi
let firstSt = Math.random().toString(36).slice(2, 3);
console.log("firstSt: ", firstSt);
// Just Need One Letter
function justSt() {
  let ing = firstSt
    .split("")
    .map(function (ele) {
      return isNaN(parseInt(ele)) ? ele : "a";
    })
    .join("");
  return ing;
}
console.log("justSt(): ", justSt());

// Show Menu
const showMenu = (toggleId, NavId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(NavId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// Remove Menu When Click On Each Nav Link
const navLink = document.querySelectorAll(".nav-link");

function linkActive() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((h) => h.addEventListener("click", linkActive));

// Scroll Section Active
const sections = document.querySelectorAll("section[id");

function scrollActive() {
  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");
    if (
      this.scrollY > sectionTop &&
      this.scrollY <= sectionTop + sectionHeight
    ) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// Change Background Header
function scrollHeader() {
  let header = document.getElementById("header");
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// Show Button Scroll Top
function scrollTop() {
  let scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 200) {
    scrollTop.classList.add("show-scroll-top");
  } else {
    scrollTop.classList.remove("show-scroll-top");
  }
}
window.addEventListener("scroll", scrollTop);

/*  DARK LIGHT THEME  */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "fa-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*  SCROLL REVEAL ANIMATION  */
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.home-text,
  .home-img, 
    .services-item,
    .work-img,
    .work-text,
    .team-item,
    .form-name,
    .form-email,
    .form-message`,
  {
    interval: 200,
  }
);

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// Copy Right Year
let CopyRightYear = document.getElementById("CopyRightYear");
let time = new Date();
let Year = time.getFullYear();
CopyRightYear.innerHTML = Year;
