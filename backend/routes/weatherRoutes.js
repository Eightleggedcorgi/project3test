const router = require('express').Router();
const { weatherCtrl } = require('../controllers')

// ROUTES - METHODS
router.get('/', weatherCtrl.getWeather)
router.post('/', weatherCtrl.createWeather)
router.put('/:id', weatherCtrl.updateWeather)
router.delete('/:id', weatherCtrl.deleteWeather)

module.exports = router;