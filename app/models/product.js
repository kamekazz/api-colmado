const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, require: true},
    barcode: { type: Number, require: true},
    price: { type: Number, require: true},
    quantity: { type: Number, default: 1 },
    productImage: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);