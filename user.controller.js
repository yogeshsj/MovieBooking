const User = require('../models/user.model');

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new user
exports.createUser = async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        // Add more fields as needed
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an existing user
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            user.username = req.body.username || user.username;
            user.email = req.body.email || user.email;
            user.password = req.body.password || user.password;
            // Update other fields as needed
            const updatedUser = await user.save();
            res.json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a user
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            await user.remove();
            res.json({ message: 'User deleted' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
