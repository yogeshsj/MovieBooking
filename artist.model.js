const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    genre: {
        type: String,
        required: false
    },
    albums: [{
        title: String,
        releaseDate: Date,
        tracks: [{
            title: String,
            duration: String
        }]
    }],
    // Add more fields as needed
});

module.exports = mongoose.model('Artist', artistSchema);
