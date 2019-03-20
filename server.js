const express = require('express')
const app = express()
const router = require('./routes/index')
const methodOverride = require('method-override')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.send("Hello World")
})
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App is up and listening on port ${PORT}`)
})
