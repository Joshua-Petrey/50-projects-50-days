const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
// create a button for each sound
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  // clicking button stops current sound and play new one
  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
  });
  // append each button on the button container
  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    // stop current song
    song.pause();
    // rewind current song to beginning
    song.currentTime = 0;
  });
}
