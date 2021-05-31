const route = require('express').Router();
const Product = require('../../db').Product
route.get('/', (req,res) => {
    // Get all products
    Product.findAll()
    .then((products) => {
        res.status(200).send(products)
    }).catch((err) => {
        res.status(500).send({
            error: "Could not retrieve any products"
        })
    })
})

route.post('/', (req,res) => {
    // add a product
    if(isNaN(req.body.price)){
       return res.status(403).send({
            error: "Price not valid"
        })
    }
    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price : parseFloat(req.body.price)
    }).then((product) => {
        res.status(200).send(product)
    }).catch((err) => {
        res.status(500).send({
            error: "Failed adding the product !"
        })
    })
})

exports = module.exports = route