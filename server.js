const express = require('express')
const app = express()
const router = require('./routes/index')



app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(`${__dirname}/client/build`))
app.use('api/ATLive/', router)

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App is up and listening on port ${PORT}`)
})
