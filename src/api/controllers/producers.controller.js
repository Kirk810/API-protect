const Producer = require('../models/producer.model');

const getAllProducers = async (req, res, next) => {
    try {
        const allProducers = await Producer.find().populate("allMovies");
        return res.status(200).json(allProducers);
    } catch (error) {
        return next('Producers not found', error);
    }
};

const createProducer = async (req, res, next) => {
    try {
        const producer = new Producer({
            ...req.body,
            poster: req.file
                ? req.file.path
                : "https://res.cloudinary.com/dvdoak5et/image/upload/v1678126582/Bestiary/no-image-available-icon-6_wjrwha.png"
        });
        const createdProducer = await producer.save();
        return res.status(201).json(createdProducer);
    } catch (error) {
        return next("Error creating producer", error);
    }
};

module.exports = { getAllProducers, createProducer };