const Hood = require('../models/Hood')
const hoodController = {
    index: (req, res) => {
        Hood.find()
        .then(hoods => {
            res.json(hoods)
        }).catch((err) => {
            console.log(err)
        })
    },
    create: (req, res) => {
        console.log(req.body)
        Hood.create({ name: "test"})
        .then(hood => {
            res.json(hood)
        }).catch((err) => {
            console.log(err)
        })
    },
    show: (req, res) => {
        Hood.findById(req.params.hoodId).populate('venues')
            .then((hood) => {
                res.json(hood)
            }).catch((err) => {
                console.log(err)
            })
    }
}

module.exports = hoodController