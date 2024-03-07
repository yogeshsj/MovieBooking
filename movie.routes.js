// movie.routes.js
const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie.controller');

// Define movie routes
router.get('/', movieController.getAllMovies);
// Add other movie routes

module.exports = router;
