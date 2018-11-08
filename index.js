const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/src/proofBreakout/index.html`)
})

console.log('Listening on 8081')
app.listen(8081)
