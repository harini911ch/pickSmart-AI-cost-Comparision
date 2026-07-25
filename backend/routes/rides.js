const express = require('express');
const router = express.Router();
const ridesData = require('../data/ridesData');

// GET /api/rides?from=...&to=...&sort=price&vehicle=all
router.get('/', (req, res) => {
  const { from, to, sort = 'price', vehicle = 'all' } = req.query;

  if (!from || !to) {
    return res.status(400).json({ error: 'Please provide from and to locations.' });
  }

  // Simulate distance between 4km and 16km
  const km = parseFloat((4 + Math.random() * 12).toFixed(1));

  // Get current hour to apply time-based surge pricing
  const hour = new Date().getHours();
  const isPeakHour = (hour >= 8 && hour <= 10) || (hour >= 17 && hour <= 20);

  let results = ridesData.map(ride => {
    const surgeMultiplier = (ride.surge || isPeakHour) ? 1.4 : 1.0;
    const price = Math.round(ride.basePrice + ride.pricePerKm * km * surgeMultiplier);
    const waitMin = ride.eta + Math.floor(Math.random() * 3);
    return {
      ...ride,
      price,
      waitMin,
      km,
      isSurge: ride.surge || isPeakHour,
    };
  });

  // Filter by vehicle type
  if (vehicle !== 'all') {
    results = results.filter(r => r.type === vehicle);
  }

  // Sort results
  if (sort === 'price') {
    results.sort((a, b) => a.price - b.price);
  } else if (sort === 'time') {
    results.sort((a, b) => a.waitMin - b.waitMin);
  } else if (sort === 'both') {
    results.sort((a, b) => (a.price * 0.6 + a.waitMin * 8) - (b.price * 0.6 + b.waitMin * 8));
  }

  res.json({
    from,
    to,
    km,
    isPeakHour,
    totalResults: results.length,
    rides: results,
  });
});

module.exports = router;