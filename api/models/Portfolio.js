const mongoose = require('mongoose');
const { Schema, model } = mongoose

const PortfolioSchema = new Schema({

})

const Portfolio = ('Portfolio', PortfolioSchema)

module.exports = model(Portfolio)