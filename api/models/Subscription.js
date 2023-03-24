const mongoose = require('mongoose');
const { Schema, model } = mongoose

const SubscribeSchema = new Schema({

})

const Subscribe =  model('Subscribe', SubscribeSchema)

module.exports = (Subscribe)