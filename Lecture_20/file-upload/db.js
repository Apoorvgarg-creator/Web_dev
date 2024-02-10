const { Sequelize, DataTypes } = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/users.db'
})

const Users  = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username : {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password : {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar : {
        type: DataTypes.STRING,
        allowNull: true
    }
})


exports = module.exports = { db , Users }