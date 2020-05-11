const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'workshop',
    {
        idworkshop: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idaddress: {
            type: Sequelize.TINYINT,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        fiscalid: {
            type: Sequelize.STRING,
            allowNull: false
        },
        iduser: {
            type: Sequelize.TINYINT,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)


