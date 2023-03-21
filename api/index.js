'use strict'

require('dotenv').config()

const connectBD = require('./config/index')

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const {error, log} = require('console')
const {json, urlencoded} = express

const app = express()

app.use(morgan('common'))
app.use(json())
app.use(urlencoded({extended: true}))

app.use(cors({
    origin: '*',
    methods: ['PUT', 'DELETE', 'POST', 'PATCH', 'GET'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

const port = process.env.PORT

app.listen(port, (err)=> {
    if(!err){
        log(`Server active at port ${port}`)
    } else {
        error('err.message')
    }
})