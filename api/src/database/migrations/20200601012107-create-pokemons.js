'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pokemons', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      type: {
        type: Sequelize.ENUM,
        values: [
          'bug', 'dark', 'dragon', 'eletric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass',
          'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'
        ],
      },
      item: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      weakness: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      evolution_id: {
        type: Sequelize.INTEGER,
        references: { model: 'pokemons', key: 'id' },
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pokemons');
  }
};
