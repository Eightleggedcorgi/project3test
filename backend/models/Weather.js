const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
    name: String,
    image: String,
    title: String
});

const Weather = mongoose.model('Weather', WeatherSchema);

module.exports = Weather