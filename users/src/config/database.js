require('dotenv').config({path: '../.env'});
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('e-commerce-app', 'root', process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
});
module.exports = sequelize;