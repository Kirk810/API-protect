const express = require('express');
const { upload } = require('../../middlewares/files.middleware');
const { isAuth } = require('../../middlewares/auth.middleware');

const {
    getAllProducers,
    createProducer,
} = require('../controllers/producers.controller');

const ProducersRoutes = express.Router();

ProducersRoutes.get("/", getAllProducers);
ProducersRoutes.post("/", [isAuth], upload.single("poster"), createProducer);

module.exports = ProducersRoutes;