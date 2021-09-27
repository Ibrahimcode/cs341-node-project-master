const products = require('../model/product')

exports.getProducts((req, res, next)=>{
    product.fetchAll((products)=>{
        res.render('pages/ta03', {title: 'Team 03 Activity', 
            path: '/ta03',
            products: products,
        }, )
    })
})