const Venue = require('../models/Venue')
const Hood = require('../models/Hood')

const venueController = {
    show: (req, res) => {
        Venue.findById(req.params.venueId)
            .then((venue) => {
                res.json(venue)
            })
    },
    create: (req, res) => {
        Hood.findById(req.params.hoodId)
            .then((hood) => {
                Venue.create(req.body)
                    .then(venue => {
                        hood.venues.push(venue)
                        hood.save()
                        res.json(hood)
                    })
                    // .then(hood => {
                    // })
                    .catch((err) => {
                        console.log(err)
                    })
            })
    },
    update: (req, res) => {
        Venue.findByIdAndUpdate(req.params.venueId, req.body, { new: true })
            .then((updatedVenue) => {
                res.json(updatedVenue)
            }).catch((err) => {
                console.log(err)
            })
    },
    delete: (req, res) => {
        Hood.findById(req.params.hoodId)
        .then((hood) => { 
            hood.venues.map((venue, index) => {
                return venue == req.params.venueId ? hood.venues.splice(index, 1) : null
            })
            hood.save()
        })
            .then(() => {             
                Venue.findByIdAndDelete(req.params.venueId)
                .then(() => {
                    res.json({
                        msg: `Successfully Deleted`
                    })
                })
            })
    }
}

module.exports = venueController