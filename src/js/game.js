import { getRandomPokemons, getPokemonStats} from './data.js';

const pokemonContainer1 = document.querySelector('#pokemon1');
const pokemonContainer2 = document.querySelector('#pokemon2');
const pokemon1Button = document.getElementById('first');
const pokemon2Button = document.getElementById('second');
const answerCotainer = document.getElementById('correct-answer');
const instructionsCotainer = document.getElementById('instructions-container');
const howToPlay = document.getElementById('howToPlay');
const instructionsButton = document.getElementById('intruction-hide-button');
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

/*
 * Change the compared stat in the page and saves the pokemon's stat to be compared
*/
const changeComparedStat = (comparedStat) =>{
  const statsName = ["Health Points", "Attack Points", "Defense Points", "Special Attack Points", "Special Defense Points", "Speed Points"];
  statContainer.innerHTML = `Which pokemon has more ${statsName[comparedStat]}`;
  pokemon1ComparedStat = Object.values(pokemon1Stats)[comparedStat];
  pokemon2ComparedStat = Object.values(pokemon2Stats)[comparedStat];
}

const showCorrectAnswer = (answer) => {
  if(answer === 0){
    answerCotainer.innerHTML = "Wrong Answer";
    answerCotainer.classList.remove('correct')
    answerCotainer.classList.add('wrong')
  }else{
    answerCotainer.innerHTML = "Correct Answer";
    answerCotainer.classList.remove('wrong')
    answerCotainer.classList.add('correct')
  }
};
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
    const answer = verifyChoice(selectedButton, pokemon1ComparedStat, pokemon2ComparedStat);
    showCorrectAnswer(answer);
    score = score + answer;
    spanScore.innerHTML = score;
  }
  return scoreIncrease;
}

const scoreChange = scoreIncreaser();

const newFight = async () => {
  await getFighters()
  answerCotainer.innerHTML = "VS";
  answerCotainer.classList.remove('wrong');
  answerCotainer.classList.remove('correct');
  pokemon1Button.disabled = false;
  pokemon2Button.disabled = false;
};

pokemon1Button.addEventListener('click', function() {
  pokemon1Button.disabled = "disabled";
  pokemon2Button.disabled = "disabled";
  scoreChange(0);
  setTimeout(newFight, 1000);
});

pokemon2Button.addEventListener('click', () => {
  pokemon1Button.disabled = "disabled";
  pokemon2Button.disabled = "disabled";
  scoreChange(1);
  setTimeout(newFight, 1000);
});

instructionsButton.addEventListener('click', () => {
  instructionsCotainer.style.display = 'none';
});

howToPlay.addEventListener('click', () =>{
  instructionsCotainer.style.display = 'block';
});
getFighters()
