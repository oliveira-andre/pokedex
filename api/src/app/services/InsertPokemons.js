const fetch = require('node-fetch');

const pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon';
let pokemons = [];

fetch(pokemonsUrl)
  .then(res => res.json())
  .then(json => {
    pokemons = json;
  });


