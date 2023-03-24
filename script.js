// menu selectors
const nav_btn = document.querySelector(".nav_icon");
const nav_closeBtn = document.querySelector(".close_nav");
const menu = document.querySelector(".menu2");
const overlay = document.querySelector(".hidden");

let openNav = function () {
  menu.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

let closeNav = function () {
  menu.classList.add("hidden");
  overlay.classList.add("hidden");
};

//menu functions
nav_btn.addEventListener("click", openNav);
nav_closeBtn.addEventListener("click", closeNav);
