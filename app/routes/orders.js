const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling get request to /Order'
    })
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'handling posy request to /orders',
        order: order
    })
});

router.get('/:ordersId', (req, res, next) => {
    const id = req.params.ordersId
    if (id === 'special') {
        res.status(200).json({
            message: 'you disco a new orders',
            id: id
        })
    } else {
        res.status(200).json({
            message:'you passed an id unnod'
        })
    }
});

router.patch('/:ordersId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated orders'
    })
});

router.delete('/:ordersId', (req, res, next) => {
    res.status(200).json({
        message: 'delete orders'
    })
});

module.exports = router;