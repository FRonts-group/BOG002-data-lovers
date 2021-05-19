import { getPokemon, getPokemonStats, getPokemonsbyType } from './data.js';

let containerCarousel = document.querySelector('#suggested-pokemon');
let status = document.querySelector(".statusSearch");
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
  let moves = document.querySelector('.moves');
  const pokemonsByType = await getPokemonsbyType(8, firstPokemon.types[0]);
  for (let item of pokemonsByType) {
    moves.innerText = item.moves;
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
      requestPokemon(card.value);
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }));
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
const requestPokemon = async (id) => {
  try {
    id = id.toLowerCase();
    let newPokemon = await getPokemon(id);
    if (typeof newPokemon != 'object' || newPokemon == false) {
      $status.style.color = "red";
      $status.innerHTML = `<p>No results were found. Please try again.</p>`;
    } else {
      showPokemon(newPokemon);
      requestStats(id);
    }
  }

  catch (err) {
    // let message = err.statusText || "An error occurred";
    // status.style.color = "red";
    // status.innerHTML = `<p>No results were found. Please try again.</p>`;

  }
}
const requestStats = async (id) =>{
  try {
  localStorage.setItem("pokemon", id);
  let newPokemonStats = await getPokemonStats(id);
  showStatsBar(newPokemonStats);
  showRadarChart(newPokemonStats);
  showSuggestedPokemons();
  }

  catch (err) {
    // let message = err.statusText || "An error occurred";
    // $status.style.color = "red"
    // $status.innerHTML = `<p>No results were found. Please try again.</p>`;
  }
}
// show a pokemon
let idPokemon = localStorage.getItem("pokemon") || 1;
let firstPokemon = await getPokemon(idPokemon);
showPokemon(firstPokemon);
requestStats(idPokemon);

const d = document;
let $status = d.querySelector(".statusSearch");

d.addEventListener("keypress", async e =>{
  if(e.target.matches("#search")){
    if(e.key === "Enter"){
      $status.innerHTML = ``;
      requestPokemon(e.target.value);
    }
  }
  });


