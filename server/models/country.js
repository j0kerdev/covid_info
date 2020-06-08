const db = require('./db');
const region = require('./region');


const country = db.sequelize.define('country', {
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


    country.hasMany(region, {
        foreignKey: 'countryId'
    });

    region.belongsTo(country, { as: 'country' });


module.exports = country;