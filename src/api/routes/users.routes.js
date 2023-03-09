const express = require('express');

const {
    registerUser,
    loginUser,
    logoutUser,
} = require('../controllers/users.controller');

const UsersRoutes = express.Router();

UsersRoutes.post("/register", registerUser);
UsersRoutes.post("/login", loginUser);
UsersRoutes.post("/logout", logoutUser);

module.exports = UsersRoutes;