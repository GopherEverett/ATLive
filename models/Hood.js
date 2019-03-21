const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const Hood = new Schema({
    name: String,
    venues: [{
        type: Schema.Types.ObjectId,
        ref: "Venue"
    }]
});
module.exports = mongoose.model('Hood', Hood)
    