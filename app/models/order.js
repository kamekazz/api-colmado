const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product:[ { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
    created:  {type: Date, default: Date.now},
});

module.exports = mongoose.model('Order', orderSchema);