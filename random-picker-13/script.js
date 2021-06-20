const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("text-area");

//auto-focus on text-area
textarea.focus();

// on keyup create tags
textarea.addEventListener("keyup", (e) => {
  //creates tags
  createTags(e.target.value);

  // clear textarea
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    // animate and select a tag
    randomSelect();
  }
});

function createTags(input) {
  // create array element from string at each ,
  const tags = input
    .split(",")
    // filter out blanks and empty elements
    .filter((tag) => tag.trim() !== "")
    // trim each tag
    .map((tag) => tag.trim());

  // clear all tags on each new run
  tagsEl.innerHTML = "";

  // create and append a tag for each element in tags
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;
  //  higlight and random tag every 100ms
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);
    // unhighilight the tag after another 100ms
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    // stop interval
    clearInterval(interval);
    //choose final tag and highlight it
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

// grab a random tag from the tags array
function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}
// add highlist class to a tag
function highlightTag(tag) {
  tag.classList.add("highlight");
}
// remove highlist class to a tag
function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
