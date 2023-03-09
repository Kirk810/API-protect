const mongoose = require('mongoose');

const ProducerSchema = new mongoose.Schema(
    {
        producer: { type: String, required: true, trim: true },
        movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
    }
);

const Producer = mongoose.model("Producer", ProducerSchema);

module.exports = Producer;