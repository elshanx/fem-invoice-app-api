const express = require('express')
const app = express()
const { connectDB } = require('./db/connect')

const PORT = 3000

app.get('/', (req, res) => {
  console.log({ req })
  res.send('hello home page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

!(async function () {
  try {
    await connectDB()
    console.log('connected to DATABASE')
    app.listen(PORT, () => {
      console.log(`server is listening on PORT:${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
})()
