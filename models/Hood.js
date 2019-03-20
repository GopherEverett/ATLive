const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Hood = new Schema({
    name: String,
    venues: [Venue]
});

const Venue = new Schema({
    name: String,
    address: String,
    website: String,
    phone: String,
    imgLink: String,
});

module.exports = {
    Hood: mongoose.model('Hood', Hood),
    Venue: mongoose.model('Venue', Venue)
}