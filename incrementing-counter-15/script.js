const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  // set follower count to 0
  counter.innerText = 0;
  const updateCounter = () => {
    // turn data-target value to a number
    const target = +counter.getAttribute("data-target");
    // start counting from 0
    const c = +counter.innerText;
    // set increment amount, all will finish at same time
    const increment = target / 200;

    // don't go past target
    if (c < target) {
      counter.innerText = `${Math.ceil(c) + increment}`;
      // increase c by the increment every 1 sec
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
