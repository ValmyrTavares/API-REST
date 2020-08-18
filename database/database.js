const Sequelize = require('sequelize')
const connection = new Sequelize('guiagames','root', 'Amanda@230406',{
    host:"localhost",
    dialect: 'mysql',
    timezone: '-03:00'
})
module.exports = connection;