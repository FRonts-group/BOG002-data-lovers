/** Class representing stats of a pokemon. */
export default class Stats {
  /**
   * Create stats of a pokemon.
   * @param {number} idPokemon - id of the pokemon.
   * @param {number} hp
   * @param {number} attack
   * @param {number} defense
   * @param {number} specialAttack
   * @param {number} specialDefense
   * @param {number} speed
   */
  constructor(idPokemon, hp, attack, defense, specialAttack, specialDefense, speed) {
    this.idPokemon = idPokemon
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.specialAttack = specialAttack;
    this.specialDefense = specialDefense;
    this.speed = speed;
  }
}
