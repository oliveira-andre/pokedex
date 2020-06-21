import Pokemon from '../models/Pokemon';

class PokemonsController {
  async index(req, res) {
    const pokemons = await Pokemon.findAll({
      attributes: ['id', 'name', 'type'],
    });

    return res.json(pokemons);
  }

  async create(req, res) {
    const pokemon = await Pokemon.create();

    return res.json(pokemon);
  }
}

export default new PokemonsController();
