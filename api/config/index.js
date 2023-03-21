'use strict'

require('dotenv').config()

const mongoose = require('mongoose')
const {log, error} = require('console')
const {set, connect, on} = mongoose

set('strictQuery', true)

const db_uri = process.env.LOCAL_DB_URI

connect(db_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>log('DB successfully connected'))
.catch((err)=>error(err))