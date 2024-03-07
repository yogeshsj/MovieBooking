
const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming you have a User model
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: false
    }
});

module.exports = mongoose.model('Genre', genreSchema);
