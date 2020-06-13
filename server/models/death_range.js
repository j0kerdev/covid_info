const db = require('./db');



const death_range = db.sequelize.define('death_range', {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: db.Sequelize.STRING,
    active: db.Sequelize.BOOLEAN
},
{
freezeTableName: true,
timestamps: false
});



module.exports = death_range;