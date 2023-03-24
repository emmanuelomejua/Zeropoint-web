const mongoose = require('mongoose');
const { Schema, model } = mongoose

const PortfolioSchema = new Schema({

})

const Portfolio =  model('Portfolio', PortfolioSchema)

module.exports = Portfolio