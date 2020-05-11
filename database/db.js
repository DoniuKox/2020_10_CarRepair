const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize("heroku_c761dc0b44c8498", "bac9d0a6d6fe1e", "e0c4d0ba", {
    host: 'us-cdbr-east-06.cleardb.net',
    dialect: 'mysql',
    operatorAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize - Sequelize

module.exports = db