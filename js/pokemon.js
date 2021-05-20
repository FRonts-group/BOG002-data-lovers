  /** Class representing a pokemon. */
export default class Pokemon {
    /**
     * Create a pokemon.
     * @param {number} id - The identifier.
     * @param {string} name - The name.
     * @param {number} height - The height of this Pokémon in centimeters.
     * @param {number} weight - The weight of this Pokémon in kilograms.
     * @param {array[ability]} abilities - A list of abilities this Pokémon could potentially have.
     * @param {string} image - The url of the pokemon image.
     * @param {array[type]} types - A list of details showing types this Pokémon has.
     * @param {array[form]} forms - A list of forms this Pokémon can take on.
     * @param {string} moves - A list of moves of the pokemon.
     */
  constructor(id, name, height, weight, abilities, image, types, forms, moves) {
    this.id = id;
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.image = image;
    this.types = types;
    this.forms = forms;
    this.moves = moves;
  }
}

