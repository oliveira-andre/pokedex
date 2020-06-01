import { Router } from 'express';

import PokemonsController from './app/controllers/PokemonsController';

const routes = new Router();

routes.get('/pokemons', (req, res) => {
  return res.json({ ok: true });
});

export default routes;
