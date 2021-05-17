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
