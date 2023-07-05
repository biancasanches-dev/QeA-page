const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'bianca', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;