const products = require('../data/product')

exports.getProducts = ((req,res, next)=>
{
    products.fetchAll((product)=>{
        res.render('pages/ta03', {title: 'Team 03 Activity', path: '/ta03', products: products})
    })
})