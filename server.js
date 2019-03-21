const express = require('express')
const app = express()
const routes = require('./routes/index')
const methodOverride = require('method-override')


app.use('/', routes)
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.json())

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App is up and listening on port ${PORT}`)
})
