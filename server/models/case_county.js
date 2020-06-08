const db = require('./db');



const case_county = db.sequelize.define('case_county', {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: db.Sequelize.DATE,
    cases: db.Sequelize.INTEGER
},
{
freezeTableName: true,
timestamps: false
});


module.exports = case_county;