const db = require('../models')

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

module.exports = {
    getWeather,
    /* createPeople,
    updatePerson,
    deletePerson */
}