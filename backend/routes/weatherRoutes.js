const router = require('express').Router();
const { weatherCtrl } = require('../controllers')

// ROUTES - METHODS
router.get('/', weatherCtrl.getWeather)
/* router.post('/', peopleCtrl.createPeople)
router.put('/:id', peopleCtrl.updatePerson)
router.delete('/:id', peopleCtrl.deletePerson) */

module.exports = router;