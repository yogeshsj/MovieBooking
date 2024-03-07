// artist.controller.js
const Artist = require('../models/artist.model');

// Get all artists
exports.getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.find();
        res.json(artists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get artist by ID
exports.getArtistById = async (req, res) => {
    try {
        const artist = await Artist.findById(req.params.id);
        if (artist) {
            res.json(artist);
        } else {
            res.status(404).json({ message: 'Artist not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new artist
exports.createArtist = async (req, res) => {
    const artist = new Artist({
        name: req.body.name
    });

    try {
        const newArtist = await artist.save();
        res.status(201).json(newArtist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an existing artist
exports.updateArtist = async (req, res) => {
    try {
        const artist = await Artist.findById(req.params.id);
        if (artist) {
            artist.name = req.body.name || artist.name;
            const updatedArtist = await artist.save();
            res.json(updatedArtist);
        } else {
            res.status(404).json({ message: 'Artist not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an artist
exports.deleteArtist = async (req, res) => {
    try {
        const artist = await Artist.findById(req.params.id);
        if (artist) {
            await artist.remove();
            res.json({ message: 'Artist deleted' });
        } else {
            res.status(404).json({ message: 'Artist not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
