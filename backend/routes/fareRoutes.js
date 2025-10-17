const express = require('express');
const router = express.Router();
const { 
  calculateRoute, 
  getStations, 
  getMetroMapData 
} = require('../controllers/fareController');

// Calculate route with fare and alternates
router.post('/calculate-route', calculateRoute);

// Get all stations
router.get('/stations', getStations);

// Get metro map data
router.get('/metro-map', getMetroMapData);

module.exports = router;