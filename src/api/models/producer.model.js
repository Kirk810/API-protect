const mongoose = require('mongoose');

const ProducerSchema = new mongoose.Schema(
    {
        producer: { type: String, required: true, trim: true },
        logo: { type: String, required: true },
        movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
    }
);

const Producer = mongoose.model("producer", ProducerSchema);

module.exports = Producer;