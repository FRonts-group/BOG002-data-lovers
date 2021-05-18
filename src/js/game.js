import { getRandomPokemons, getPokemonStats} from './data.js';

const pokemonContainer1 = document.querySelector('#pokemon1');
const pokemonContainer2 = document.querySelector('#pokemon2');
const pokemon1Button = document.getElementById('second');
const pokemon2Button = document.getElementById('first');
const spanScore = document.querySelector('#spanScore');
const statContainer = document.querySelector('#statCompared');
let pokemon1;
let pokemon2;
let pokemon1Stats;
let pokemon2Stats;
let pokemon1ComparedStat = 0;
let pokemon2ComparedStat = 0;

/*
 * Change the fighter in the page
*/
const changeFighter = (pokemon, pokemonContainer, pokemonButton) => {
  const imageUrl = pokemon.image;
  const pokemonName =  pokemon.name;
  pokemonContainer.innerHTML = `
    <img src="${imageUrl}" alt="Pokemon1">
    <h3>${pokemonName}</h3>
  `
  pokemonButton.innerHTML =`${pokemonName}<span class="logo-container" ></span>`;
};

const changeComparedStat = (comparedStat) =>{
  const statsName = ["Health Points", "Attack Points", "Defense Points", "Special Attack Points", "Special Defense Points", "Speed Points"];
  statContainer.innerHTML = `Which pokemon has more ${statsName[comparedStat]}`;
  pokemon1ComparedStat = Object.values(pokemon1Stats)[comparedStat];
  pokemon2ComparedStat = Object.values(pokemon2Stats)[comparedStat];
}

/*
 * Get the Fighters and their stats
*/
const getFighters = async () => {
  let pokemons = await getRandomPokemons(2);
  pokemon1 = pokemons[0];
  pokemon2 = pokemons[1];
  pokemon1Stats = await getPokemonStats(pokemon1.id);
  pokemon2Stats = await getPokemonStats(pokemon2.id);
  changeFighter(pokemon1, pokemonContainer1, pokemon1Button);
  changeFighter(pokemon2, pokemonContainer2, pokemon2Button);
  let comparedStat = Math.floor(Math.random() * 6);
  changeComparedStat(comparedStat);
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
    score = score + verifyChoice(selectedButton, pokemon1ComparedStat, pokemon2ComparedStat);
    spanScore.innerHTML = score;
  }
  return scoreIncrease;
}

const scoreChange = scoreIncreaser();


pokemon1Button.addEventListener('click', function() {
  scoreChange(0);
  getFighters()
});

pokemon2Button.addEventListener('click', () => {
  scoreChange(1);
  getFighters()
});

getFighters()
