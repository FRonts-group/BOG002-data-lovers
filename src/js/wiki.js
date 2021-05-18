import { getPokemon, getPokemonStats } from './data.js';


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
        title: {
          display: true,
          text: 'Statistics shown in bar graphs'
        }
      }
    }
  });

}

let firstPokemon = await getPokemon(12);
let firstPokemonStats = await getPokemonStats(12);
console.log(firstPokemonStats);
showPokemon(firstPokemon);
showStatsBar(firstPokemonStats);