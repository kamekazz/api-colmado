const express = require('express')
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require("mongoose");




const productRoutes = require('./app/routes/products')
const orderRoutes = require('./app/routes/orders')

mongoose.connect('mongodb://localhost:27017/myappapi', function () {
 console.log('mongodb is up and conetid');
    
});


///routes which shonld hanle requests
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );
      if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
      }
});
app.use('/products', productRoutes )
app.use('/orders', productRoutes )

app.use( (req, res, next) => {
    const error = new Error('not fond route');
    error.status= 404;
    next(error)
});

app.use((error, req, res, next) => {
    res.status(err.status || 500 );
    res.json({
        error:{
            message: error.message
        }
    })
});


module.exports= app;