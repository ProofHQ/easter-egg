const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/proofBreakout/index.html`)
})

console.log('Listening on 8081')
app.listen(8081)
