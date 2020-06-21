import Sequelize, { Model } from 'sequelize';

class Pokemon extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        type: Sequelize.STRING, 
        item: Sequelize.STRING,
        weakness: Sequelize.STRING,
        description: Sequelize.STRING,
    }, { sequelize });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
    this.belongsTo(models.Pokemon, { foreignKey: 'evolution_id', as: 'evolution' });
  }
}

export default Pokemon;
