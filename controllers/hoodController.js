const Hood = require('./hoodController')
const hoodController = {
    index: (req,res) => {
        Hood.find().then(hoods => {
            res.json(hoods)
        }).catch((err) => {
            console.log(err)
        })
    }
}

module.exports = hoodController