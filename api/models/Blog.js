const mongoose = require('mongoose')

const { Schema, model } = mongoose

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
}, {timestamps: true})

const Blog = ('Blog', BlogSchema)
module.exports = model(Blog)
