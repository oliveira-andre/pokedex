module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: 'pokedex',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
