const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'car',
    {
        idcar: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        mark: {
            type: Sequelize.STRING,
            allowNull: false
        },
        model: {
            type: Sequelize.STRING,
            allowNull: false
        },
        plate: {
            type: Sequelize.STRING,
            allowNull: false
        },
        numbervin: {
            type: Sequelize.STRING,
            allowNull: false
        },
        iduser: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)


