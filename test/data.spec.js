import { getPokemon, getPokemons, getPokemonsbyType, getRandomPokemons, fromHectograms, fromDecimeters } from '../src/js/data.js';
import Pokemon from '../src/js/pokemon.js';
// import Stats from '../src/js/stats.js';

// All the tests to get a pokemon and some characteristics
describe('/GET a Pokemon', () => {
  it('is a function', () => {
      expect(typeof getPokemon).toBe('function');
  });
  describe('getPokemon(1)', () => {
    it('returns a pokemon', () => {
      const pokemon = new Pokemon('id', 'name', 'height', 'weight', 'abilities','image','type', 'forms');
      expect(typeof getPokemon(1)).toBe(typeof pokemon);
    });
  });
  describe('pokemon.name', () => {
    it('is equal to ', () => {
      const pokemon = getPokemon(1);
      expect(pokemon.name).toBe("First pokemon name");
    });
  });
});
// All the tests to get a pokemon's stats
// describe('/GET pokemon stats'), () => {
//   describe('getPokemonStats(id)'), () => {
//     it('is a function', () => {
//       expect(typeof getPokemonStats).toBe('function');
//     });
//   }
//   describe('getPokemonStats(id)'), () => {
//     it('returns the stats of a pokemon', () => {
//       const stats = new Stats(1,1,2,3,4,5,6);
//       expect(typeof getPokemonStats(1)).toBe(typeof stats);
//     });
//   }
// }
// All the tests to get a list of pokemons
describe('/GET a list of pokemons', () => {
  describe('getPokemons(n,arrayID)', () => {
    it('is a function', () => {
      expect(typeof getPokemons).toBe('function');
    });
  });
  describe('getPokemons(n,ids)', () => {
    it('returns a list of pokemons', () => {
      const pokemon1 = new Pokemon('id', 'name', 'height', 'weight', 'abilities','image','type', 'forms');
      const pokemon2 = new Pokemon('id', 'name', 'height', 'weight', 'abilities','image','type', 'forms');
      const pokemons = [pokemon1,pokemon2];
      expect(typeof getPokemons(2,[1,2])).toBe(typeof pokemons);
    });
  });
});
// All the test to get a list of pokemons by type
describe('/GET a list of pokemons by type', () => {
  describe('getPokemonsbyType(n,type)', () => {
    it('is a function', () => {
      expect(typeof getPokemonsbyType).toBe('function');
    });
  });
  describe('getPokemonsbyType(n,type)', () => {
    it('returns a list of pokemons', () => {
      const pokemon1 = new Pokemon('id', 'name', 'height', 'weight', 'abilities','image','type', 'forms');
      const pokemon2 = new Pokemon('id', 'name', 'height', 'weight', 'abilities','image','type', 'forms');
      const pokemons = [pokemon1,pokemon2];
      expect(typeof getPokemonsbyType(2,'fairy')).toBe(typeof pokemons);
    });
  });
});
// All the test to get a list of random pokemons
describe('/GET a list of  random pokemons', () => {
  describe('getRandomPokemons(n)', () => {
    it('is a function', () => {
      expect(typeof getRandomPokemons).toBe('function');
    });
  });
  describe('getRandomPokemons(n)', () => {
    it('returns a list of pokemons', () => {
      const pokemon1 = new Pokemon('id', 'name', 'height', 'weight', 'abilities','image','type', 'forms');
      const pokemon2 = new Pokemon('id', 'name', 'height', 'weight', 'abilities','image','type', 'forms');
      const pokemons = [pokemon1,pokemon2];
      expect(typeof getRandomPokemons(2)).toBe(typeof pokemons);
    });
  });
});
// Tests to change metrics.
describe('Hectograms to kilograms', () => {
  describe('fromHectograms(weight)', () => {
    it('is a function', () => {
      expect(typeof fromHectograms).toBe('function');
    });
  });
  describe('fromHectograms(2)', () => {
    it('Converts 2 hectograms to 0.2 kilograms', () => {
      expect(fromHectograms('2')).toBe('0.2');
    });
  });
});
describe('Decimeters to centimeters', () => {
  describe('fromDecimeters(weight)', () => {
    it('is a function', () => {
      expect(typeof fromDecimeters).toBe('function');
    });
  });
  describe('fromDecimeters(2)', () => {
    it('Converts 2 decimeters to 20 centimeters', () => {
      expect(fromDecimeters('2')).toBe('20');
    });
  });
});

//
// /GET a Pokemon ************
// Should verify the function getPokemon().
// /GET a list of pokemons *****
// Should verify a function to get a list of pokemons.

// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
