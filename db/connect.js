require('dotenv').config()
const mongoose = require('mongoose')

const DB = process.env.MONGO_DB_URI

const connectDB = (URI = DB) => mongoose.connect(URI)

module.exports = { connectDB }
