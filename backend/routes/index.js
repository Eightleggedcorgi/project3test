const router = require('express').Router()
const weatherRoute = require('./weatherRoutes')

router.use('/weather', weatherRoute)

module.exports = router