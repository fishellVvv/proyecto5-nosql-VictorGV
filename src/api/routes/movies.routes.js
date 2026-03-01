const express = require("express");

const {
  getAllMovies,
  getMovieById,
  getMovieByTitle,
  getMoviesByGenre,
  getMoviesByYear,
} = require("../controllers/movies.controllers");

const router = express.Router();

router.get("/", getAllMovies);
router.get("/id/:id", getMovieById);
router.get("/title/:title", getMovieByTitle);
router.get("/genre/:genre", getMoviesByGenre);
router.get("/year/:year", getMoviesByYear);

module.exports = router;
