// database/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('testdb', 'root', '123456789', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;
