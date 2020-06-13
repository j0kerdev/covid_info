const db = require('./db');
const death_range = require('./death_range');

const death_case = db.sequelize.define('death_case', {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    number: db.Sequelize.INTEGER,
    date: db.Sequelize.DATE,
    active: db.Sequelize.BOOLEAN
},
{
freezeTableName: true,
timestamps: false
});


death_range.hasMany(death_case, {
    foreignKey: 'death_rangeId',
    as: 'death_range'
});

module.exports = death_case;