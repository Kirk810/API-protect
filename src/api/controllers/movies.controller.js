const Movie = require('../models/movie.model');
const { deleteImgCloudinary } = require("../../middlewares/files.middleware");

const getAllMovies = async (req, res, next) => {
  try {
    const allMovies = await Movie.find();
    return res.status(200).json(allMovies);
  } catch (error) {
    return next('Movies not found', error);
  }
};

const createMovie = async (req, res, next) => {
  try {
    const movie = new Movie({
      ...req.body,
      poster: req.file
        ? req.file.path
        : "https://res.cloudinary.com/dvdoak5et/image/upload/v1678126582/Bestiary/no-image-available-icon-6_wjrwha.png"
    });
    const createdMovie = await movie.save();
    return res.status(201).json(createdMovie);
  } catch (error) {
    return next("Error creating movie", error);
  }
};

const updateMovieByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newMovie = new Movie(req.body);
    newMovie._id = id;

    const originalMovie = await Movie.findById(id);
    if (req.file) {
      deleteImgCloudinary(originalMovie.poster);
      newMovie.poster = req.file.path;
    }
    await Movie.findByIdAndUpdate(id, newMovie);

    return res.status(200).json(newMovie);
  } catch (error) {
    return next("Failing updating movie", error);
  }
};

module.exports = { getAllMovies, createMovie, updateMovieByID };