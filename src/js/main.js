// import Pokemon from './pokemon.js';
// import Stats from './stats.js';
import { getPokemon, getPokemons} from './data.js';


// show the carousel in index
let amountSuggestions = 8;
let suggestions = await getPokemons(120, amountSuggestions);
let containerCarousel = document.querySelector('#suggested-pokemon');
let status = document.querySelector(".statusSearch");
// show the content of the cards
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
// add the function to display pokemon in Wiki
document.querySelectorAll('.button-card').forEach(card =>
  card.addEventListener("click", () => {
    localStorage.setItem("pokemon", card.value);
    location.href = './wiki.html';
  }));

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
      }
    }
  }
});