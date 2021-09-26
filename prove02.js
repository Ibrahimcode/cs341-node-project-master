const express = require('express')

const bodyParser = require('body-parser')

const app = express()


const path = require('path')

const productData = require('./routes/prove02/add-product')
const bookStoreRoute = require('./routes/prove02/book')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))

// for serving static files like css
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',productData.routes)
app.use('/',bookStoreRoute.routes)

app.use((req, res, next) => {
    res.status(404).render('pages/404', {pageTitle: 'Page Not Found'})
} )





app.listen(3200)