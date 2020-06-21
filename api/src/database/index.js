import Sequelize from 'sequelize';

import dbConfig from '../config/database';

import Pokemon from '../app/models/Pokemon';

const models = [Pokemon];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);
    models.map((model) => model.init(this.connection));
    models.map((model) => model.associate && model.associate(this.connection.models));
  }
};

export default new Database();
