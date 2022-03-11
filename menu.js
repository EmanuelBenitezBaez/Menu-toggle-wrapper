
const toggle = document.querySelector(".toggle");

const navUL = document.querySelector("nav.navegacion ul");

toggle.addEventListener("click", () => {
  navUL.classList.toggle("open");
});
