const jokeDiv = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

getNewJoke();

jokeBtn.addEventListener("click", getNewJoke);

async function getNewJoke() {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  // transform returned json data to an object
  const data = await jokeData.json();
  // diplay joke
  jokeDiv.innerText = data.joke;
}
