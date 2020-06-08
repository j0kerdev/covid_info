'use strict';

const Sequelize = require('sequelize');
const config = require('../database/config');

const db = {};

const sequelize = new  Sequelize.Sequelize(config.dbname, 
    config.username, 
    config.password,
    {
        host: config.host,
        dialect: config.dialect
    }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db; 