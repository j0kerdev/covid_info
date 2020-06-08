const db = require('./db');
const case_county = require('./case_county');


const county = db.sequelize.define('county', {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: db.Sequelize.STRING,
    active: db.Sequelize.BOOLEAN,
    people: db.Sequelize.DOUBLE
},
{
freezeTableName: true,
timestamps: false
});



    county.hasMany(case_county, {
    foreignKey: 'countyId'
    });

    case_county.belongsTo(county, { as: 'county' });


module.exports = county;