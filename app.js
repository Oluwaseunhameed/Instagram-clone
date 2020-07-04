const express = require('express')
const mongoose = require('mongoose')
const app = express()

const { MONGOURL } = require("./keys.js")

const PORT = 5000

require("./models/user")

app.use(express.json())
app.use(require('./routes/auth'))

mongoose.connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('connected', () => console.log('Connected to database successfully'))
mongoose.connection.on('error', (err) => console.log('Error connecting to database', err))

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))

// UExXx6a04AoMppnS