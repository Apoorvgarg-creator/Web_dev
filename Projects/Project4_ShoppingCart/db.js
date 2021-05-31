const {Sequelize, DataTypes} = require('sequelize')
const db =  new Sequelize({
    database: 'shopdb',
    username: 'shopper',
    password: 'Shoppass@24',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min:0,
        max:5
    }
})

const User = db.define('users', {
    id: {
        type : DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    name : {
        type: DataTypes.STRING(20),
        allowNull:false
    }
})

const Product = db.define('products',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name : {
        type:DataTypes.STRING(30),
        allowNull: false
    },
    manufacturer: DataTypes.STRING(40),
    price: {
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0.0
    }
})

db.sync()
    .then(() => {
        console.log("Databases Created")
    })
    .catch((err) => {
        console.error(err)
    })

exports = module.exports = {
    User, Product
}