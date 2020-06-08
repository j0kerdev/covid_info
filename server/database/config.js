module.exports = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'archive2019',
    dbname: process.env.DB_NAME || 'covid_info',
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DIALECT || 'mysql'
}