const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connect = require('./src/utils/connect');
const { configCloudinary } = require('./src/middlewares/files.middleware')
dotenv.config();

configCloudinary();

const PORT = process.env.PORT || 8081;

const server = express();
connect();
server.use(
    cors({
        origin: "*",
        credentials: true,
    })
);
server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ limit: "5mb", extended: true }));

const MoviesRoutes = require("./src/api/routes/movies.routes");
server.use("/api/v1/movies", MoviesRoutes);

server.use("*", (req, res, next) => {
    const error = new Error("Route not found");
    return next(error);
});

server.disable("x-powered-by");

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
