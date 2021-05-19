import { getPokemon, getPokemonStats, getPokemonsbyType } from './data.js';

let containerCarousel = document.querySelector('#suggested-pokemon');

// show the pokemon in wiki
const showPokemon = function (pokemon) {
  let image = document.querySelector('.image-pokemon');
  let title = document.querySelector('.title');
  let table = document.querySelector('.table');

  title.innerText = pokemon.name;
  image.src = pokemon.image;
  table.innerHTML = `
  <tr>
  <td class="info-subtitle">Height</td>
  <td class="info-subtitleContent">${pokemon.height} cm</td>
  </tr>
    <tr>
    <td class="info-subtitle">Weight</td>
    <td class="info-subtitleContent">${pokemon.weight} kg</td>
    </tr>
    <tr>
      <td class="info-subtitle">Abilities</td>
      <td class="info-subtitleContent">${pokemon.abilities.join(', ')}</td>
    </tr><tr>
    <td class="info-subtitle">Types</td>
      <td class="info-subtitleContent">${pokemon.types.join(', ')}</td>
      </tr><tr>
      <td class="info-subtitle">Forms</td>
      <td class="info-subtitleContent">${pokemon.forms.join(', ')}</td>
    </tr>`;
  }
const showStatsBar = function (pokemonStats) {
  var ctxBar = document.getElementById('barChart');

  var barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'],
      datasets: [{
        label: '# Stat',
        data: [pokemonStats.hp, pokemonStats.attack, pokemonStats.defense, pokemonStats.specialAttack, pokemonStats.specialDefense, pokemonStats.speed],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Statistics shown in bar graphs'
        }
      }
    }
  });

}

const showSuggestedPokemons = async () => {
  const pokemonsByType = await getPokemonsbyType(8, firstPokemon.types[0]);
  console.log(pokemonsByType)
  for (let item of pokemonsByType) {

    containerCarousel.innerHTML += `
    <div class="pokemon-card">
    <img src=${item.image} alt="Pokemon">
    <div class="pokemon-info--container">
    <h3>${item.name}</h3>
    Height: ${item.height} cm <br>
    Weight: ${item.weight} kg </p>
    <button>More</button>
    </div>
    </div>`;
  }
};

const showRadarChart = function (pokemonStats) {
  var ctx = document.getElementById('radarChart');

  var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'],
      datasets: [{
        label: 'Pokemon Stats',
        data: [pokemonStats.hp, pokemonStats.attack, pokemonStats.defense, pokemonStats.specialAttack, pokemonStats.specialDefense, pokemonStats.speed],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: `${firstPokemon.name} Stats`
        }
      }
    }
  });
}
// show a pokemon
let idPokemon = localStorage.getItem("pokemon") || 1;
let firstPokemon = await getPokemon(idPokemon);
let firstPokemonStats = await getPokemonStats(idPokemon);
// console.log(firstPokemonStats);
showPokemon(firstPokemon);
showStatsBar(firstPokemonStats);


const d = document;
let $status = d.getElementsByClassName("statusSearch");

d.addEventListener("keypress", async e =>{
  if(e.target.matches("#search")){
    if(e.key === "Enter"){
      try{
          let query = e.target.value.toLowerCase();
          let newPokemon = await getPokemon(query);
          if (typeof newPokemon != 'object') {
            $status.innerHTML = `<p>No existen resultados</p>`;
            console.log('No existen resultados');
          } else {
            localStorage.setItem("pokemon", query);
            let newPokemonStats = await getPokemonStats(query);
            showPokemon(newPokemon);
            showStatsBar(newPokemonStats);
          }
      }

      catch(err){
        let message = err.statusText || "An error occurred";
        $status.innerHTML = `<p>Error ${err.status}:${message}</p><p>No existen resultados</p>`;
      }
    }
  }
  });


