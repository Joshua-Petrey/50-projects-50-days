const toggles = document.querySelectorAll(".faq-toggle");

// Toggle the .active on the button containers parent(.faq)
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
