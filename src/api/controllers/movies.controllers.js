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
    if (!movie || movie.length === 0) {
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
    if (!movieByTitle || movieByTitle.length === 0) {
      return res.status(404).json("No movie found by this title");
    }
    return res.status(200).json(movieByTitle);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getMoviesByYear = async (req, res) => {
  const { year } = req.params;
  try {
    const moviesByYear = await Movie.find({ year: { $gte: year } });
    if (!moviesByYear || moviesByYear.length === 0) {
      return res.status(404).json("No movies found by this year");
    }
    return res.status(200).json(moviesByYear);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getMoviesByGenre = async (req, res) => {
  const { genre } = req.params;
  try {
    const moviesByGenre = await Movie.find({ genre: genre });
    if (!moviesByGenre || moviesByGenre.length === 0) {
      return res.status(404).json("No movies found by this genre");
    }
    return res.status(200).json(moviesByGenre);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const createdMovie = await newMovie.save();
    return res.status(201).json(createdMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedMovie || updatedMovie.length === 0) {
      return res.status(404).json("No movie found by this id");
    }
    return res.status(200).json(updatedMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie || deletedMovie.length === 0) {
      return res.status(404).json("No movie found by this id");
    }
    return res.status(200).json("Movie deleted successfully");
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  getMovieByTitle,
  getMoviesByYear,
  getMoviesByGenre,
  createMovie,
  updateMovie,
  deleteMovie,
};
