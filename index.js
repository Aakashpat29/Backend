const express = require('express')
const app = express()

require('dotenv').config()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/Patel', (req, res) => {
  res.send('Hello Patel Sahab!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
