const fetch = require('node-fetch');

const pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon';
let pokemons = [];
let nextUrl = '';

fetch(pokemonsUrl)
  .then(res => res.json())
  .then(json => {
    nextUrl = json.next;
    let pokemonsResponse = json.results;

    pokemonsResponse.map(pokemonResponse => {
      console.log(pokemonResponse.name);
      fetch(pokemonResponse.url)
        .then(res => res.json())
        .then(pokemonDetails => {
        });
      pokemons.push(pokemonResponse.name);
    });
  });


