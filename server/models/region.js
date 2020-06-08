const db = require('./db');
const country = require('./country');
const county = require('./county');
const case_region = require('./case_region');


const region = db.sequelize.define('region', {
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

},);

    region.hasMany(county, {
        foreignKey: 'regionId'
    });
    region.hasMany(case_region, {
        foreignKey: 'regionId'
    });

  
  


module.exports = region;