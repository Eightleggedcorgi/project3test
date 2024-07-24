const db = require('../models')

// Show Weather
const getWeather = (req, res) => {
    db.Weather.find({})
    .then((foundWeather) => {
        if(!foundWeather){
            res.status(404).json({message: 'Error getting weather'})
        } else {
            res.status(200).json({data: foundWeather})
        }
    })
}

// Create Weather
const createWeather = (req, res) => {
    db.Weather.create(req.body)
    .then((createdWeather) => {
        if(!createdWeather){
            res.status(400).json({message: 'Error creating weather'})
        } else {
            res.status(201).json({data: createdWeather, message: 'Weather info created'})
        }
    })
}

// Update Weather
const updateWeather = (req, res) => {
    db.Weather.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedWeather) => {
        if(!updatedWeather){
            res.status(400).json({Message: 'Error updating weather'})
        } else {
            res.status(200).json({Data: updatedWeather, Message: "Weather info updated"})
        }
    })
}

// Destroy Weather
const deleteWeather = (req, res) => {
    db.Weather.findByIdAndDelete(req.params.id)
    .then((deletedWeather) => {
        if(!deletedWeather){
            res.status(400).json({Message: 'Error deleting weather info'})
        } else {
            res.status(200).json({Data: deletedWeather, Message: "Weather info deleted"})
        }
    })
}

module.exports = {
    getWeather,
    createWeather,
    updateWeather,
    deleteWeather
}