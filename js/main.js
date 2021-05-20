// import Pokemon from './pokemon.js';
// import Stats from './stats.js';
import { getPokemon, getPokemons} from './data.js';

let containerCarousel = document.querySelector('#suggested-pokemon');
let gameButton = document.getElementById("game-button");
let status = document.querySelector(".statusSearch");


// show the carousel in index
const showCarousel = async () => {
  let amountSuggestions = 8;
  let suggestions = await getPokemons(120, amountSuggestions);
  for (let item of suggestions){
    containerCarousel.innerHTML += `
    <div class="pokemon-card">
    <img src=${item.image} alt="Pokemon">
    <div class="pokemon-info--container">
    <h3>${item.name}</h3>
    <p>Type: ${item.types[0]} <br>
    Height: ${item.height} cm <br>
    Weight: ${item.weight} kg </p>
    <button value="${item.id}"  class="button-card">More</button>
    </div>
    </div>`;
  }
  document.querySelectorAll('.button-card').forEach(card =>
    card.addEventListener("click", () => {
      localStorage.setItem("pokemon", card.value);
      location.href = './wiki.html';
  }));
}

showCarousel();
// show the content of the cards
// add the function to display pokemon in Wiki

//search a  pokemon
document.addEventListener("keypress", async e => {
  if (e.target.matches("#search")) {
    if (e.key === "Enter") {
      status.innerHTML = ``;
      try {
        let query = e.target.value.toLowerCase();
        let newPokemon = await getPokemon(query);
        if (typeof newPokemon != 'object' || newPokemon == false) {
          status.style.color = "red";
          status.innerHTML = `<p>No results were found. Please try again.</p>`;
        } else {
          localStorage.setItem("pokemon", query);
          location.href = './wiki.html';
        }
      }catch (err) {
        status.style.color = "red";
        status.innerHTML = `<p>Something went wrong. Please try again.</p>`;
      }
    }
  }
});

// Add the function to go to game page
gameButton.addEventListener('click', () => {
  location.href = './game.html';
})
