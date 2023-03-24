const mongoose = require('mongoose');
const { Schema, model } = mongoose

const ExpertSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    }
})

const Expertise =  model('Expertise', ExpertSchema)

module.exports = Expertise