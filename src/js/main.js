import Pokemon from './pokemon.js';
import Stats from './stats.js';
import { getPokemon, getPokemons, getPokemonStats} from './data.js';

// New pokemon id 12
console.log( await getPokemon(12));
// New pokemon-stats id 12
console.log(await getPokemonStats(12));
// 4 pokemons for the carrusel
let lots = await getPokemons(4);
console.log(lots);

// Probando pull request
// let pokemon = new Pokemon(1,'',1,1,1,'',1,1);
// let stats = new Stats(1,1,1,1,1,1,1);
// console.log(pokemon,stats);


// show the carrusel in index
let amountSuggestions = 8;
let suggestions = await getPokemons(amountSuggestions);
let containerCarrusel = document.querySelector('#suggested-pokemon');
  for (let item of suggestions){

    containerCarrusel.innerHTML += `
    <div class="pokemon-card">
    <img src=${item.image} alt="Pokemon">
    <div class="pokemon-info--container">
      <h3>${item.name}</h3>
      <p>Type: ${item.types[0]} <br>
      Height: ${item.height} cm <br>
      Weight: ${item.weight} kg </p>
      <button>More</button>
    </div>
    </div>`;
  }


