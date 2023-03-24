const mongoose = require('mongoose');
const { Schema, model } = mongoose

const NewsSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true})

const Newsletter =  model('Newsletter', NewsSchema)

module.exports = Newsletter
