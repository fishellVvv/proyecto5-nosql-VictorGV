const express = require("express");

const {
  getAllMovies,
  getMovieById,
  getMovieByTitle,
  getMoviesByYear,
  getMoviesByGenre,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movies.controllers");

const router = express.Router();

router.get("/", getAllMovies);
router.get("/id/:id", getMovieById);
router.get("/title/:title", getMovieByTitle);
router.get("/year/:year", getMoviesByYear);
router.get("/genre/:genre", getMoviesByGenre);
router.post("/", createMovie);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

module.exports = router;
