import { example, anotherExample } from '../src/data.js';

describe('Home', () => {
    // should get 8 pokemon: name, description and id. For suggestions
    it('should return', () => {
      // expect(example.getPokemons(8)).toBe('function');
    });

});

describe('Wiki', () => {
  describe('/GET Pokemon'), () => {
    it('should return', () => {
      // expect(example.getPokemons(8)).toBe('function');
    });
  }
  describe('/GET Stats'), () => {
    it('should return', () => {
      // expect(example.getPokemons(8)).toBe('function');
    });
  }
});
//
// HOME ****************
// should get 8 pokemon: name, description and id. For suggestions
// WIKI ****************
// should get the image of the pokemon
// should get the pokemon's statistics
// should get images of the evolutions
// GAME ****************
// should get the attack of two pokemon

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
