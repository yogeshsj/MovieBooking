// genre.controller.js
const Genre = require('../models/genre.model');

// Function to get all genres
exports.getAllGenres = async (req, res) => {
    try {
        const genres = await Genre.find();
        res.json(genres);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to get a genre by ID
exports.getGenreById = async (req, res) => {
    const { id } = req.params;
    try {
        const genre = await Genre.findById(id);
        if (!genre) {
            return res.status(404).json({ message: "Genre not found" });
        }
        res.json(genre);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to create a new genre
exports.createGenre = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: "Name is required" });
    }
    try {
        const newGenre = new Genre({ name });
        await newGenre.save();
        res.status(201).json(newGenre);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to update a genre
exports.updateGenre = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: "Name is required" });
    }
    try {
        const updatedGenre = await Genre.findByIdAndUpdate(id, { name }, { new: true });
        if (!updatedGenre) {
            return res.status(404).json({ message: "Genre not found" });
        }
        res.json(updatedGenre);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to delete a genre
exports.deleteGenre = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedGenre = await Genre.findByIdAndDelete(id);
        if (!deletedGenre) {
            return res.status(404).json({ message: "Genre not found" });
        }
        res.json({ message: "Genre deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
