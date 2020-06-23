import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import PokemonsController from './app/controllers/PokemonsController';
import FilesController from './app/controllers/FilesController';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/pokemons', PokemonsController.index);
routes.post('/pokemons', PokemonsController.create);
routes.put('/pokemons/:id', PokemonsController.update);

routes.post('/upload', upload.single('avatar'), FilesController.create);

export default routes;
