const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  // toggle turns .active off/on
  search.classList.toggle("active");
  input.focus();
});
