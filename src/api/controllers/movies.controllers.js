const Movie = require("../models/movie.model");

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json("No movie found by this id");
    }
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getMovieByTitle = async (req, res) => {
  const { title } = req.params;
  try {
    const movieByTitle = await Movie.find({ title });
    if (!movieByTitle) {
      return res.status(404).json("No movie found by this title");
    }
    return res.status(200).json(movieByTitle);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getMoviesByGenre = async (req, res) => {
  const { genre } = req.params;
  try {
    const moviesByGenre = await Movie.find({ genre });
    if (!moviesByGenre) {
      return res.status(404).json("No movies found by this genre");
    }
    return res.status(200).json(movieByGenre);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getMoviesByYear = async (req, res) => {
  const { year } = req.params;
  try {
    const moviesByYear = await Movie.find({ year: { $gt: year } });
    if (!moviesByYear) {
      return res.status(404).json("No movies found by this year");
    }
    return res.status(200).json(moviesByYear);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  getMovieByTitle,
  getMoviesByGenre,
  getMoviesByYear,
};
