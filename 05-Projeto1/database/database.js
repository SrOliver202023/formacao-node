const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'Adm23082002', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;