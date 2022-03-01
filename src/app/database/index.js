const { Sequelize } = require('sequelize')

const db = {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    pass: process.env.DB_PASSWORD
}

const sequelize = new Sequelize(db.name, db.user, db.pass, {
    dialect: "mysql",
    host: db.host,
    logging: false
})

module.exports = sequelize