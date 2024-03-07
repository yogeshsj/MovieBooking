// user.model.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // Define user schema fields
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // Add more fields as needed
});

module.exports = mongoose.model('User', userSchema);
