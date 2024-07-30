const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
    name: String,
    type: String,
    startdate: String,
    enddate: String,
    locations: String,
    deathtoll: String,
    estdamages: String,
});

const Weather = mongoose.model('Weather', WeatherSchema);

module.exports = Weather