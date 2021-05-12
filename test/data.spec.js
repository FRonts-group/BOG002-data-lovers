import { example, anotherExample } from '../src/data.js';

// All the tests to get a pokemon and some characteristics
describe('/GET a Pokemon'), () => {
  describe('getPokemon(id)'), () => {
    it('is a function', () => {
      expect(typeof getPokemon).toBe('function');
    });
  }
  describe('getPokemon(1)'), () => {
    it('returns a pokemon', () => {
      const pokemon = new Pokemon('id', 'name', 'height', 'weight', 'abilities','image','type', 'forms');
      expect(typeof getPokemon(1)).toBe(typeof pokemon);
    });
  }
  describe('pokemon.name'), () => {
    it('is equal to ', () => {
      const pokemon = getPokemon(1);
      expect(pokemon.name).toBe("First pokemon name");
    });
  }
}
// All the tests to get a pokemon's stats
describe('/GET pokemon stats'), () => {
  describe('getPokemonStats(id)'), () => {
    it('is a function', () => {
      expect(typeof getPokemonStats).toBe('function');
    });
  }
  describe('getPokemonStats(id)'), () => {
    it('returns the stats of a pokemon', () => {
      stats = new Stats(1,1,2,3,4,5,6);
      expect(typeof getPokemonStats(1)).toBe(typeof stats);
    });
  }
}
// All the tests to get a list of pokemons
describe('/GET a list of pokemons'), () => {
  describe('getPokemons(n,arrayID)'), () => {
    it('is a function', () => {
      expect(typeof getPokemons).toBe('function');
    });
  }
  describe('getPokemon(2,[1,2])'), () => {
    it('returns a list of pokemons', () => {
      const pokemon1 = new Pokemon('id', 'name', 'height', 'weight', 'abilities','image','type', 'forms');
      const pokemon2 = new Pokemon('id', 'name', 'height', 'weight', 'abilities','image','type', 'forms');
      const pokemons = [pokemon1,pokemon2];
      expect(typeof getPokemon(2,[1,2])).toBe(typeof pokemons);
    });
  }
}

//
// /GET a Pokemon ************
// Should verify the function getPokemon().
// /GET a list of pokemons *****
// Should verify a function to get a list of pokemons.

describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
