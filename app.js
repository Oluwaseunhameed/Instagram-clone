const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 5000
const { MONGOURL } = require("./config/keys.js")

const PORT = 5000

mongoose.connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('connected', () => console.log('Connected to database successfully'))
mongoose.connection.on('error', (err) => console.log('Error connecting to database', err))

require("./models/user")
require("./models/post")

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))

if (process.env.NODE_ENV == "production") {
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
