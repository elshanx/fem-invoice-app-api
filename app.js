const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log({ req })
  res.send('hello home page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
  console.log('server is listening on PORT 5000')
})
