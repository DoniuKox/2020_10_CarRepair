const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'address',
    {
        idaddress: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        addressline1: {
            type: Sequelize.STRING,
            allowNull: false
        },
        addressline2: {
            type: Sequelize.STRING,
            allowNull: false
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false
        },
        postcode: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)


