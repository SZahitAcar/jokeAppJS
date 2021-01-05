const joker = document.getElementById("joke");
const button = document.getElementById("jokeBtn");

getJokes()

button.addEventListener("click", getJokes);

async function getJokes() {
    let url = await fetch("https://icanhazdadjoke.com/", {
        headers : {
            accept : "application/json",
        }
    });
    const urlJSON =  await url.json();
    joker.innerHTML = urlJSON.joke;
}