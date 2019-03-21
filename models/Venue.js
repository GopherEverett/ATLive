const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Venue = new Schema({
    name: String,
    address: String,
    website: String,
    phone: String,
    imgLink: String,
});

module.exports = mongoose.model('Venue', Venue)