// const btnColor = document.querySelectorAll(".btn-number");
// const changeMode = document.querySelector(".change-mode");

// let backgroundColorBlack = false;
// changeMode.addEventListener("click", function () {
//   if (backgroundColorBlack) {
//     btnColor.forEach(function (btn) {
//       btn.style.backgroundColor = "white";
//     });
//     backgroundColorBlack = false
// } else {
//     btnColor.forEach(function (btn) {
//         btn.style.backgroundColor = "black";
//     });
//     backgroundColorBlack = true
//   }
// });

// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll("nav a").forEach((link) => {
//   if (link.href.includes(`${activePage}`)) {
//     link.classList.add("active");
//     console.log(link);
//   }
// });

const navLinks = document.querySelector(".nav-links");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  if (navLinks.classList.contains("hide-nav")) {
    navLinks.classList.remove("hide-nav");
  } else {
    navLinks.classList.add("hide-nav");
  }
});
