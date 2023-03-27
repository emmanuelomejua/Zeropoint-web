const mongoose = require('mongoose');
const { Schema, model } = mongoose

const SubscribeSchema = new Schema({
    name: {
        type: Array,
        required: true,
        unique: true
    },
    desc: {
        type: Array,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    }
})

const Subscribe =  model('Subscribe', SubscribeSchema)

module.exports = Subscribe