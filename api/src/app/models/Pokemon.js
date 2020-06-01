import Sequelize, { Model } from 'sequelize';

class Pokemon extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        type: Sequelize.ENUM, 
        item: Sequelize.ITEM,
        weakness: Sequelize.STRING,
        description: Sequelize.STRING,
    }, { sequelize });

    return this;
  },

  static associate(models) {
    this.belongsTo(models.Pokemon, { foreignKey: 'evolution_id', as: 'evolution' });
  }
};

export default Pokemon;
