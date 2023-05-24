const express = require('express')
const app = express()
const port = 3001

app.use(express.urlencoded())
app.use(express.json())

app.listen(port)