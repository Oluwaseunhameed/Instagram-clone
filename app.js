const express = require('express')
const mongoose = require('mongoose')
const app = express()

const { MONGOURL } = require("./keys.js")

const PORT = 5000

mongoose.connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('connected', () => console.log('Connected to database successfully'))
mongoose.connection.on('error', (err) => console.log('Error connecting to database', err))

require("./models/user")
require("./models/post")

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
