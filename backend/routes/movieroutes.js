// routes/movieroutes.js

const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching movies', error });
    }
});

// GET a movie by ID
router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching movie', error });
    }
});

// POST a new movie
router.post('/addmovie', async (req, res) => {
    try {
        const newMovie = new Movie({
            title: req.body.title,
            language: req.body.language,
            rating: req.body.rating,
            runtime: req.body.runtime,
            trailerLink: req.body.trailerLink,
            description: req.body.description,
            poster: req.body.poster, // assuming you have the path or URL for the image
        });
        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
    } catch (error) {
        res.status(400).json({ message: 'Error adding movie', error });
    }
});

// PUT update a movie by ID
router.put('updatemovie/:id', async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                language: req.body.language,
                rating: req.body.rating,
                runtime: req.body.runtime,
                trailerLink: req.body.trailerLink,
                description: req.body.description,
                poster: req.body.poster,
            },
            { new: true }
        );

        if (!updatedMovie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        
        res.json(updatedMovie);
    } catch (error) {
        res.status(400).json({ message: 'Error updating movie', error });
    }
});

// DELETE a movie by ID
router.delete('/deletemovie/:id', async (req, res) => {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        if (!deletedMovie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json({ message: 'Movie deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting movie', error });
    }
});

module.exports = router;
