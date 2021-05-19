import Pokemon from './pokemon.js';
import Stats from './stats.js';
/**
   * Get a pokemon by id
   * @param {string} - The id of a pokemon or the name.
   * @return {pokemon} A pokemon object.
   */
  export const getPokemon = async(idPokemon) => {
    try{
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;
      const resp = await fetch(pokemonUrl);
      if (resp.status != '200') return false;
      if (!resp.ok) throw 'The request could not be fulfilled';
      const { id, name, height, weight, abilities, types, forms, sprites, moves } = await resp.json();

      //Get only the elements you need from each tribute.
      let nameNew = name.replace(/\b\w/g, l => l.toUpperCase());
      nameNew = nameNew.replace('-', ' ');

      let abilitiesNew = []; let typesNew = []; let formsNew = [];
      //Remove -  from the text and change the first letters to uppercase.
      abilities.forEach(element => {
        let abilityName = element.ability.name;
        abilityName = abilityName.replace('-', ' ');
        abilityName = abilityName.replace(/\b\w/g, l => l.toUpperCase());
        abilitiesNew.push(abilityName);
      });
      types.forEach(element => typesNew.push(element.type.name.replace(/\b\w/g, l => l.toUpperCase())));
      forms.forEach(element => formsNew.push(element.name.replace(/\b\w/g, l => l.toUpperCase())));

      //Concatenate all movements in a string
      let descriptionNew = 'Moves: ';
      moves.forEach(element => {
        descriptionNew += `${element.move.name}, `;
      })
      // console.log(descriptionNew);
      let pokemon = new Pokemon(parseInt(id), nameNew, fromHectograms(height), fromDecimeters(weight),
        abilitiesNew, sprites.front_default, typesNew, formsNew, descriptionNew);

      return pokemon;
    }
    catch(err){
      throw err;
    }

}
/**
   * Get a pokemon stats by id
   * @param {string} - The id of a pokemon or the name.
   * @return {stats} A pokemon stats object.
   */
export const getPokemonStats = async (idPokemon) => {
  try {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;
    const resp = await fetch(pokemonUrl);
    let pokemonStats = new Stats();

    if (!resp.ok) throw 'The request could not be fulfilled';

    const { stats } = await resp.json();
    pokemonStats.idPokemon = idPokemon;
    stats.forEach((element) => {
      if (element.stat.name === "hp"){
        pokemonStats.hp = element.base_stat;
      }
      else if (element.stat.name === "attack") {
        pokemonStats.attack = element.base_stat;
      }
      else if (element.stat.name === "defense") {
        pokemonStats.defense = element.base_stat;
      }
      else if (element.stat.name === "special-attack") {
        pokemonStats.specialAttack = element.base_stat;
      }
      else if (element.stat.name === "special-defense") {
        pokemonStats.specialDefense = element.base_stat;
      }
      else if (element.stat.name === "speed") {
        pokemonStats.speed = element.base_stat;
      }
    });

    return pokemonStats;
  }
  catch (err) {
    throw err;
  }

}
/**
 * Get X amount of pokemons
 * @param {number} - The amount of pokemon.
 * @param {array[number]} - An array of pokemon ids
 * @return {array[pokemon]} A list of pokemon objects.
 */
export const getPokemons = async (idPokemon, amount) => {
  let pokemons = [];
  for (let i = idPokemon; i <= idPokemon+amount ; i++){
    let pokemon = await getPokemon(i);
    pokemons.push(pokemon);
  }
  return pokemons;
}
/**
 * Get pokemons by type
 * @param {number} - The amount of pokemon.
 * @param {string} - A type.
 * @return {array[pokemon]} A list of pokemon objects of the same type.
 */
export const getPokemonsbyType = async (amount, type) => {
  let pokemons = [];
  let pokemonNameList;
  type = type.toLowerCase();
  try{
    const typeUrl = `https://pokeapi.co/api/v2/type/${type}`;
    const resp = await fetch(typeUrl);
    if (!resp.ok) throw 'The request could not be fulfilled';
    let { pokemon } = await resp.json();
    //  Shuffle the pokemon array
    for (let i = pokemon.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pokemon[i], pokemon[j]] = [pokemon[j], pokemon[i]];
    }
    pokemon = pokemon.slice(0,amount);
    pokemonNameList = pokemon.map((element) => element.pokemon.name);
  }
  catch (err) {
    throw err;
  }

  for (let i = 0; i < amount ; i++){
    let pokemon = await getPokemon(pokemonNameList[i]);
    pokemons.push(pokemon);
  }
  return pokemons;
}
/**
 * Get random pokemon
 * @param {number} - The amount of pokemon.
 * @return {array[pokemon]} A list of pokemon objects
 */
export const getRandomPokemons = async (amount) => {
  let pokemons = [];
  for (let i = 1; i <= amount ; i++){
    let randomId = Math.floor(Math.random() * 149) + 1;
    let pokemon = await getPokemon(randomId);
    pokemons.push(pokemon);
  }
  return pokemons;
}
  /**
   * Convert the weight of hectograms to kilograms.
   * @param {number} - The weight in hectograms.
   * @return {number} - The weight in kilograms.
   */
const fromHectograms = (hect) => {
  return hect*10;
}
  /**
   * Convert the height of decimetres to centimeters.
   * @param {number} - The height in decimetres.
   * @return {number} - The height in centimeters.
   */
const fromDecimeters = (dec) => {
  return dec/10;
}