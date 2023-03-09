const express = require('express');
const { upload } = require('../../middlewares/files.middleware')

const {
    getAllMovies,
    createMovie,
    updateMovieByID,
} = require("../controllers/movies.controller");

const MoviesRoutes = express.Router();

MoviesRoutes.get("/", getAllMovies);
MoviesRoutes.post("/", upload.single("poster"), createMovie);
MoviesRoutes.patch("/:id", upload.single('poster'), updateMovieByID);

module.exports = MoviesRoutes;