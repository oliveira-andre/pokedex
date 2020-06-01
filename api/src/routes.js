import { Router } from 'express';

import PokemonsController from './app/controllers/PokemonsController';

const routes = new Router();

routes.get('/pokemons', PokemonsController.index);

export default routes;
