const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const itemSchema = new Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    owner_info: {
        username: { type: String, required: true }
    }
}, {collection: 'Item'});

const ItemModel = model('Item', itemSchema);

module.exports = ItemModel;