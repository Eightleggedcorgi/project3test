const router = require('express').Router();
const fetch = require('node-fetch');
const { weatherCtrl } = require('../controllers')

// ROUTES - METHODS
router.get('/', weatherCtrl.getWeather)
router.post('/', weatherCtrl.createWeather)
router.put('/:id', weatherCtrl.updateWeather)
router.delete('/:id', weatherCtrl.deleteWeather)

// New route to fetch daily weather info from external API
router.get('/latest', async (req, res) => {
    const url = 'https://api.ambeedata.com/weather/latest/by-lat-lng?lat=26&lng=81';
    const options = {
      method: 'GET',
      headers: {
        'x-api-key': 'e166a58ae0776447275a01fecaeaa542386c52bcdaa6f769ec8cfb8158f9e83b',
        'Content-type': 'application/json'
      }
    };
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send(`Error: ${error.message}`);
    }
  });
  
  module.exports = router;