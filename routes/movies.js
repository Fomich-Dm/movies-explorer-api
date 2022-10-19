const router = require('express').Router();
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');
const { createMovieValid, deleteMovieValid } = require('../middlewares/celebrateValid');

router.get('/', getMovies);

router.post('/', createMovieValid, createMovie);

router.delete('/:movieId', deleteMovieValid, deleteMovie);

module.exports = router;
