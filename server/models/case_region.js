const db = require('./db');
const hospital = require('./hospital');


const case_region = db.sequelize.define('case_region', {
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


case_region.belongsTo(hospital, { foreignKey: 'hospitalId',  as: 'case_region' });



module.exports = case_region;