const Hood = require('./hoodController')
const hoodController = {
    index: (req,res) => {
        Hood.find().then(hoods => {
            res.json(hoods)
        }).catch((err) => {
            console.log(err)
        })
    },
    create: (req,res) => {

    },
    show: (req,res) => {
        
    } 
}

module.exports = hoodController