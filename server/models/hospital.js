const db = require('./db');



const hospital = db.sequelize.define('hospital', {
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


  

    


module.exports = hospital;