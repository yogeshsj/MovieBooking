// user.routes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Define user routes
router.get('/', userController.getAllUsers);
// Add other user routes

module.exports = router;
