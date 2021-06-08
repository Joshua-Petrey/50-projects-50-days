const boxes = document.querySelectorAll(".box");

// add listener to the window
window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  const triggerPoint = (window.innerHeight / 4) * 3;
  boxes.forEach((box) => {
    // getBoundingClientRect returns the size and position of an element releative to the viewport
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerPoint) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
