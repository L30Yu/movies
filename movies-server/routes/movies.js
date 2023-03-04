const router = require('express').Router();
const movieModel = require('../models/movies');


router.post('/api/movie', async (req, res) => {
    try {
        const newMovie = new movieModel({
            title: req.body.title
        })
        const saveMovie = await newMovie.save()
        res.status(200).json(saveMovie);
    } catch (err) {
        res.json(err);
    }
})

router.get('/api/movies', async (req, res) => {
    try {
        const allTodoMovies = await movieModel.find({});
        res.status(200).json(allTodoMovies)
    } catch (err) {
        res.json(err);
    }
})


router.put('/api/movie/:id', async (req, res) => {
    try {
        const updateMovie = await movieModel.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).json(updateMovie);
    } catch (err) {
        res.json(err);
    }
})


router.delete('/api/movie/:id', async (req, res) => {
    try {
        const deleteMovie = await movieModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Movie Deleted');
    } catch (err) {
        res.json(err);
    }
})

router.put('/api/like/:id', async (req, res) => {
    try {
        const updateMovieLike = await movieModel.findByIdAndUpdate(req.params.id, {
            $inc: { likes: 1 }
        },{
            new:true
        });
        res.status(200).json(updateMovieLike);
    } catch (err) {
        res.json(err);
    }
})

module.exports = router;