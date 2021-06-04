const loadingText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

// reps loading %
let load = 0;

// increase loading % and decrease blur every 30ms
let interval = setInterval(blurring, 30);

function blurring() {
  load++;
  // stop the interval at 100%
  if (load > 99) {
    clearInterval(interval);
  }
  // show load %
  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  // image blur goes from 30-0 in same time as load goe 0-100
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// function to map 0-100 to 1-0
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
