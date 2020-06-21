import Pokemon from '../models/Pokemon';
import * as Yup from 'yup';
import { pokemonTypes } from '../../utils/enums';

class PokemonsController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const pokemons = await Pokemon.findAll({
      attributes: ['id', 'name', 'type'],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(pokemons);
  }

  async create(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      type: Yup.string().required().oneOf(pokemonTypes),
      item: Yup.string().required(),
      weakness: Yup.string().required(),
      description: Yup.string().required(),
    });
    
    if(!(await schema.isValid(req.body))) {
      console.log(req.body)
      return res.status(400).json({ error: 'Invalid params' })
    }

    const { name, type, item, weakness, description } = req.body;
    const pokemon = await Pokemon.create({ name, type, item, weakness, description });

    return res.json(pokemon);
  }
}

export default new PokemonsController();
