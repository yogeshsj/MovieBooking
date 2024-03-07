
const Movie = require('../models/movie.model');

// Get all movies
exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get movie by ID
exports.getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (movie) {
            res.json(movie);
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new movie
exports.createMovie = async (req, res) => {
    const movie = new Movie({
        title: req.body.title,
        genre: req.body.genre,
        director: req.body.director,
        releaseDate: req.body.releaseDate,
        duration: req.body.duration,
        rating: req.body.rating
        // Add more fields as needed
    });

    try {
        const newMovie = await movie.save();
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an existing movie
exports.updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (movie) {
            movie.title = req.body.title || movie.title;
            movie.genre = req.body.genre || movie.genre;
            movie.director = req.body.director || movie.director;
            movie.releaseDate = req.body.releaseDate || movie.releaseDate;
            movie.duration = req.body.duration || movie.duration;
            movie.rating = req.body.rating || movie.rating;
            // Update other fields as needed
            const updatedMovie = await movie.save();
            res.json(updatedMovie);
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a movie
exports.deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (movie) {
            await movie.remove();
            res.json({ message: 'Movie deleted' });
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
