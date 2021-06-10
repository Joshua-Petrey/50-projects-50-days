const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    // amke an array contaiing each letter
    .split("")
    // add a span around each letter in the label
    // increase the transition delay for each span
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    // join() array back into a string
    .join("");
});
