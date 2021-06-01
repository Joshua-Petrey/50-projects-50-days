const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

// currrent active number
let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  // cont exceed number of circles
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  // min 1 active circle
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  // set the progress bar width
  // we have 3 line segments and 4 circles. 1st segment is 33%, 2nd is 66%, 3rd is 99%
  // we -1 to calculate correct %
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    // enable both buttons if not at circle 1 or 4
    prev.disabled = false;
    next.disabled = false;
  }
}
