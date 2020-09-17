module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  port: '5433',
  username: 'postgres',
  password: 'docker',
  database: 'hey-gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
