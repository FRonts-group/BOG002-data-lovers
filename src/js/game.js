import getRandomPokemons from '../src/js/data.js';
import Pokemon from '../src/js/pokemon.js';
import Stats from './stats.js';
const pokemonContainer1 = document.querySelector('#pokemon1');
const pokemonContainer2 = document.querySelector('#pokemon2');
const pokemon1Button = document.querySelector('#first')
const pokemon2Button = document.querySelector('#second')
const spanScore = document.querySelector('#spanScore');
let pokemon1 = new Pokemon(1,'',1,1,1,'',1,1);
let pokemon2 = new Pokemon(1,'',1,1,1,'',1,1);
let pokemon1Stats = new Stats(1,1,1,1,1,1,1);
let pokemon2Stats = new Stats(1,1,1,1,1,1,1);

const changeFighter = (pokemon, pokemonContainer) => {
  const imageUrl = pokemon.image;
  const pokemonName =  pokemon.name;
  pokemonContainer.innerHTML = `
    <img src="${imageUrl}" alt="Pokemon1">
    <h3>${pokemonName}</h3>
  `
};

const getFighters = (n) => {
  let pokemons = getRandomPokemons(n);
  pokemon1 = pokemons[0];
  pokemon2 = pokemons[1];
  pokemon1Stats = getPokemonStats(pokemon1.id);
  pokemon2Stats = getPokemonStats(pokemon2.id);
  changeFighter(pokemon1, pokemonContainer1);
  changeFighter(pokemon2, pokemonContainer2);
}

const verifyChoice = (selectedButton, stat1, stat2) => {
  if(selectedButton === 0){
    if(stat1 > stat2){
      return 1;
    }
    return 0;
  }else{
    if(stat2 > stat1){
      return 1;
    }
    return 0 ;
  }
}

const scoreIncreaser = () =>{
  let score = 0;
  const scoreIncrease = (selectedButton) => {
    score = score + verifyChoice(selectedButton, pokemon1Stats, pokemon2Stats);
    spanScore.innerHTML = score;
  }
  return scoreIncrease;
}

const scoreChange = scoreIncreaser();

pokemon1Button,addEventListener('click', () => {
  scoreChange(1);
  getFighters(2);
});

pokemon2Button,addEventListener('click', () => {
  scoreChange(2);
  getFighters(2);
});
getFighters(2)