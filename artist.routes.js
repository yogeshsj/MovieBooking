// artist.routes.js
const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artist.controller');

// Define artist routes
router.get('/', artistController.getAllArtists);
// Add other artist routes

module.exports = router;
