const express = require('express')
const routes = express.Router()

const productData = require('./add-product')

routes.get('/', (req, res, next) =>{
    console.log('book.js', productData.products)
    res.render('pages/prove02/book-store', {pageTitle: 'Book Store', books: productData.products})
})


exports.routes = routes