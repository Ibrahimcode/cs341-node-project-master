const express = require('express')
const routes = express.Router()

const products = []

routes.get('/', (req, res, next)=>{
    res.render('pages/prove02/add-product', {pageTitle: 'Add Book'})
})

routes.post('/admin', (req, res, next) =>{
    products.push({title: req.body.title, author: req.body.author, publish: req.body.publish })
    // res.status(200).render('views/pages/add-product', {pageTitle: 'Add Book'})
    res.redirect('/book')
})


exports.routes = routes
exports.products = products