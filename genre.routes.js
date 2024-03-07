// genre.routes.js
const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genre.controller');

// Define genre routes
router.get('/', genreController.getAllGenres);
// Add other genre routes

module.exports = router;
