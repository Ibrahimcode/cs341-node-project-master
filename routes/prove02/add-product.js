const express = require('express')
const routes = express.Router()

const products = []

routes.get('/book', (req, res, next)=>{
    res.render('pages/prove02/add-product', {pageTitle: 'Add Book'})
})

routes.post('/book', (req, res, next) =>{
    products.push({title: req.body.title})
    // res.status(200).render('views/pages/add-product', {pageTitle: 'Add Book'})
    res.redirect('/')
})


exports.routes = routes
exports.products = products